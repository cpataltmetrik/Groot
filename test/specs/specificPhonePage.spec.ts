import Apple from "../../src/main/pageobjects/apple.page";
const phonepage: any = new Apple();
describe("Should select specific phone from options and print the minimum price from the list ", async () => {
  it("Should get list of all apple products on page and print minimum price", async () => {
    await phonepage.open("");
    await phonepage.fieldClick(await phonepage.navigateToMobilePage);
    await phonepage.view(await phonepage.selectIphone);
    await phonepage.fieldClick(await phonepage.selectIphone);
    await phonepage.fieldClick(await phonepage.dropDown);
    await phonepage.fieldClick(await phonepage.sortOrder);
    await phonepage.minvalue();
  });
});
