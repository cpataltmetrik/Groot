import Category from "../../src/main/pageobjects/productCategory.page"
const category: any = new Category()
import categoryData from "../testData/category.data"
const chaiExpect: any = require("chai").expect

/* Data */
const urlText: string = categoryData.loadPageDataSet.urlText
const titleText: string = categoryData.loadPageDataSet.titleText
const path: string = categoryData.loadPageDataSet.path
const inputType: string = categoryData.loadPageDataSet.inputType
const pageTitle: string = categoryData.loadPageDataSet.pageTitle
/* Data */

describe("Loading Page", async () => {
    it("Should load page and perform assertions", async () => {
        //Load Page And Perform Basic Assertions
        await category.open("")
        await category.screenMaximize
        await category.getUrlAndTitle()

        //WebDriverIO Assertions
        await expect(browser).toHaveUrlContaining(urlText)
        expect(await browser).toHaveTitleContaining(titleText)

        //Chai Assertions
        const chaiAssertions: any = async (
            inputSelector: any,
            input: string,
            inputType: string
        ): Promise<any> => {
            chaiExpect(await inputSelector).to.equal(input)
            chaiExpect(await inputSelector).to.be.a(inputType)
            chaiExpect(await inputSelector).to.have.lengthOf(input.length)
        }

        await chaiAssertions(browser.getUrl(), path, inputType)
        await chaiAssertions(browser.getTitle(), pageTitle, inputType)
    })
})