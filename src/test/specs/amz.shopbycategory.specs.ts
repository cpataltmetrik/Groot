import shopByCategory from "../../main/pageobjects/amz.shopbycategory.page";
import * as config from "config";
import { addLogger } from "../../../utilities/logger";

const shopBy: any = new shopByCategory();
describe("ShopBy category", async () => {
  it("select mobiles in shopby category ", async () => {
    await shopBy.open();
    await shopBy.ClickOnMobiles_UnderShopByCategory();
  });
  it("validate the products based on Brands", async () => {
    await shopBy.selectBrand(shopBy.boat_brand, shopBy.boat_Product1);
    await shopBy.selectBrand(shopBy.oneplus_brand, shopBy.oneplus_product1);
  });
});
