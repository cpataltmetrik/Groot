import {
    axios, chaiExpect, axiosApiEnvironmentVariables, practiceWebsiteApisData, fs
} from "../../../src/main/pageObjects/commonImportStatements.page"

describe("Update customer details", async () => {

    before("Should generate data to update fields of existing customer", async () => {

        const response: any = await axios.get(
            `${axiosApiEnvironmentVariables.generateDataUrl}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(result => {
                console.log(result.data)

                //Chai Assertions
                chaiExpect(result.data.name).to.be.a("string")
                chaiExpect(result.data.username).to.be.a("string")
                chaiExpect(result.data.password).to.be.a("string")

                practiceWebsiteApisData.customerAddress = result.data.address
                practiceWebsiteApisData.customerPhoneNumber = result.data.phone_h

                fs.writeFileSync(
                    "D:/WebDriverIO_Mocha_Chai_Practice_Projects/Developed_Framework_Github_Project/api_testing/test/testData/practiceWebsiteApis.data.json",
                    JSON.stringify(practiceWebsiteApisData)
                )
            })
            .catch(error => { console.log(error) })
    })

    it("Should update customer information", async () => {

        const response: any = await axios.put(
            `${axiosApiEnvironmentVariables.baseUrl}/customer/api/v1/update/${practiceWebsiteApisData.customerId}`,
            {
                "id": practiceWebsiteApisData.customerId,
                "name": practiceWebsiteApisData.customerName,
                "email": practiceWebsiteApisData.customerEmailId,
                "address": practiceWebsiteApisData.customerAddress,
                "phone_number": practiceWebsiteApisData.customerPhoneNumber
            },
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
                chaiExpect(result.data.message).to.equal("Success")
                chaiExpect(result.data.Customers).to.be.a("object")
                chaiExpect(result.data.Customers.id).to.be.a("number")
                chaiExpect(result.data.Customers.name).to.be.a("string")
                chaiExpect(result.data.Customers.email).to.be.a("string")
                chaiExpect(result.data.Customers.address).to.be.a("string")
                chaiExpect(result.data.Customers.phone_number).to.be.a("string")
            })
            .catch(error => { console.log(error) })
    })
})