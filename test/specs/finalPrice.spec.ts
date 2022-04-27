
import Cart from "../../src/main/pageobjects/Cart.page";
const basic: any = new Cart();
describe("It should Select products and add to cart ", async () => {
  it("should print total price with number of items in cart", async () => {
    await basic.open("");
    await basic.clickOnOptions(await basic.selectAllOption);
    await basic.clickOnOptions(await basic.selectCategory);
    await basic.clickOnOptions(await basic.selectSubCategory);
    await basic.clickOnOptions(await basic.selectProductType);
    await basic.clickOnOptions(await basic.selectProductBrand);
    await basic.clickOnOptions(await basic.selectFirstProduct);
    await basic.waitForPageLoad;
    await basic.handleWindow();
    await basic.clickOnOptions(await basic.dropDownToMoreNumber);
    await basic.selectValuefromDropdown(await basic.dropDownToMoreNumber, 2);
    await basic.clickOnOptions(await basic.addItemsToCart);
    await basic.totalPrice();
  });
});
