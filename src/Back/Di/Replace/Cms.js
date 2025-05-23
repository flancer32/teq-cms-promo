/**
 * @implements Fl32_Cms_Back_Api_Adapter
 */
export default class Fl32_Cms_Demo_Back_Di_Replace_Cms {
    async getRenderData({req}) {
        const data = extractVisitorInfo(req);
        return {data, options: {}};
    }
}

// FUNCS
/**
 * Extract basic visitor information from an HTTP (S) request.
 *
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