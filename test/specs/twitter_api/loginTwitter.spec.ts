import {
    apiEnvironmentVariables, loadPage, addLogger, loginTwitter
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Login to twitter website", async () => {
    it("Should log in into the twitter website", async () => {

        await (await loginTwitter.username).setText(`${apiEnvironmentVariables.username}`)
        await (await loginTwitter.nextButton).clickWhenDisplayed()
        await (await loginTwitter.password).setText(`${apiEnvironmentVariables.password}`)
        await (await loginTwitter.loginButton).clickWhenReady()

        const urlAndTitle: any = await loadPage.printUrlAndTitle()
        addLogger(`${await urlAndTitle.webPageUrl}`)
        addLogger(`${await urlAndTitle.webPageTitle}`)

        //WDIO Assertions
        await loadPage.wdioAssertions("home", "Twitter")

        //Chai Assertions
        await loadPage.chaiEqualComparisonAssertion(
            urlAndTitle.webPageUrl,
            `${apiEnvironmentVariables.websiteUrl}/i/flow/login`
        )
        await loadPage.chaiEqualComparisonAssertion(
            urlAndTitle.webPageTitle,
            "Twitter"
        )
        await browser.pause(5000)
    })
})