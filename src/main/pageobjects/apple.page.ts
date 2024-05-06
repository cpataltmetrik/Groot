import { addLogger } from "../utilities/logger";
import Page from "./page";
export default class Apple extends Page {
  public async open(path: string): Promise<any> {
    return super.open(path);
  }
 public get navigateToMobilePage() {
    return <any> $("//a[contains(text(),'Mobiles')]");
  }
  public async fieldClick(input: any): Promise<any> {
    await input.clickWhenDisplayed();
  }
  public get selectIphone() {
    return <any> $("//span[text()='Apple']");
  }
  public async view(input: any): Promise<any> {
    await input.scrolltoView()
  }
  public get dropDown() {
    return <any> $(".a-dropdown-prompt");
  }
  public get sortOrder() {
    return <any> $("//a[text()='Price: Low to High'][1]");
  }
  public get costOfProducts() {
    return <any> $$("//span[@class='a-price-whole']");
  }
  }