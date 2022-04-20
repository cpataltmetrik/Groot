import Page from "./page";
import * as config from "config";
const assertchai = require("chai").assert;
const baseURL = config.get("Environment.baseUrl");

export default class shopByCategory extends Page {
  
  public get shopby() {
    return <any>$("//h2[text()='Shop by Category']");
  }
  public get mobiles() {
    return <any>$("//img[@alt='Mobiles']");
  }
  public get brand() {
    return <any>$("//span[.='Brands']");
  }
  public get boat_brand() {
    return <any>$("//span[.='boAt']");
  }
  public get oneplus_brand() {
    return <any>$("//span[.='OnePlus']");
  }
  public get boat_Product1() {
    return <any>$("(//span[contains(.,'boAt Bassheads')])[2]");
  }
  public get oneplus_product1() {
    return <any>$("(//span[contains(.,'OnePlus Nord CE ')])[1]");
  }
  public get brands_list() {
    return <any>(
      $$(
        "//ul[@class='a-unordered-list a-nostyle a-vertical a-spacing-medium']"
      )
    );
  }

  public async ClickOnMobiles_UnderShopByCategory() {
    await this.mobiles.clickWhenDisplayed();
  }

  public async selectBrand(brandsName, productName) {
    await brandsName.clickWhenDisplayed();
    assertchai.exists(await productName);
  }
  public open() {
    return super.open("");
  }
}
