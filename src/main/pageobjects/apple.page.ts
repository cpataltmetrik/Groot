export default class Apple {
  public async open(path: string): Promise<any> {
    await browser.url(path);
  }

  public get maxWin() {
    return browser.maximizeWindow();
  }

  public get navigateToMobilePage() {
    return $("//a[contains(text(),'Mobiles')]");
  }

  public async fieldClick(input: any): Promise<any> {
    await input.click();
  }

  public get selectIphone() {
    return $("//span[text()='Apple']");
  }

  public async view(input: any): Promise<any> {
    await input.scrollIntoView();
  }

  public get dropDown() {
    return $(".a-dropdown-prompt");
  }
  // To sort price from low to High
  public get sortOrder() {
    return $("//a[text()='Price: Low to High'][1]");
  }

  public get costOfProducts() {
    return $$("//span[@class='a-price-whole']");
  }

  public async minvalue(): Promise<any> {
    let price: number[] = new Array();
    let val: any;
    for (let i: number = 0; i < (await this.costOfProducts.length); i++) {
      val = await this.costOfProducts[i].getText();
      console.log(await val);
      val = val.replace(",", "");
      price.push(val);
    }
    //console.log(await price.length);
    console.log("Product with lowest price is :- ");
    console.log(Math.min(...price));
  }
}
