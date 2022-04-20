import Page from "./page";
const assertchai = require("chai").assert;
import * as config from "config";
import { isAssertClause, OperationCanceledException } from "typescript";

export default class Footer extends Page {
  public get helpbtn() {
    return <any>$("//a[.='Amazon Assistant Download']/following::a[.='Help']");
  }
  public get searchtxt() {
    return <any>$("//input[@type='search']");
  }
  public get searchbtn() {
    return <any>$("//i[@class='a-icon a-icon-search']");
  }
  public get kyc() {
    return <any>$("(//a[@class='a-link-normal'])[1]");
  }
  public async NavigateToFooter() {
    await this.helpbtn.scrolltoView();
    await this.helpbtn.clickWhenDisplayed();
  }
  public async AmazonpayLinks_validation(text: any) {
    await await this.searchtxt.setValue(text);
    await this.searchtxt.keys("Enter");
    assertchai.exists(await this.kyc);
  }
  public open() {
    return super.open("");
  }
}
