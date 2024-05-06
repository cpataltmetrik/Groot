import {
    apiEnvironmentVariables, twitterAPIData, chaiExpect, apiGetMethodCall, loadPage, addLogger, fetchUserFollowingDetails
} from "../../../src/main/pageObjects/commonImportStatements.page"

describe("Get details of followings of user", async () => {
    it("Should fetch details of followings of user", async () => {

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

        //Following Count
        let userFollowingCount: any = await (await fetchUserFollowingDetails.followingCount).getText()
        addLogger(`Followsers count of ${twitterAPIData.userAccountName} is :- ${userFollowingCount}`)
        userFollowingCount = await userFollowingCount.replace(",", "")
        chaiExpect(userFollowingCount).to.equal(`${twitterAPIData.userPublicMetrics.following_count}`)

        await (await fetchUserFollowingDetails.followingLink).click()
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
            `https://twitter.com/${twitterAPIData.userAccountUserName}/following`
        )

        const queryParameters = {
            params: {
                "max_results": "1000"
            }
        }

        apiGetMethodCall.apiGetMethod(
            `${apiEnvironmentVariables.baseUrl}/users/${twitterAPIData.user_id}/following`,
            queryParameters.params
        )
            .then(result => {
                console.log(result.data)

                result.data.data.map((followingPerson: any) => {
                    console.log(followingPerson)

                    //Chai Assertions
                    chaiExpect(followingPerson.id).to.be.a("string")
                    chaiExpect(followingPerson.name).to.be.a("string")
                    chaiExpect(followingPerson.username).to.be.a("string")
                })
            })
            .catch(error => { console.log(error) })
    })
})