import Login from "../../src/main/pageobjects/login.page"
import loginData from "../testData/loginData"
import { addLogger } from "../../src/main/utilities/logger";

/*data from login data*/
const input1: string=loginData.userPassSet.input1
const input2: string=loginData.userPassSet.input2

const login: any = new Login()
describe("login amazon account",()=>
{
    it("should login with given credentials",async ()=>
    {
        await login.open("")
        await login.signIn.clickWhenDisplayed()      //sign-in button
        await login.eMail.setText(input1)            //email textarea
        await login.contBtn.clickWhenReady()       //continue button
        await login.passWord.setText(input2)      //password textarea
        await login.lastBtn.clickWhenEnabled()       //finalizing sign-in button
    })

    it("should verify login is successful or not",async ()=>
    {
        if(await login.successLog != "Hello, Sign in"){
            await login.successLog.highlightElement()
            addLogger(`==login was successful==`)
        }else{
            addLogger(`==login was not successful==`)
        }
    })

})