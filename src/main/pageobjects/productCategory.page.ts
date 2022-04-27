import { addLogger } from "../utilities/logger"
import Page from "./page"

export default class SelectCategory extends Page
{
    //Load Page
    public async open(path: string): Promise<any>
    {
        await super.open(path)
    }

    //Maximize Window
    public get maxWin()
    {
        return browser.maximizeWindow()
    }

    //Get Page Url Address And Title
    public async getUrlAndTitle(): Promise<any>
    {
        addLogger(await browser.getUrl())
        addLogger(await browser.getTitle())
    }

    //Select Category
    public get dropdown()
    {
        return <any>$("#searchDropdownBox")
    }

    public get optionsArray()
    {
        return <any>$$("//select[@id='searchDropdownBox']/option")
    }

    //Search Box
    public get searchBox()
    {
        return <any>$("#twotabsearchtextbox")
    }

    public get searchBtn()
    {
        return <any>$("//*[@type='submit']")
    }
}

/*
module.exports = new SelectCategory()
export default new SelectCategory()
*/