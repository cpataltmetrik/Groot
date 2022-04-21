const chaiExpect: any = require("chai").expect
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
        console.log(await browser.getUrl())
        console.log(await browser.getTitle())
    }

    //WebDriverIO Assertions
    public async wdioAssertions(input1: string, input2: string): Promise<any>
    {
        await expect(browser).toHaveUrlContaining(input1)
        expect(await browser).toHaveTitleContaining(input2)
    }

    //Chai Assertions
    public async chaiURLAssertions(input: string, inputType: string): Promise<any>
    {
        chaiExpect(await browser.getUrl()).to.equal(input)
        chaiExpect(await browser.getUrl()).to.be.a(inputType)
        chaiExpect(await browser.getUrl()).to.have.lengthOf(input.length)
    }

    public async chaiTitleAssertions(input: string, inputType: string): Promise<any>
    {
        chaiExpect(await browser.getTitle()).to.equal(input)
        chaiExpect(await browser.getTitle()).to.be.a(inputType)
        chaiExpect(await browser.getTitle()).to.have.lengthOf(input.length)
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

    public async selectCategory(input1: string, attr: string, input2: string): Promise<any>
    {
        //await this.dropdown.clickWhenDisplayed()
        await this.dropdown.clickWhenReady()
        await this.dropdown.clickAndhighlight()

        await this.dropdown.selectOption(await this.optionsArray.length-9)
        await this.dropdown.selectByText(input1)
        await this.dropdown.selectOption(attr, input2)
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

    public async searchOperation(inputStr: string): Promise<any>
    {
        await (await this.searchBox).setText(inputStr)

        await (await this.searchBtn).clickWhenDisplayed()
        //await (await this.searchBtn).clickWhenReady()
    }

    //Load Page And Perform Basic Assertions
    public async loadPage(
        input1: string,
        input2: string,
        path: string,
        inputType: string,
        input3: string
    ): Promise<any>
    {
        await this.open("")
        await this.maxWin
        await this.getUrlAndTitle()
        await this.wdioAssertions(input1, input2)
        await this.chaiURLAssertions(path, inputType)
        await this.chaiTitleAssertions(input3, inputType)
    }

    //Perform Selecting Particular Category
    public async getCategoryOperation(
        input4: string,
        input5: string,
        input6: string,
        input7: string
    ): Promise<any>
    {
        await this.selectCategory(input4, input5, input6)
        await this.searchOperation(input7)
    }
}

/*
module.exports = new SelectCategory()
export default new SelectCategory()
*/