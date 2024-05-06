import Footer from "../../src/main/pageObjects/navigateToFooter.page";
import * as config from "config";
import { addLogger } from '../../src/main/utilities/logger'
const baseURL = config.get("Environment.baseUrl");
const footer: any = new Footer();
const ASSERT_CHAI = require("chai").assert;

describe("Navigate to Footer Section", async () => {
  it("Navigating to footer and click on Help", async () => {
    await footer.open();
    await footer.navigateToFooter();
  });

  it("Search for Amazon pay and validate the links present below", async () => {
    await footer.amazonPayLinksValidation("Amazon Pay")
    ASSERT_CHAI.exists(await footer.amazonPayKYC);
  });
});
