import SearchPage from "../../src/main/pageobjects/amz.search.page";
import SEARCH_DATA from "../testData/searchData";
const expect = require("chai").expect;

let searchString: string = SEARCH_DATA.dataset1.searchString;
let expectedString: string = SEARCH_DATA.dataset1.expectedString;

describe("Search a product from Amazon", () => {
  
  it("Should search a product and store the value", async () => {
    await SearchPage.open();

    await SearchPage.searchProduct(searchString);
    let getAllIphone = await SearchPage.searchResults;

    await getAllIphone.forEach((element) => {
      console.log(element.getText());
    });

    expect(await getAllIphone[0].getText()).toHaveValue(expectedString);
  });

  it("Validate Help and Setting section", async () => {
    let expectedHeadings: string[] = [];
    let actualHeadings: string[] = [
      "Your Account",
      "Customer Service",
      "Sign In",
    ];

    await SearchPage.open();

    await SearchPage.clickOnSearchAllButton();
    await SearchPage.scrollToHelpAndSettingsSection();
    let allHeadings = await SearchPage.helpAndSettingAllHeadings;

    for (let i = 0; i < (await allHeadings.length); i++) {
      expectedHeadings.push(await allHeadings[i].getText());
    }

    let isTrue = expectedHeadings.some((item) => actualHeadings.includes(item));
    expect(isTrue).to.be.true;
  });

  it("Validate categories having new releases", async () => {
    let hotReleaseHeadingText: string;
    let listOfHotReleaseItems: any[];
    await SearchPage.open();

    let browserUrl = await browser.getUrl();
    if (browserUrl.includes(".in")) {
      await SearchPage.clickOnSearchAllButton();
      await SearchPage.clickNewReleaseLink();

      hotReleaseHeadingText = await SearchPage.getHotReleaseHeadingText();

      expect(hotReleaseHeadingText).to.be.a("string").that.contains("Releases");

      listOfHotReleaseItems = await SearchPage.getHotReleaseGroupList;

      await listOfHotReleaseItems.forEach((groupName) => {
        console.log(groupName.getText());
      });
    } else {
      console.log("Hot release feature is only available for DEV Environment");
    }
  });
});
