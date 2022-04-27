import * as config from 'config'
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
//const env = config.get('Environment')
const baseURL = config.get('Environment.baseUrl');

console.log('BASE URL : '+baseURL)
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`${baseURL}/${path}`)
    }
}
