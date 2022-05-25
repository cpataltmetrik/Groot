import {
    apiEnvironmentVariables, loadPage, addLogger
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Load a website url in browser", async () => {
    it("Should open website url in browser", async () => {

        await loadPage.loadWebsite(`${apiEnvironmentVariables.websiteUrl}/login`)
        const urlAndTitle: any = await loadPage.printUrlAndTitle()
        addLogger(`${await urlAndTitle.webPageUrl}`)
        addLogger(`${await urlAndTitle.webPageTitle}`)

        //WDIO Assertions
        await loadPage.wdioAssertions("twitter.com", "Twitter")

        //Chai Assertions
        await loadPage.chaiEqualComparisonAssertion(
            urlAndTitle.webPageUrl,
            `${apiEnvironmentVariables.websiteUrl}/login`
        )
        await loadPage.chaiEqualComparisonAssertion(
            urlAndTitle.webPageTitle,
            "Twitter"
        )
    })
})