import Category from "../../src/main/pageobjects/productCategory.page"
const category: any = new Category()
import categoryData from "../testData/category.data"

const shoesProductCategory: string = categoryData.categoryDataSet.productCategory
const shoesCategoryAttribute: string = categoryData.categoryDataSet.categoryAttribute
const shoesCategoryValue: string = categoryData.categoryDataSet.categoryValue
const shoesProductName: string = categoryData.categoryDataSet.productName
const watchesProductCategory: string = categoryData.watchCategoryDataSet.productCategory
const watchesCategoryAttribute: string = categoryData.watchCategoryDataSet.categoryAttribute
const watchesCategoryValue: string = categoryData.watchCategoryDataSet.categoryValue
const watchesProductName: string = categoryData.watchCategoryDataSet.productName
let requiredLength: number

describe("Select Category", async () => {
    const selectCategory: any = async (
        categoryText: string, categoryAttribute: string, categoryValue: string
    ): Promise<any> => {
        await category.dropdown.clickWhenDisplayed()
        await category.dropdown.clickWhenReady()
        await category.dropdown.clickAndhighlight()
        requiredLength = 9
        await category.dropdown.selectOptionByIndex(await category.optionsArray.length - requiredLength)
        await category.dropdown.selectByText(categoryText)
        await category.dropdown.selectOptionByValue(categoryAttribute, categoryValue)
    }

    const searchOperation: any = async (
        searchText: string
    ): Promise<any> => {
        await (await category.searchBox).setText(searchText)

        await (await category.searchBtn).clickWhenDisplayed()
        await (await category.searchBtn).clickWhenReady()
    }

    it("Should go through categories and choose any one among them", async () => {
        await selectCategory(shoesProductCategory, shoesCategoryAttribute, shoesCategoryValue)
        await searchOperation(shoesProductName)
    })

    it("Should go through categories and choose watch category", async () => {
        await selectCategory(watchesProductCategory, watchesCategoryAttribute, watchesCategoryValue)
        await searchOperation(watchesProductName)
    })
})