import {
    apiEnvironmentVariables, twitterAPIData, fs, chaiExpect, apiGetMethodCall
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Get multiple tweets from twitter", async () => {
    it("Should fetch multiple tweets at same time from twitter", async () => {

        const queryParameters: any = {
            params: {
                "ids": `${twitterAPIData.multiple_tweet_ids}`,
                "tweet.fields": "author_id,created_at,in_reply_to_user_id,referenced_tweets"
            }
        }

        apiGetMethodCall.apiGetMethod(
            `${apiEnvironmentVariables.baseUrl}/tweets`,
            queryParameters.params
        )
            .then(result => {
                console.log(result.data)

                result.data.data.map((tweetDetails: any) => {
                    twitterAPIData.user_id = tweetDetails.author_id,
                        twitterAPIData.tweet_id = tweetDetails.id
                    fs.writeFileSync(
                        "D:/WebDriverIO_Mocha_Chai_Practice_Projects/Developed_Framework_Github_Project/api_testing/test/testData/twitterApi.data.json",
                        JSON.stringify(twitterAPIData)
                    )

                    //Chai Assertions
                    chaiExpect(tweetDetails.text).to.be.a("string")
                })

            })
            .catch(error => { console.log(error) })
    })
})