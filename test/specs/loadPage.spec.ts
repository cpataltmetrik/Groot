import Category from "../../src/main/pageobjects/productCategory.page";
const category: any = new Category();
import categoryData from "../testData/category.data";
const chaiExpect: any = require("chai").expect;

/* Data */
const input1: string = categoryData.loadPageDataSet.input1;
const input2: string = categoryData.loadPageDataSet.input2;
const path: string = categoryData.loadPageDataSet.path;
const inputType: string = categoryData.loadPageDataSet.inputType;
const input3: string = categoryData.loadPageDataSet.input3;
/* Data */

describe("Loading Page", async () => {
    it("Should load page and perform assertions", async () => {
        //Load Page And Perform Basic Assertions
        await category.open("");
        await category.maxWin;
        await category.getUrlAndTitle();

        //WebDriverIO Assertions
        await expect(browser).toHaveUrlContaining(input1);
        expect(await browser).toHaveTitleContaining(input2);

        //Chai Assertions
        const chaiAssertions: any = async (
            inputSelector: any,
            input: string,
            inputType: string,
        ): Promise<any> => {
            chaiExpect(await inputSelector).to.equal(input);
            chaiExpect(await inputSelector).to.be.a(inputType);
            chaiExpect(await inputSelector).to.have.lengthOf(input.length);
        };

        await chaiAssertions(browser.getUrl(), path, inputType);
        await chaiAssertions(browser.getTitle(), input3, inputType);
    });
});
