import Page from './page';

export default class ServicePage extends Page {
  public async open(path: string): Promise<string> {
    return super.open(path);
  }
  public get customerButton() {
    return <any>$("//a[@data-csa-c-slot-id='nav_cs_3']");
  }
  public get browseHelp() {
    return <any>$("//div[@class='a-span12 a-column a-spacing-top-small']");
  }
  public get categoryContainer() {
    return <any>$$("//li[@class='csg-category']");
  }
  public get titleContainer() {
    return <any>$$("//div[@class='cat-links-container']/div/ul/li[1]/h3");
  }

  public async clickCustomerBtn() {
    await this.customerButton.clickWhenReady();
  }
  public async scrollToHelp() {
    await this.browseHelp.scrolltoView();
  }
}
