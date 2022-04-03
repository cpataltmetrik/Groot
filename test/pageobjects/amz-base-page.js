const url = require('../config/env');

module.exports = class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        browser.maximizeWindow();
        return browser.url(url.QA);
    }
}
