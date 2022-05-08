import Footer from "../../src/main/pageobjects/navigateToFooter.page";
const footer: Footer = new Footer();
import { assert } from "chai";

describe("Navigate to Footer Section", async () => {
    it("Navigating to footer and click on Help", async () => {
        await footer.open();
        await footer.navigateToFooter();
    });

    it("Search for Amazon pay and validate the links present below", async () => {
        await footer.amazonPayLinksValidation("Amazon Pay");
        assert.exists(await footer.amazonPayKYC);
    });
});
