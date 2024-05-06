import {
    apiEnvironmentVariables, twitterAPIData, chaiExpect, axios, apiGetMethodCall
} from "../../../src/main/pageObjects/commonImportStatements.page"

describe("Get retweet details of tweet", async () => {
    it("Should fetch retweet information of tweet", async () => {

        const queryParameters = {
            params: null
        }

        apiGetMethodCall.apiGetMethod(
            `${apiEnvironmentVariables.baseUrl}/tweets/${twitterAPIData.tweet_id}/retweeted_by`,
            queryParameters.params
        )
            .then(result => {
                console.log(result.data)

                result.data.data.map((personDetails: any) => {
                    console.log(personDetails)

                    //Chai Assertions
                    for (const personDetailsAttributes in personDetails) {
                        if (personDetails.hasOwnProperty(personDetailsAttributes)) {
                            chaiExpect(personDetails[personDetailsAttributes]).to.be.a("string")
                        }
                    }
                })
            })
            .catch(error => { console.log(error) })
    })
})