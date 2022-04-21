export default class Apple {
  //Load Page
  public async open(path: string): Promise<any> {
    await browser.url(path);
  }

  //Maximize Window
  public get maxWin() {
    return browser.maximizeWindow();
  }
//Navigation to Mobile Page
  public get NavigateToMobilePage() {
    return $("//a[contains(text(),'Mobiles')]");
  }
 
  public async fieldClick(input: any): Promise<any> {
    await input.click();
  }
 
  //To select iphone on mobile page
  public get SelectIphone() {
    return $("//span[text()='Apple']");
  }

  public async view(input: any): Promise<any> {
    await input.scrollIntoView();
  }

  public get Dropdown() {
    return $(".a-dropdown-prompt");
  }
 // To sort price from low to High 
  public get sortOrder() {
    return $("//a[text()='Price: Low to High'][1]");
  }

  // To get cost of all products
  public get CostOfProducts() {
    return $$("//span[@class='a-price-whole']");
  }

  public async minvalue(): Promise<any> {
    let price: number[] = new Array();
    let val: any;
    for (let i: number = 0; i < (await this.CostOfProducts.length); i++) {
      val = await this.CostOfProducts[i].getText();
      val = val.replace(",", "");
      price.push(val);
      console.log(await val);
    }
    console.log(await price.length);
    console.log("Product with lowest price is :- ");
    console.log(Math.min(...price));
  }
}
