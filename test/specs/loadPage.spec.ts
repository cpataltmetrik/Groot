import Category from "../../src/main/pageobjects/selectCategory.page"
const category: any = new Category()
import categoryData from "../testData/category.data"

/* Data */
const input1: string = categoryData.loadPageDataSet.input1
const input2: string = categoryData.loadPageDataSet.input2
const path: string = categoryData.loadPageDataSet.path
const inputType: string = categoryData.loadPageDataSet.inputType
const input3: string = categoryData.loadPageDataSet.input3
/* Data */

describe("Loading Page", async () => 
{
    it("Should load page and perform assertions", async () => 
    {
        //Open Page And Perform Assertions
        await category.loadPage(
            input1, input2, path, inputType, input3
        )
    })
})