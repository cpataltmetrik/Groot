import { ChainablePromiseElement } from "webdriverio";
import Page from "./page";
import * as config from "config";

let pdtsearchString: string = config.get("ProductData.searchProduct");
let pdtexpectedString: string = config.get("ProductData.expectedString");

class productDetailsPage extends Page {
  public get productToSearch() {
    return <any>(
      $('(//*[contains(text(), "' + pdtexpectedString + '")])//parent::a/..')
    );
  }

  public get searchField() {
    return <any>$("#twotabsearchtextbox");
  }
  public get btnSearch() {
    return <any>$("#nav-search-submit-button");
  }

  public get searchResults() {
    return <any>(
      $$('//div/h2/a/span[contains(text(),"' + pdtexpectedString + '")]')
    );
  }

  public get emiOptions() {
    return <any>$('//*[contains(text(),"EMI options")]');
  }

  public get productImage() {
    return <any>(
      $(
        '//img[contains(@alt,"' +
          pdtexpectedString +
          '") and contains(@onload,"markFeatureRenderForImageBlock()")]'
      )
    );
  }

  public get fullScreenImage() {
    return <any>$('//img[@class="fullscreen"]');
  }

  public get ZoomImageTitle() {
    return <any>$('//div[@id="ivTitle"]');
  }

  public async searchAProduct(searchProduct) {
    await this.searchField.setValue(searchProduct);
    await this.btnSearch.clickWhenDisplayed();
  }

  public async selectProductFromResults() {
    await this.productToSearch.waitTillInterval(3000);
    await (await this.productToSearch).click();
  }

  public async navigateToNewTab() {
    await browser.getWindowHandles().then(function (handles) {
      var newTabHandle = handles[1];
      browser.switchToWindow(newTabHandle);
      console.log("Switched to New Window");
    });
  }

  public async validateSelectedItem() {
    if ((await this.productToSearch).isDisplayed()) {
      await this.productToSearch.highlightElement();
      console.log("**Validated the Product that is opened in new tab**");
    }
  }

  public async waitTill() {
    await this.productToSearch.waitTill();
  }

  public async waitTillInterval(timeout) {
    await this.emiOptions.waitTillInterval(timeout);
  }

  public async viewEMIOptions() {
    //await this.emiOptions.scrolltoView()
    //await this.emiOptions.highlightElement()
    await this.emiOptions.mouseHover();
  }

  public async elementDoubleClick() {
    await (await this.productImage).isDisplayed();
    await this.productImage.elementDoubleClick();
  }

  public async waitForfullScreenIMmage() {
    await this.fullScreenImage.waitTillInterval(3000);
    await (await this.fullScreenImage).waitForDisplayed();
  }

  public async highlightImageTitle() {
    await this.fullScreenImage.waitTillInterval(3000);
    await this.ZoomImageTitle.highlightElement();
  }

  public open() {
    return super.open("");
  }
}

export default new productDetailsPage();
