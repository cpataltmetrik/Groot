import {
    axios, chaiExpect, fs, axiosApiEnvironmentVariables
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Generate token by logging in", async () => {
    it("Should generate token by logging in", async () => {

        const response: any = await axios.post(
            `${axiosApiEnvironmentVariables.baseUrl}/customer/api/v1/login`,
            {
                "username": "salman",
                "password": "salman1234"
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(result => {
                console.log(result.data)

                axiosApiEnvironmentVariables.apiToken = result.data.token
                fs.writeFileSync(
                    "D:/WebDriverIO_Mocha_Chai_Practice_Projects/Developed_Framework_Github_Project/api_testing/config/axiosApiEnv.json",
                    JSON.stringify(axiosApiEnvironmentVariables)
                )

                //Chai assertions
                chaiExpect(result.data.token).to.be.a("string")
            })
            .catch(error => { console.log(error) })

    })
})