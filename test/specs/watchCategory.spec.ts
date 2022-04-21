import Category from "../../src/main/pageobjects/selectCategory.page"
const category: any = new Category()
import categoryData from "../testData/category.data"

/* Data */
const input4: string = categoryData.watchCategoryDataSet.input4
const input5: string = categoryData.watchCategoryDataSet.input5
const input6: string = categoryData.watchCategoryDataSet.input6
const input7: string = categoryData.watchCategoryDataSet.input7
/* Data */

describe("Select Category", async () => 
{
    it("Should go through categories and choose watch category", async () => 
    {
        //Select Product Category
        await category.getCategoryOperation(
            input4, input5, input6, input7
        )
    })
})