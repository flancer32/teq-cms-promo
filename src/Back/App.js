export default class Fl32_Cms_Demo_Back_App {
    /* eslint-disable jsdoc/require-param-description,jsdoc/check-param-names */
    /**
     * @param {typeof import('node:path')} path
     * @param {Fl32_Cms_Demo_Back_Defaults} DEF
     * @param {Fl32_Cms_Demo_Back_Logger} logger
     * @param {Fl32_Web_Back_Server_Config} dtoWebCfg
     * @param {Fl32_Web_Back_Dispatcher} dispatcher
     * @param {Fl32_Web_Back_Handler_Pre_Log} hndlRequestLog
     * @param {Fl32_Web_Back_Handler_Static} hndlStatic
     * @param {Fl32_Web_Back_Server} server
     * @param {Fl32_Cms_Back_Web_Handler_Template} hndlCmsTmpl
     */
    constructor(
        {
            'node:path': path,
            Fl32_Cms_Demo_Back_Defaults$: DEF,
            Fl32_Cms_Demo_Back_Logger$: logger,
            Fl32_Web_Back_Server_Config$: dtoWebCfg,
            Fl32_Web_Back_Dispatcher$: dispatcher,
            Fl32_Web_Back_Handler_Pre_Log$: hndlRequestLog,
            Fl32_Web_Back_Handler_Static$: hndlStatic,
            Fl32_Web_Back_Server$: server,
            Fl32_Cms_Back_Web_Handler_Template$: hndlCmsTmpl,
        }
    ) {
        /* eslint-enable jsdoc/require-param-description,jsdoc/check-param-names */
        // VARS
        const {join} = path;

        // MAIN
        /**
         * Start the application.
         * @param {string} root - the absolute path to the root folder of the app.
         * @returns {Promise<void>}
         */
        this.start = async function ({root}) {
            logger.info('The application is starting...');
            try {
                // configure all the handlers
                const rootPath = join(root, DEF.DIR_WEB);
                await hndlStatic.init({rootPath});
                await hndlCmsTmpl.init({
                    allowedLocales: ['en', 'ru'],
                    defaultLocale: 'en',
                    localeInUrl: true,
                    rootPath: root,
                    tmplEngine: process.env.TMPL_ENGINE,
                });
                // add handlers to the dispatcher
                dispatcher.addHandler(hndlCmsTmpl);
                dispatcher.addHandler(hndlRequestLog);
                dispatcher.addHandler(hndlStatic);
                // configure the web server
                const cfg = dtoWebCfg.create();
                cfg.port = process.env.SERVER_PORT || DEF.PORT;
                await server.start(cfg);
                logger.info('The application is ready.');
            } catch (e) {
                logger.exception(e);
            }
        };
    }
}