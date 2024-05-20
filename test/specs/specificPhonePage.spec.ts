import Apple from "../../src/main/pageobjects/apple.page";
import { addLogger } from "../../src/main/utilities/logger";
const phonepage: any = new Apple();
describe("Should select specific phone from options and print the minimum price from the list ", async () => {
  it("Should get list of all apple products on page and print minimum price", async () => {
    await phonepage.open("");
    await phonepage.fieldClick(await phonepage.navigateToMobilePage);
    await phonepage.view(await phonepage.selectIphone);
    await phonepage.fieldClick(await phonepage.selectIphone);
    await phonepage.fieldClick(await phonepage.dropDown);
    await phonepage.fieldClick(await phonepage.sortOrder);
    let price: number[] = new Array();
    let val: any;
    for (let i: number = 0; i < (await phonepage.costOfProducts.length); i++) {
      val = await phonepage.costOfProducts[i].getText();
      addLogger(await val);
      val = val.replace(",", "");
      price.push(val);
    }
    addLogger("Product with lowest price is :- ");
    addLogger(`${Math.min(...price)}`)
  });
});