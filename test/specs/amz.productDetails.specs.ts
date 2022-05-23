import productDetailsPage from "../../src/main/pageobjects/amz.productDetails.page";
import SearchPage from "../../src/main/pageobjects/amz.search.page";
import SEARCH_DATA from "../testData/searchData";
import * as config from "config";
import { addLogger } from "../../src/main/utilities/logger";
const baseURL = config.get("Environment.baseUrl");

let pdtsearchString: string = config.get("ProductData.searchProduct");
let pdtexpectedString: string = config.get("ProductData.expectedString");

// let searchString : string = SEARCH_DATA.dataset1.searchString
// let expectedString : string = SEARCH_DATA.dataset1.expectedString

describe("Search a product from Amazon -> @Sanity", () => {
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
    await productDetailsPage.searchAProduct(pdtsearchString);
    await productDetailsPage.selectProductFromResults();
    await productDetailsPage.navigateToNewTab();
    await productDetailsPage.waitTill()
    await productDetailsPage.validateSelectedItem();
    // expect(productDetailsPage.getPostalCodeText()).toHaveValue(firstZip);
    // addLogger(await productDetailsPage.getPostalCodeText() + " Zip updated");

  });

  it("View EMI Options for the searched product", async () => {
    await productDetailsPage.waitTillInterval(3000);
    await productDetailsPage.viewEMIOptions();
    await productDetailsPage.waitTillInterval(3000);
  });

  it("Zoom out the Product to view", async () => {
    await productDetailsPage.waitTillInterval(3000);
    await productDetailsPage.elementDoubleClick();
    await productDetailsPage.waitForfullScreenIMmage();
    await productDetailsPage.highlightImageTitle();
  });
});
