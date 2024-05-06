import { addLogger } from "../utilities/logger";
import Page from "./page";

export default class Cart extends Page {
  public async open(path: string): Promise<any> {
    return super.open(path);
  }
  public get selectAllOption() {
    return <any> $(".hm-icon-label");
  }
  public get selectCategory() {
    return <any> $("//div[text()='TV, Appliances, Electronics']");
  }
  public get selectSubCategory() {
    return <any> $("//a[text()='Televisions']");
  }
  public get selectProductType() {
    return <any> $("//span[text()='Smart Televisions']");
  }
  public get selectProductBrand() {
    return <any> $("//span[text()='LG']");
  }
  public get selectFirstProduct() {
    return <any> $("img[alt='LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)']")
  }
  public get dropDownToMoreNumber() {
    return <any> $("//select[@id='quantity']");
  }
  public async clickOnOptions(input: any): Promise<any> {
    await input.clickWhenDisplayed();
  }
  public async waitForPage( input: any): Promise<any>{
    await input.waitForPageLoad();
  }
  public async selectValuefromDropdown(input: any,digit: number): Promise<any> {
    await input.selectByVisibleText(digit);
  }
  public get numberOfProductsOnCart() {
    return <any> $("#sw-subtotal-item-count");
  }
  public async view(input: any): Promise<any> {
    await input.scrolltoView();
  }
  public get totalPriceOfProductsInCart() {
    return <any> $("//div[@id='sw-subtotal']");
  }
   public async handleWindow(input: any) {
    let handles: any = await browser.getWindowHandles()
    await browser.switchToWindow(handles[1]);
  }
  public get addItemsToCart() {
    return <any> $("#add-to-cart-button");
  }
  }