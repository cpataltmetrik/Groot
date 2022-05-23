import AppleProduct from '../../src/main/pageobjects/applePdf.page';
import appleData from '../testData/apple.data';

const applePage: any = new AppleProduct();
const apple: string = appleData.searchDataSet.product;
describe("Convert a amazon search page to pdf", async () => {
  it("should search a product that redirects to a page then saves the file as PDF", async () => {
    await applePage.open("");
    await applePage.enterProduct(apple);
    await applePage.enterAmzSearch();
    await applePage.scrollPage();
    await browser.savePDF('./saved-pdf/screenshot1.pdf');
  });

 });
