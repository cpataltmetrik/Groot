import Page from "./page";

import * as config from "config";
import { isAssertClause, OperationCanceledException } from "typescript";

export default class Footer extends Page {

  public get helpButton() {
    return <any>$("//a[.='Amazon Assistant Download']/following::a[.='Help']");
  }

  public get searchText() {
    return <any>$("//input[@type='search']");
  }

  public get searchButton() {
    return <any>$("//i[@class='a-icon a-icon-search']");
  }

  public get amazonPayKYC() {
    return <any>$("(//a[@class='a-link-normal'])[1]");
  }

  public async navigateToFooter() {
    await this.helpButton.scrolltoView();
    await this.helpButton.clickWhenDisplayed();
  }

  public async amazonPayLinksValidation(text: any) {
    await await this.searchText.setValue(text);
    await this.searchText.keys("Enter");
    }
    
  public open() {
    return super.open("");
  }
}
