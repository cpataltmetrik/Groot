import {
    axios, chaiExpect, axiosApiEnvironmentVariables, practiceWebsiteApisData, fs
} from "../../../src/main/pageObjects/commonImportStatements.page"

describe("Sign up new customer", async () => {

    before("Should generate data to register new customer", async () => {

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

                practiceWebsiteApisData.customerId = Math.floor((Math.random() * (9999 - 1001)) + 1);
                practiceWebsiteApisData.customerName = result.data.name
                practiceWebsiteApisData.customerEmailId = `${result.data.email_u}@test.com`
                practiceWebsiteApisData.customerPhoneNumber = result.data.phone_w
                practiceWebsiteApisData.customerBirthDate = result.data.birth_date
                practiceWebsiteApisData.customerAddress = result.data.address
                practiceWebsiteApisData.customerCompany = result.data.company
                practiceWebsiteApisData.customerUsername = result.data.username
                practiceWebsiteApisData.customerPassword = result.data.password

                fs.writeFileSync(
                    "D:/WebDriverIO_Mocha_Chai_Practice_Projects/Developed_Framework_Github_Project/api_testing/test/testData/practiceWebsiteApis.data.json",
                    JSON.stringify(practiceWebsiteApisData)
                )
            })
            .catch(error => { console.log(error) })
    })

    it("Should register new customer", async () => {

        const response: any = await axios.post(
            `${axiosApiEnvironmentVariables.baseUrl}/customer/api/v1/create`,
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