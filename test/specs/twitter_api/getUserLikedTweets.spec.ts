import {
    apiEnvironmentVariables, twitterAPIData, chaiExpect, apiGetMethodCall, loadPage, addLogger, fetchUserLikedTweetDetails
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Get details of user's liked tweets", async () => {
    it("Should fetch information about user's liked tweets", async () => {

        await loadPage.loadWebsite(`${apiEnvironmentVariables.websiteUrl}/${twitterAPIData.userAccountUserName}`)
        let urlAndTitle: any = await loadPage.printUrlAndTitle()
        addLogger(`${await urlAndTitle.webPageUrl}`)
        addLogger(`${await urlAndTitle.webPageTitle}`)

        //WDIO Assertions
        await loadPage.wdioAssertions(
            `${twitterAPIData.userAccountName}`,
            `${twitterAPIData.userAccountUserName}`
        )

        //Chai Assertions
        await loadPage.chaiEqualComparisonAssertion(
            urlAndTitle.webPageUrl,
            `https://twitter.com/${twitterAPIData.userAccountUserName}`
        )

        await (await fetchUserLikedTweetDetails.likedTweetsLink).click()
        urlAndTitle = await loadPage.printUrlAndTitle()
        addLogger(`${await urlAndTitle.webPageUrl}`)
        addLogger(`${await urlAndTitle.webPageTitle}`)

        //WDIO Assertions
        await loadPage.wdioAssertions(
            `${twitterAPIData.userAccountName}`,
            `${twitterAPIData.userAccountUserName}`
        )

        //Chai Assertions
        await loadPage.chaiEqualComparisonAssertion(
            urlAndTitle.webPageUrl,
            `https://twitter.com/${twitterAPIData.userAccountUserName}/likes`
        )

        const queryParameters = {
            params: {
                "tweet.fields": "public_metrics"
            }
        }

        apiGetMethodCall.apiGetMethod(
            `${apiEnvironmentVariables.baseUrl}/users/${twitterAPIData.user_id}/liked_tweets`,
            queryParameters.params
        )
            .then(result => {
                console.log(result.data)

                result.data.data.map((likedTweet: any) => {
                    console.log(likedTweet)

                    //Chai Assertions
                    chaiExpect(likedTweet.id).to.be.a("string")
                    chaiExpect(likedTweet.public_metrics).to.be.a("object")
                    chaiExpect(likedTweet.text).to.be.a("string")
                })
            })
            .catch(error => { console.log(error) })
    })
})