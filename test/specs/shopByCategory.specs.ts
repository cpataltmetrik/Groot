import ShopByCategory from "../../src/main/pageobjects/shopByCategory.page";
import * as config from "config";
import { addLogger } from "../../src/main/utilities/logger";

const shopBy: any = new ShopByCategory();
describe("Select mobiles under ShopBy category", async () => {
  it("select mobiles in shopby category ", async () => {
    await shopBy.open();
    await shopBy.selectMobilesUnderShopByCategory();
  });

  it("validate the products based on Brands", async () => {
    await shopBy.selectBrandName(shopBy.boatBrand, shopBy.boatProduct1);
    await shopBy.selectBrandName(shopBy.oneplusBrand, shopBy.oneplusProduct1);
  });
});
