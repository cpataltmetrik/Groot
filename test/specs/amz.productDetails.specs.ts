import ProductDetailsPage from "../../src/main/pageObjects/amz.productDetails.page";
import SearchPage from "../../src/main/pageObjects/amz.search.page";
import SEARCH_DATA from "../testData/searchData";
import * as config from "config";
import { addLogger } from "../../src/main/utilities/logger";
const baseURL = config.get("Environment.baseUrl");

let pdtsearchString: string = config.get("ProductData.searchProduct");
let pdtexpectedString: string = config.get("ProductData.expectedString");

// let searchString : string = SEARCH_DATA.dataset1.searchString
// let expectedString : string = SEARCH_DATA.dataset1.expectedString

describe("Search a product from Amazon @Sanity", () => {
  it("Should search a product and store the value", async () => {
    await SearchPage.open();
    console.log(pdtsearchString);
    await SearchPage.searchProduct(pdtsearchString);

    let getAllTvResults = await SearchPage.searchResults;
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
