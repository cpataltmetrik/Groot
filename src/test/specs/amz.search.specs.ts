import SearchPage from "../../main/pageobjects/amz.search.page";
import SEARCH_DATA from "../testData/searchData";
import * as config from "config";
import { addLogger } from "../../../utilities/logger";
const baseURL = config.get("Environment.baseUrl");

//let searchString : string = config.get('TestData1.searchTerm')
//let expectedString : string = config.get('TestData1.expectedString')

let searchString: string = SEARCH_DATA.dataset1.searchString;
let expectedString: string = SEARCH_DATA.dataset1.expectedString;
describe("Search a product from Amazon", () => {
  it.skip("Should search a product and store the value", async () => {
    await SearchPage.open();

    await SearchPage.searchProduct(searchString);
    let getAllIphone = await SearchPage.searchResults;

    await getAllIphone.forEach((element) => {
      console.log(element.getText());
    });

    expect(await getAllIphone[0].getText()).toHaveValue(expectedString);
  });

  it(" Validate Help and Setting section", async () => {
    await SearchPage.open();

    await SearchPage.clickAllButton();

    await SearchPage.scrollToHelpAndSettingsSection();
    await SearchPage.scrollTOSignInButton();

    let allHeadings = await browser.$$(
      '//ul[@data-menu-id="1"]//li[@class="hmenu-separator"][4]/following-sibling::li/a'
    );
    console.log("length is  " + allHeadings.length);
  });
});
