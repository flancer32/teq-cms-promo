/**
 * CMS backend adapter implementation for the demo environment.
 * Handles template rendering data preparation with locale extraction.
 * @implements Fl32_Cms_Back_Api_Adapter
 */
export default class Fl32_Cms_Demo_Back_Di_Replace_Cms {
    /* eslint-disable jsdoc/require-param-description,jsdoc/check-param-names */
    /**
     * @param {Fl32_Cms_Back_Config} configCms
     * @param {Fl32_Cms_Back_Helper_Web} helpCmsWeb
     * @param {Fl32_Tmpl_Back_Dto_Target} dtoTmplTarget
     */
    constructor(
        {
            Fl32_Cms_Back_Config$: configCms,
            Fl32_Cms_Back_Helper_Web$: helpCmsWeb,
            Fl32_Tmpl_Back_Dto_Target$: dtoTmplTarget,
        }
    ) {
        /* eslint-enable jsdoc/require-param-description,jsdoc/check-param-names */
        this.getRenderData = async function ({req}) {
            // FUNCS
            function extractLocaleFromUrl(urlPath, allowed, fallback) {
                const trimmed = urlPath.replace(/^\/+|\/+$/g, '');
                const segments = trimmed.split('/');
                const first = segments[0];

                if (allowed.includes(first)) {
                    return {
                        locale: first,
                        cleanPath: '/' + segments.slice(1).join('/'),
                    };
                } else {
                    return {
                        locale: fallback,
                        cleanPath: urlPath,
                    };
                }
            }

            function buildTemplatePath(cleanPath, defaultFiles = ['index.html']) {
                const trimmed = cleanPath.replace(/^\/+|\/+$/g, '');
                if (trimmed === '') return defaultFiles[0];
                if (cleanPath.endsWith('/')) return `${trimmed}/${defaultFiles[0]}`;
                return trimmed;
            }

            // MAIN
            const allowedLocales = configCms.getLocaleAllowed();
            const defaultLocale = configCms.getLocaleBaseWeb();
            const rawPath = decodeURIComponent(req.url?.split('?')[0] || '');
            const {cleanPath} = extractLocaleFromUrl(rawPath, allowedLocales, defaultLocale);
            const locale = helpCmsWeb.extractLocale({req});
            const tmplPath = buildTemplatePath(cleanPath);

            const target = dtoTmplTarget.create({
                type: 'web',
                name: tmplPath,
                locales: {
                    user: locale,
                    app: defaultLocale,
                },
            });
            const data = {
                ...extractVisitorInfo(req),
                locale: {
                    allowed: allowedLocales,
                    current: locale,
                },
            };
            return {target, data, options: {}};
        };
    }
}

/**
 * Extracts basic visitor information from an HTTP request.
 * @param {import('node:http').IncomingMessage | import('node:http2').Http2ServerRequest} req
 * @returns {{
 *   client: {
 *     ip: string,
 *     ua: string,
 *     lang: string
 *   },
 *   url: {
 *     path: string
 *   }
 * }}
 */
function extractVisitorInfo(req) {
    const headers = req.headers || {};
    const ip = req.socket?.remoteAddress || req.connection?.remoteAddress || '';
    const ua = headers['user-agent'] || '';
    const lang = headers['accept-language']?.split(',')[0] || '';
    const path = req.url?.split('?')[0] || '';

    return {
        client: {ip, ua, lang},
        url: {path}
    };
}