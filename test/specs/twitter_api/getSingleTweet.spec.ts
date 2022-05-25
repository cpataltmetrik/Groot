import {
    apiEnvironmentVariables, twitterAPIData, fs, chaiExpect, apiGetMethodCall
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Fetch single tweet from twitter", async () => {
    it("Should get single tweet details", async () => {

        const queryParameters: any = {
            params: {
                "tweet.fields": "author_id,public_metrics,created_at,in_reply_to_user_id,referenced_tweets"
            }
        }

        apiGetMethodCall.apiGetMethod(
            `${apiEnvironmentVariables.baseUrl}/tweets/${twitterAPIData.tweet_id}`,
            queryParameters.params
        )
            .then(result => {
                console.log(result.data)

                twitterAPIData.user_id = result.data.data.author_id
                twitterAPIData.tweet_id = result.data.data.id
                twitterAPIData.userTweetPublicMetrics = result.data.data.public_metrics
                fs.writeFileSync(
                    "D:/WebDriverIO_Mocha_Chai_Practice_Projects/Developed_Framework_Github_Project/api_testing/test/testData/twitterApi.data.json",
                    JSON.stringify(twitterAPIData)
                )

                //Chai Assertions
                chaiExpect(result.data.data.created_at).to.equal("2022-05-11T19:42:13.000Z")
                chaiExpect(result.data.data.author_id).to.have.lengthOf(19)
                chaiExpect(result.data.data.text).to.be.a("string")
            })
            .catch(error => console.log(error))
    })
})