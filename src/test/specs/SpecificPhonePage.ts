import Apple from "../../main/pageobjects/Apple";
const basic: any = new Apple();
describe("SpecificPhonePage", async () => {
  it("To get Apple Products", async () => {
    await basic.open("http://www.amazon.in");
    await basic.fieldClick(await basic.NavigateToMobilePage);
    await basic.view(await basic.SelectIphone);
    await basic.fieldClick(await basic.SelectIphone);
    await basic.fieldClick(await basic.Dropdown);
    await basic.fieldClick(await basic.sortOrder);
    await basic.minvalue();
  });
});
