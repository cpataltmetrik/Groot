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
    let hoverAll: any, getTitles: any, disableHtml: string, removeTags: string;
    let sortedTitles = new Array();
    let replaceNull: string;

    let getTopics = await service.categoryContainer;

    for (let i = 0; i < getTopics.length; i++) {
      hoverAll = await (await getTopics[i].$("a")).click();
      getTitles = await service.titleContainer;
      disableHtml = await getTitles[i].getHTML(false);
      removeTags = await disableHtml.trim();
      sortedTitles.push(removeTags);
    }

    for (let j = 0; j < sortedTitles.length; j++) {
      if (sortedTitles[j].includes("&amp; ")) {
        replaceNull = sortedTitles[j].replace("&amp; ", "");
        sortedTitles[j] = replaceNull;   
      }

      if (sortedTitles[j].includes("\n", "")) {
        replaceNull = sortedTitles[j].replace("\n", "");
        sortedTitles[j] = replaceNull;
      }
      addLogger(await `${sortedTitles[j]}`);
    }
  });
});
