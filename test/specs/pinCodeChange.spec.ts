import SearchPage from "../../src/main/pageobjects/amz.search.page";
import amazonHomePage from "../../src/main/pageobjects/home.page";
import { addLogger } from "../../src/main/utilities/logger";

const firstZip = "500090";
const secondZip = "500072";

describe("update your address", () => {
    it("Should enter a Zip and update it successfully -> @Sanity", async () => {
        await SearchPage.open();
        await amazonHomePage.clickSelectAddress();
        await amazonHomePage.enterPostalcode(firstZip);
        await amazonHomePage.clickApplyButton();

        expect(amazonHomePage.getPostalCodeText()).toHaveValue(firstZip);
        addLogger((await amazonHomePage.getPostalCodeText()) + " Zip updated");

        await amazonHomePage.clickSelectAddress();
        await amazonHomePage.enterPostalcode(secondZip);
        await amazonHomePage.clickApplyButton();

        expect(amazonHomePage.getPostalCodeText()).toHaveValue(secondZip);
        addLogger((await amazonHomePage.getPostalCodeText()) + " Zip found");
    });
});
