import {
    apiEnvironmentVariables, twitterAPIData, fs, chaiExpect, APICalls, apiGetMethodCall,fetchUserDetailsByUsername,loadPage,addLogger
} from "../../../src/main/pageObjects/commonImportStatements.page"


describe("Fetch single tweet from twitter", async () => {
    it("Should get single tweet details using new function", async () => {

        const queryParameters: any = {
                "tweet.fields": "author_id,public_metrics,created_at,in_reply_to_user_id,referenced_tweets"
        }

        let result = await APICalls.getMethodCall(`${apiEnvironmentVariables.baseUrl}/tweets/${twitterAPIData.tweet_id}`,queryParameters, `${apiEnvironmentVariables.bearerToken}`,200)

                // twitterAPIData.user_id = result.data.data.author_id
                // twitterAPIData.tweet_id = result.data.data.id
                // twitterAPIData.userTweetPublicMetrics = result.data.data.public_metrics
                // fs.writeFileSync(
                //     "D:/User/bpampari/automation/webdriveriowithtypescript/test/testData/twitterApi.data.json",
                //     JSON.stringify(twitterAPIData)
                // )

                //Chai Assertions
                chaiExpect(result.data.data.created_at).to.equal("2022-05-13T11:11:08.000Z")
                chaiExpect(result.data.data.author_id).to.have.lengthOf(19)
                chaiExpect(result.data.data.text).to.be.a("string")
    })
    
})