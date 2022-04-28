
import Cart from "../../src/main/pageobjects/Cart.page";
const cart: any = new Cart();
describe("It should Select products and add to cart ", async () => {
  it("should print total price with number of items in cart", async () => {
    await cart.open("");
    await cart.clickOnOptions(await cart.selectAllOption);
    await cart.clickOnOptions(await cart.selectCategory);
    await cart.clickOnOptions(await cart.selectSubCategory);
    await cart.clickOnOptions(await cart.selectProductType);
    await cart.clickOnOptions(await cart.selectProductBrand);
    await cart.clickOnOptions(await cart.selectFirstProduct);
    await cart.waitForPageLoad;
    await cart.handleWindow();
    await cart.clickOnOptions(await cart.dropDownToMoreNumber);
    await cart.selectValuefromDropdown(await cart.dropDownToMoreNumber, 2);
    await cart.clickOnOptions(await cart.addItemsToCart);
    await cart.totalPrice();
  });
});
