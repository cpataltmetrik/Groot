import {
    axios, chaiExpect, axiosApiEnvironmentVariables
} from "../../../src/main/pageobjects/commonImportStatements.page"

describe("Fetch users", async () => {
    it("Should get users and their details", async () => {

        const response: any = await axios.get(
            `${axiosApiEnvironmentVariables.commonUrl}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(result => {
                console.log(result.data)

                result.data.map((user: any) => {
                    console.log(user)

                    //Chai Assertions
                    chaiExpect(user.id).to.be.a("number")
                    chaiExpect(user.name).to.be.a("string")
                    chaiExpect(user.username).to.be.a("string")
                })
            })
            .catch(error => { console.log(error) })

    })
})