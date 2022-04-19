import Category from "../../main/pageobjects/selectCategory.page"
const category: any = new Category()
import categoryData from "../testData/categoryData"

/* Data */
const link: string = categoryData.loadPageDataSet.link
const input1: string = categoryData.loadPageDataSet.input1
const input2: string = categoryData.loadPageDataSet.input2
const inputType: string = categoryData.loadPageDataSet.inputType
const input3: string = categoryData.loadPageDataSet.input3
/* Data */

describe("Select Category", async () => 
{
    it("Should go through categories and choose any one among them", async () => 
    {
        //Open Page And Perform Assertions
        await category.loadPage(
            link, input1, input2, inputType, input3
        )
    })
})