import Page from "./page";

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

}
