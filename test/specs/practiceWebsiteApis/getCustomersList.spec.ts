import {
    axios, chaiExpect, axiosApiEnvironmentVariables
} from "../../../src/main/pageObjects/commonImportStatements.page"

describe("Fetch customers list", async () => {
    it("Should get customers list", async () => {

        const response: any = await axios.get(
            `${axiosApiEnvironmentVariables.baseUrl}/customer/api/v1/list`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${axiosApiEnvironmentVariables.apiToken}`
                }
            }
        )
            .then(result => {
                console.log(result.data)

                console.log(`Number of customers are :- ${result.data.Count}`)

                result.data.Customers.map((customer: any) => {
                    console.log(customer)

                    //Chai Assertions
                    chaiExpect(customer).to.be.a("object")
                })
            })
            .catch(error => { console.log(error) })

    })
})