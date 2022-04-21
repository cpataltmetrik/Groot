import Page from "./page";
import * as config from 'config'
const baseURL = config.get('Environment.baseUrl');
import loginData from "../../test/testData/loginData";
import { addLogger } from "../../../utilities/logger";
const input1: string=loginData.userPassSet.input1
const input2: string=loginData.userPassSet.input2
export default class Login extends Page{

    //navigting to enter amazon account credentials

    public open(path: string): Promise<string> {
        return super.open(path) 
    }
    public get signIn(){
        return <any>$("//a[@id='nav-link-accountList']"); 
    }
    public get eMail(){
        return <any>$("//input[@id='ap_email']");
    }
    public get contBtn(){
        return <any>$("//input[@id='continue']");
    }
    public get passWord(){
        return <any>$("//input[@id='ap_password']");
    }
    public get lastBtn(){
        return <any>$("//input[@id='signInSubmit']");
    }

    //checking if the login is success or not

    public get successLog(){
        return <any>$("span#nav-link-accountList-nav-line-1");
    }

    public async loginProcess(){
        await this.open("")
        await this.signIn.clickWhenDisplayed()      //sign-in button
    }
    public async enterEmailId(eMail){
        await this.eMail.setText(eMail)            //email textarea
    }
    public async clickContinue(){
        await this.contBtn.clickWhenReady()       //continue button
    }
    public async enterPassword(passWord){
        await this.passWord.setText(passWord)      //password textarea
    }
    public async finishSignIn(){
        await this.lastBtn.clickWhenEnabled()       //finalizing sign-in button
    }
    public async loginSucces(){
        if(await this.successLog != "Hello, Sign in"){
            await this.successLog.highlightElement()
            console.log(await"==login was successful==")
        }else{
            console.log(await"==login was not successful==")
        }
    }
}
