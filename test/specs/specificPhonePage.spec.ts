import Apple from "../../src/main/pageobjects/apple.page";
const basic: any = new Apple();
describe("Should select specific phone from options and print the minimum price from the list ", async () => {
  it("Should get list of all apple products on page and print minimum price", async () => {
    await basic.open("");
    await basic.fieldClick(await basic.navigateToMobilePage);
    await basic.view(await basic.selectIphone);
    await basic.fieldClick(await basic.selectIphone);
    await basic.fieldClick(await basic.dropDown);
    await basic.fieldClick(await basic.sortOrder);
    await basic.minvalue();
  });
});
