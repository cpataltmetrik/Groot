import Page from "./page";
import * as config from "config"
const baseURL = config.get('Environment.baseUrl');


export default class shopByCategory extends Page{
    path(link:any)
    {
        return browser.url(link)
    }
    public get shopby()
    {
        return <any> $("//h2[text()='Shop by Category']")
    }
    public get mobiles()
    {
        return  <any> $("//img[@alt='Mobiles']")
    }
    public get brand()
    {
        return <any>$("//span[.='Brands']")
    }
    public get boat_brand()
    {
        return <any>$("//span[.='boAt']")
    }
    public get oneplus_brand()
    {
        return <any>$("//span[.='OnePlus']")
    }
    public get boat_Product1()
     {
         return <any>$("(//span[contains(.,'boAt Bassheads')])[2]")
     }
     public get oneplus_product1()
     {
         return <any>$("(//span[contains(.,'OnePlus Nord CE ')])[1]")
     }
    public get brands_list()
     {
         return <any>$$("//ul[@class='a-unordered-list a-nostyle a-vertical a-spacing-medium']")
     }
    
    public async shopby_category()
    {
       
       await this.path(baseURL)
       await this.mobiles.clickWhenDisplayed()
       
    }
     
    public async selectBrand(brandsName,productName) 
     {
       await brandsName.clickWhenDisplayed()
      console.log(await productName.isDisplayed())
       
    }

}