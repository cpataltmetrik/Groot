import Page from "./page"

export default class SelectCategory extends Page {

    /**
     * It is used to open url in browser and load respective webpage
     * @param path 
     * @returns {string} path
     */
    public async open(path: string): Promise<string> {
        return await super.open(path)
    }

    /**
     * It is used to fetch url address as well as title of webpage
     * @returns {object} webPageUrl, webPageTitle
     */
    public async getUrlAndTitle(): Promise<object> {
        return {
            webPageUrl: await browser.getUrl(),
            webPageTitle: await browser.getTitle()
        }
    }

    public get dropdown() {
        return <any>$("#searchDropdownBox")
    }

    public get optionsArray() {
        return <any>$$("//select[@id='searchDropdownBox']/option")
    }

    public get searchBox() {
        return <any>$("#twotabsearchtextbox")
    }

    public get searchBtn() {
        return <any>$("//*[@type='submit']")
    }
}