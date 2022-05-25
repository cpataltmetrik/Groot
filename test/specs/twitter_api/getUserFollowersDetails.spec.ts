import {
    apiEnvironmentVariables, twitterAPIData, chaiExpect, apiGetMethodCall, loadPage, addLogger, axios, fetchUserFollowersDetails
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Get details of followers of user", async () => {
    it("Should fetch count and details of followers of user", async () => {

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

        //Followers Count
        let userFollowersCount: any = await (await fetchUserFollowersDetails.followersCount).getText()
        addLogger(`Followsers count of ${twitterAPIData.userAccountName} is :- ${userFollowersCount}`)
        userFollowersCount = await userFollowersCount.replace(",", "")
        chaiExpect(userFollowersCount).to.equal(`${twitterAPIData.userPublicMetrics.followers_count}`)

        await (await fetchUserFollowersDetails.followersLink).click()
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
            `https://twitter.com/${twitterAPIData.userAccountUserName}/followers`
        )

        const queryParameters = {
            params: {
                "max_results": "1000"
            }
        }

        apiGetMethodCall.apiGetMethod(
            `${apiEnvironmentVariables.baseUrl}/users/${twitterAPIData.user_id}/followers`,
            queryParameters.params
        )

        const response: any = await axios.get(
            `${apiEnvironmentVariables.baseUrl}/users/${twitterAPIData.user_id}/followers`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiEnvironmentVariables.bearerToken}`
                },
                params: {
                    "max_results": "1000"
                }
            }
        )
            .then(result => {
                console.log(result.data)

                result.data.data.map((followerPerson: any) => {
                    console.log(followerPerson)

                    //Chai Assertions
                    chaiExpect(followerPerson.id).to.be.a("string")
                    chaiExpect(followerPerson.name).to.be.a("string")
                    chaiExpect(followerPerson.username).to.be.a("string")
                })
            })
            .catch(error => { console.log(error) })
    })
})