import ProductDetailsPage from "../../src/main/pageobjects/amz.productDetails.page";
import SearchPage from "../../src/main/pageobjects/amz.search.page";
import * as config from "config";

const pdtsearchString: string = config.get("ProductData.searchProduct");

// let searchString : string = SEARCH_DATA.dataset1.searchString
// let expectedString : string = SEARCH_DATA.dataset1.expectedString

describe("Search a product from Amazon @Sanity", () => {
    it("Should search a product and store the value", async () => {
        await SearchPage.open();
        console.log(pdtsearchString);
        await SearchPage.searchProduct(pdtsearchString);

        const getAllTvResults = await SearchPage.searchResults;
        await getAllTvResults.forEach((element) => {
            console.log(element.getText());
        });

        // expect(await getAllTvResults[0].getText()).toHaveValue(pdtexpectedString);
    });

    it("Click on the searched product to View", async () => {
        await ProductDetailsPage.productView(pdtsearchString);
        // expect(await getAllTvResults[0].getText()).toHaveValue(pdtexpectedString);
    });

    it("View EMI Options for the searched product", async () => {
        await ProductDetailsPage.viewEMIOptions();
    });

    it("Zoom out the Product to view", async () => {
        await ProductDetailsPage.productZoom();
    });
});
