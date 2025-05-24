/**
 * CMS demo application backend.
 * Configures and starts web server with CMS template handling.
 */
export default class Fl32_Cms_Demo_Back_App {
    /* eslint-disable jsdoc/require-param-description,jsdoc/check-param-names */
    /**
     * @param {typeof import('node:path')} path
     * @param {Fl32_Cms_Demo_Back_Defaults} DEF
     * @param {Fl32_Cms_Demo_Back_Logger} logger
     * @param {Fl32_Web_Back_Server_Config} configWeb
     * @param {Fl32_Web_Back_Dispatcher} dispatcher
     * @param {Fl32_Web_Back_Handler_Pre_Log} hndlRequestLog
     * @param {Fl32_Web_Back_Handler_Static} hndlStatic
     * @param {Fl32_Web_Back_Server} server
     * @param {Fl32_Cms_Back_Config} configCms
     * @param {Fl32_Cms_Back_Web_Handler_Template} hndlCmsTmpl
     */
    constructor(
        {
            'node:path': path,
            Fl32_Cms_Demo_Back_Defaults$: DEF,
            Fl32_Cms_Demo_Back_Logger$: logger,
            Fl32_Web_Back_Server_Config$: configWeb,
            Fl32_Web_Back_Dispatcher$: dispatcher,
            Fl32_Web_Back_Handler_Pre_Log$: hndlRequestLog,
            Fl32_Web_Back_Handler_Static$: hndlStatic,
            Fl32_Web_Back_Server$: server,
            Fl32_Cms_Back_Config$: configCms,
            Fl32_Cms_Back_Web_Handler_Template$: hndlCmsTmpl,
        }
    ) {
        /* eslint-enable jsdoc/require-param-description,jsdoc/check-param-names */
        // VARS
        const {join} = path;

        // MAIN
        /**
         * Starts web server with configured handlers.
         * @param {string} root - Absolute path to app root folder.
         * @returns {Promise<void>}
         */
        this.start = async function ({root}) {
            logger.info('The application is starting...');
            try {
                // configure the plugins
                configCms.init({
                    allowedLocales: ['en', 'ru'],
                    defaultLocale: 'en',
                    rootPath: root,
                    tmplEngine: process.env.TMPL_ENGINE,
                });
                // configure all the handlers
                const rootPath = join(root, DEF.DIR_WEB);
                await hndlStatic.init({rootPath});
                // add handlers to the dispatcher
                dispatcher.addHandler(hndlCmsTmpl);
                dispatcher.addHandler(hndlRequestLog);
                dispatcher.addHandler(hndlStatic);
                // configure the web server
                const cfg = configWeb.create();
                cfg.port = process.env.SERVER_PORT || DEF.PORT;
                await server.start(cfg);
                logger.info('The application is ready.');
            } catch (e) {
                logger.exception(e);
            }
        };
    }
}