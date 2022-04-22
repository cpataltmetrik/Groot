import Footer from "../../src/main/pageobjects/amz.footer.page";
import * as config from "config";
import { addLogger } from '../../src/main/utilities/logger'
const baseURL = config.get("Environment.baseUrl");
const footer: any = new Footer();

describe("Navigate to Footer Section", async () => {
  it("Navigating to footer and click on Help", async () => {
    await footer.open();
    await footer.navigateToFooter();
  });

  it("Search for Amazon pay and validate the links present below", async () => {
    await footer.amazonPayLinksValidation("Amazon Pay")
  });
});
