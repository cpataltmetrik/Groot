import Page from "./page";
import * as config from 'config'
const baseURL = config.get('Environment.baseUrl');
import loginData from "../../test/testData/loginData";
import { addLogger } from "../../../utilities/logger";
const input1: string=loginData.userPassSet.input1
const input2: string=loginData.userPassSet.input2
export default class Login extends Page{

    //navigting to enter amazon account credentials

    Path(link: any){
        return browser.url(link)
    }
    public get maxWin(){
        return browser.maximizeWindow()
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

    public async loginProcess(eMail,passWord){
        await this.Path(baseURL)
        await this.maxWin
        await this.signIn.clickWhenDisplayed()      //sign-in button
        await this.eMail.setText(eMail)            //email textarea
        await this.contBtn.clickWhenReady()       //continue button
        await this.passWord.setText(passWord)      //password textarea
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
