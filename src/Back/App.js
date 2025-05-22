export default class Fl32_Cms_Demo_Back_App {
    /* eslint-disable jsdoc/require-param-description,jsdoc/check-param-names */
    /**
     * @param DEF
     * @param {Fl32_Cms_Demo_Back_Logger} logger
     * @param {Fl32_Web_Back_Server} server
     */
    constructor(
        {
            Fl32_Cms_Demo_Back_Defaults$: DEF,
            Fl32_Cms_Demo_Back_Logger$: logger,
            Fl32_Web_Back_Server$: server,
        }
    ) {
        /* eslint-enable jsdoc/require-param-description,jsdoc/check-param-names */


        this.start = async function () {
            logger.info('The application is starting...');
            try {
                await server.start();
                logger.info('The application is ready.');
            } catch (e) {
                logger.exception(e);
            }
        };
    }
}