import {
    apiEnvironmentVariables, twitterAPIData, fs, chaiExpect, apiGetMethodCall, loadPage, addLogger, fetchUserDetailsByUsername
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Search for username on twitter and verify user details", async () => {
    it("Should search for username on twitter to get user information and also verify same details", async () => {

        await loadPage.loadWebsite(`${apiEnvironmentVariables.websiteUrl}/explore`)
        const urlAndTitle: any = await loadPage.printUrlAndTitle()
        addLogger(`${await urlAndTitle.webPageUrl}`)
        addLogger(`${await urlAndTitle.webPageTitle}`)

        //WDIO Assertions
        await loadPage.wdioAssertions("twitter.com", "Twitter")

        //Chai Assertions
        await loadPage.chaiEqualComparisonAssertion(
            urlAndTitle.webPageUrl,
            `${apiEnvironmentVariables.websiteUrl}/explore`
        )
        await loadPage.chaiEqualComparisonAssertion(
            urlAndTitle.webPageTitle,
            "Twitter"
        )

        await (await fetchUserDetailsByUsername.searchBox).setText(twitterAPIData.userAccountUserName)
        await fetchUserDetailsByUsername.pressEnter
        await (await fetchUserDetailsByUsername.redirectToUserAccount).clickWhenDisplayed()

        //Get user information   
        /*
        let accountName: any = await (await fetchUserDetailsByUsername.accountName).getText()
        addLogger(`${accountName}`)
        let accountUserName: any = await (await fetchUserDetailsByUsername.accountUserName).getText()
        addLogger(`${accountUserName}`)

        accountUserName = accountUserName.replace("@", "")
        */

        twitterAPIData.userPageUrl = await urlAndTitle.webPageUrl
        twitterAPIData.userAccountName = await twitterAPIData.userAccountName
        twitterAPIData.userAccountUserName = await twitterAPIData.userAccountUserName
        fs.writeFileSync(
            "D:/WebDriverIO_Mocha_Chai_Practice_Projects/Developed_Framework_Github_Project/api_testing/test/testData/twitterApi.data.json",
            JSON.stringify(twitterAPIData)
        )

        //Call get method of HTTP request to fetch user details with the help of username
        if (twitterAPIData.userAccountUserName == twitterAPIData.userAccountUserName) {

            const queryParameters = {
                params: {
                    "user.fields": "public_metrics"
                }
            }

            apiGetMethodCall.apiGetMethod(
                `${apiEnvironmentVariables.baseUrl}/users/by/username/${twitterAPIData.userAccountUserName}`,
                queryParameters.params
            )
                .then(result => {
                    console.log(result.data)

                    twitterAPIData.user_id = result.data.data.id
                    twitterAPIData.userAccountName = result.data.data.name
                    twitterAPIData.userAccountUserName = result.data.data.username
                    twitterAPIData.userPublicMetrics = result.data.data.public_metrics
                    fs.writeFileSync(
                        "D:/WebDriverIO_Mocha_Chai_Practice_Projects/Developed_Framework_Github_Project/api_testing/test/testData/twitterApi.data.json",
                        JSON.stringify(twitterAPIData)
                    )

                    //Chai Assertions
                    chaiExpect(result.data.data.id).to.be.a("string")
                    chaiExpect(result.data.data.id).to.equal(`${twitterAPIData.user_id}`)
                    chaiExpect(result.data.data.name).to.be.a("string")
                    chaiExpect(result.data.data.name).to.equal(twitterAPIData.userAccountName)
                    chaiExpect(result.data.data.username).to.be.a("string")
                    chaiExpect(result.data.data.username).to.equal(twitterAPIData.userAccountUserName)
                    chaiExpect(result.data.data.public_metrics).to.be.a("object")
                    chaiExpect(result.data.data.public_metrics).to.equal(twitterAPIData.userPublicMetrics)
                })
                .catch(error => { console.log(error) })
        }
    })
})