import {
    axios, chaiExpect, axiosApiEnvironmentVariables, practiceWebsiteApisData
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Delete existing customer", async () => {

    it("Should delete details of existing customer", async () => {

        const response: any = await axios.delete(
            `${axiosApiEnvironmentVariables.baseUrl}/customer/api/v1/delete/${practiceWebsiteApisData.customerId}`,
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
                chaiExpect(result.data.message).to.equal("Customer deleted!")
            })
            .catch(error => { console.log(error) })
    })
})