/**
 * @implements Fl32_Tmpl_Back_Api_Adapter
 */
export default class Fl32_Cms_Demo_Back_Di_Replace_Tmpl {
    /* eslint-disable jsdoc/require-param-description,jsdoc/check-param-names */
    /**
     * @param {Fl32_Tmpl_Back_Service_Engine_Nunjucks} nunjucks
     */
    constructor(
        {
            Fl32_Tmpl_Back_Service_Engine_Nunjucks$: nunjucks,
        }
    ) {
        /* eslint-enable jsdoc/require-param-description,jsdoc/check-param-names */
        this.getEngine = () => nunjucks;
    }
}
  