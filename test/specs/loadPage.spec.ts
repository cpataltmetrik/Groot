import Category from "../../src/main/pageObjects/productCategory.page"
const category: any = new Category()
import categoryData from "../testData/category.data"
const chaiExpect: any = require("chai").expect
import { addLogger } from "../../src/main/utilities/logger"

const urlText: string = categoryData.loadPageDataSet.urlText
const titleText: string = categoryData.loadPageDataSet.titleText
const path: string = categoryData.loadPageDataSet.path
const inputType: string = categoryData.loadPageDataSet.inputType
const pageTitle: string = categoryData.loadPageDataSet.pageTitle

describe("Loading Page", async () => {
    it("Should load page and perform assertions", async () => {
        await category.open("")
        let printUrlAndTitle: any = await category.getUrlAndTitle()
        addLogger(`${await printUrlAndTitle.webPageUrl}`)
        addLogger(`${await printUrlAndTitle.webPageTitle}`)

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