import {
    axios, chaiExpect, axiosApiEnvironmentVariables, practiceWebsiteApisData
} from "../../../src/main/pageObjects/commonImportStatements.page"

describe("Fetch customer details by using its id", async () => {
    it("Should get customer information by its id", async () => {

        const response: any = await axios.get(
            `${axiosApiEnvironmentVariables.baseUrl}/customer/api/v1/get/${practiceWebsiteApisData.customerIdNumber}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${axiosApiEnvironmentVariables.apiToken}`
                }
            }
        )
            .then(result => {
                console.log(result.data)

                //Chai Assertions
                chaiExpect(result.data.id).to.equal(practiceWebsiteApisData.customerIdNumber)
                chaiExpect(result.data.id).to.be.a("number")
                chaiExpect(result.data.name).to.be.a("string")
                chaiExpect(result.data.email).to.be.a("string")
                chaiExpect(result.data.address).to.be.a("string")
                chaiExpect(result.data.phone_number).to.be.a("string")
            })
            .catch(error => { console.log(error) })

    })
})