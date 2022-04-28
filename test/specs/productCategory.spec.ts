import Category from "../../src/main/pageobjects/productCategory.page"
const category: any = new Category()
import categoryData from "../testData/category.data"

/* Data */
const input4: string = categoryData.categoryDataSet.input4
const input5: string = categoryData.categoryDataSet.input5
const input6: string = categoryData.categoryDataSet.input6
const input7: string = categoryData.categoryDataSet.input7
const input8: string = categoryData.watchCategoryDataSet.input8
const input9: string = categoryData.watchCategoryDataSet.input9
const input10: string = categoryData.watchCategoryDataSet.input10
const input11: string = categoryData.watchCategoryDataSet.input11
/* Data */

describe("Select Category", async () => 
{
    const selectCategory: any = async (
        input1: string, attr: string, input2: string
    ): Promise<any> => 
    {
        await category.dropdown.clickWhenDisplayed()
        await category.dropdown.clickWhenReady()
        await category.dropdown.clickAndhighlight()

        await category.dropdown.selectOption(await category.optionsArray.length-9)
        await category.dropdown.selectByText(input1)
        await category.dropdown.selectOption(attr, input2)
    }

    const searchOperation: any = async (
        inputStr: string
    ): Promise<any> => 
    {
        await (await category.searchBox).setText(inputStr)

        await (await category.searchBtn).clickWhenDisplayed()
        await (await category.searchBtn).clickWhenReady()
    }

    it("Should go through categories and choose any one among them", async () => 
    {
        //Perform Selecting Particular Category
        await selectCategory(input4, input5, input6)
        await searchOperation(input7)       
    })

    it("Should go through categories and choose watch category", async () => 
    {
        //Perform Selecting Watch Category
        await selectCategory(input8, input9, input10)
        await searchOperation(input11)       
    })
})