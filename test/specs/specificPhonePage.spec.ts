import Apple from "../../src/main/pageobjects/apple.page";
const basic: any = new Apple();
describe("SpecificPhonePage", async () => 
{
  it("To get Apple Products", async () => 
  {
    await basic.open("http://www.amazon.in");

    await basic.fieldClick(await basic.navigateToMobilePage);

    await basic.view(await basic.selectIphone);

    await basic.fieldClick(await basic.selectIphone);

    await basic.fieldClick(await basic.dropDown);

    await basic.fieldClick(await basic.sortOrder);

    await basic.minvalue();
  }
  );
}
)
;
