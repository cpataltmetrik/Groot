import ShopByCategory from "../../src/main/pageobjects/shopByCategory.page";
import { assert } from "chai";
const shopBy: ShopByCategory = new ShopByCategory();

describe("Select mobiles under ShopBy category", async () => {
    it("select mobiles in shopBy category ", async () => {
        await shopBy.open();
        await shopBy.selectMobilesUnderShopByCategory();
    });

    it("validate the products based on Brands", async () => {
        await shopBy.selectBrandName(shopBy.boatBrand, shopBy.boatProduct1);
        assert.exists(await shopBy.productName);
        await shopBy.selectBrandName(
            shopBy.oneplusBrand,
            shopBy.oneplusProduct1,
        );
        assert.exists(await shopBy.productName);
    });
});