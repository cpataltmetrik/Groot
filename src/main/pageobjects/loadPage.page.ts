import Page from "./page"
import { addLogger, chaiExpect } from "./commonImportStatements.page"

export default class LoadPage extends Page {

    /**
     * To open specified url in browser 
     * @param addressPath {string} 
     * @returns webpage
     */
    public async loadWebsite(addressPath: string): Promise<String> {
        return await browser.url(addressPath)
    }

    /**
     * To display address path and title of webpage on console
     * @returns url and title {object}
     */
    public async printUrlAndTitle(): Promise<object> {
        return {
            webPageUrl: await browser.getUrl(),
            webPageTitle: await browser.getTitle()
        }
    }

    /**
     * To perform webdriverio assertions on webpage url and webpage title
     * @param urlValue {string} and titleValue {string}
     * @returns true or false
     */
    public async wdioAssertions(urlValue: string, titleValue: string): Promise<boolean> {
        try {
            expect(await browser).toHaveUrlContaining(urlValue)
            await expect(browser).toHaveTitleContaining(titleValue)
            return true
        }
        catch (error) {
            addLogger(error)
            return false
        }
    }

    /**
     * To perform chai assertion to compare pair of data
     * @param firstInput {any}, secondInput {any}
     * @returns true or false
     */
    public async chaiEqualComparisonAssertion(firstInput: any, secondInput: any): Promise<boolean> {
        try {
            chaiExpect(await firstInput).to.equal(secondInput)
            return true
        }
        catch (error) {
            addLogger(error)
            return false
        }

    }
}

/*
module.exports = new LoadPage()
export default new LoadPage()
*/