import Page from "./page";

import * as config from "config"
const baseURL = config.get('Environment.baseUrl');

export default class Footer extends Page{
   public async path(link:any)
    {
        return browser.url(link)
    }

    public get helpbtn()
    {
        return <any>$("//a[.='Amazon Assistant Download']/following::a[.='Help']");
    }
    public get searchtxt()
    {
        return <any>$("//input[@type='search']");
    }
    public get searchbtn()
    {
        return <any>$("//i[@class='a-icon a-icon-search']");
    }
    public get kyc()
    {
        return <any>$("(//a[@class='a-link-normal'])[1]");
    }
     public async navigate_footer()
     {
        
        await this.path(baseURL)
        await this.helpbtn.scrolltoView()
        await this.helpbtn.clickWhenDisplayed()
        
        
     }
     public async amazonpay_validation(text)
     {
        await await this.searchtxt.setValue(text)
        await this.searchtxt.keys('Enter')
        let KYC=await this.kyc.isDisplayed();
        console.log(KYC);
        
        
    
        
     }
    }