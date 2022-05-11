import Page from "./page"

export default class SelectCategory extends Page {

    public async open(path: string): Promise<string> {
        return await super.open(path)
    }

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