import ServicePage from '../../src/main/pageobjects/customerService.page';
import { addLogger } from '../../src/main/utilities/logger';
const service: any = new ServicePage();

describe("amazon customer service page", async () => {
  it("should click on customer and scroll to help", async () => {
    await service.open("");
    await service.clickCustomerBtn();
    await service.scrollToHelp();
  });
  it("should hover on all titles", async () => {
    let hoverAll: string, getTitles: any, fetchContent: string, optimizeContent: string;
    let sortedTitles = new Array();
    let updatedText: string;

    let getTopics = await service.categoryContainer;

    for (let i = 0; i < getTopics.length; i++) {
      hoverAll = await (await getTopics[i].$("a")).click();
      getTitles = await service.titleContainer;
      fetchContent = await getTitles[i].getHTML(false);
      optimizeContent = await fetchContent.trim();
      sortedTitles.push(optimizeContent);
    }

    for (let j = 0; j < sortedTitles.length; j++) {
      if (sortedTitles[j].includes("&amp; ")) {
        updatedText = sortedTitles[j].replace("&amp; ", "");
        sortedTitles[j] = updatedText;   
      }

      if (sortedTitles[j].includes("\n", "")) {
        updatedText = sortedTitles[j].replace("\n", "");
        sortedTitles[j] = updatedText;
      }
      addLogger(await `${sortedTitles[j]}`);
    }
  });
});
