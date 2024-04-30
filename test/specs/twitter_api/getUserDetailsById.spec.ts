import {
    apiEnvironmentVariables, twitterAPIData, fs, chaiExpect, apiGetMethodCall
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Fetch user details by using id value", async () => {
    it("Should get user information by following its id value", async () => {

        const queryParameters = {
            params: {
                "user.fields": "public_metrics"
            }
        }

        apiGetMethodCall.apiGetMethod(
            `${apiEnvironmentVariables.baseUrl}/users/${twitterAPIData.user_id}`,
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
                chaiExpect(result.data.data.id).to.equal(twitterAPIData.user_id)
                chaiExpect(result.data.data.id).to.be.a("string")
                chaiExpect(result.data.data.name).to.equal(twitterAPIData.userAccountName)
                chaiExpect(result.data.data.name).to.be.a("string")
                chaiExpect(result.data.data.username).to.equal(twitterAPIData.userAccountUserName)
                chaiExpect(result.data.data.username).to.be.a("string")
                chaiExpect(result.data.data.public_metrics).to.equal(twitterAPIData.userPublicMetrics)
                chaiExpect(result.data.data.public_metrics).to.be.a("object")

            })
            .catch(error => error.data)
    })
})