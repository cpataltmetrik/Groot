import {
  apiEnvironmentVariables,
  twitterAPIData,
  fs,
  chaiExpect,
  apiGetMethodCall,
  loadPage,
  addLogger,
  fetchUserDetailsByUsername,
} from "../../../src/main/pageObjects/commonImportStatements.page";
import DBConnection from "../../../src/main/helper/db-connection-helper";
const ASSERT_CHAI = require("chai").assert;
const QUERIES = require("../../testData/sql-queries.json");
let results = [];

describe("Search for username on twitter and verify user details", async () => {
  it("Should search for username on twitter to get user information and save it", async () => {
    await loadPage.loadWebsite(`${apiEnvironmentVariables.websiteUrl}/explore`);
    const urlAndTitle: any = await loadPage.printUrlAndTitle();
    addLogger(`${await urlAndTitle.webPageUrl}`);
    addLogger(`${await urlAndTitle.webPageTitle}`);

    //WDIO Assertions
    await loadPage.wdioAssertions("twitter.com", "Twitter");

    //Chai Assertions
    await loadPage.chaiEqualComparisonAssertion(
      urlAndTitle.webPageUrl,
      `${apiEnvironmentVariables.websiteUrl}/explore`
    );
    await loadPage.chaiEqualComparisonAssertion(
      urlAndTitle.webPageTitle,
      "Twitter"
    );

    await (
      await fetchUserDetailsByUsername.searchBox
    ).setText(twitterAPIData.userAccountUserName);
    await fetchUserDetailsByUsername.pressEnter;
    await (
      await fetchUserDetailsByUsername.redirectToUserAccount
    ).clickWhenDisplayed();

    //Get user information
    /*
        let accountName: any = await (await fetchUserDetailsByUsername.accountName).getText()
        addLogger(`${accountName}`)
        let accountUserName: any = await (await fetchUserDetailsByUsername.accountUserName).getText()
        addLogger(`${accountUserName}`)

        accountUserName = accountUserName.replace("@", "")
        */

    twitterAPIData.userPageUrl = await urlAndTitle.webPageUrl;
    twitterAPIData.userAccountName = await twitterAPIData.userAccountName;
    twitterAPIData.userAccountUserName =
      await twitterAPIData.userAccountUserName;
    fs.writeFileSync(
      "D:/User/bpampari/automation/webdriveriowithtypescript/test/testData/twitterApi.data.json",
      JSON.stringify(twitterAPIData)
    );
  });
  it("should verify the details fetched in UI are matching in API call", async () => {
    //Call get method of HTTP request to fetch user details with the help of username
    //// if (twitterAPIData.userAccountUserName == twitterAPIData.userAccountUserName) {
    const queryParameters = {
      params: {
        "user.fields": "public_metrics",
      },
    };

    apiGetMethodCall
      .apiGetMethod(
        `${apiEnvironmentVariables.baseUrl}/users/by/username/${twitterAPIData.userAccountUserName}`,
        queryParameters.params
      )
      .then((result) => {
        console.log(result.data);

        // twitterAPIData.user_id = result.data.data.id
        // twitterAPIData.userAccountName = result.data.data.name
        // twitterAPIData.userAccountUserName = result.data.data.username
        // twitterAPIData.userPublicMetrics = result.data.data.public_metrics
        // fs.writeFileSync(
        //     "D:/User/bpampari/automation/webdriveriowithtypescript/test/testData/twitterApi.data.json",
        //     JSON.stringify(twitterAPIData)
        // )

        //Chai Assertions
        chaiExpect(result.data.data.id).to.be.a("string");
        chaiExpect(result.data.data.id).to.equal(`${twitterAPIData.user_id}`);
        chaiExpect(result.data.data.name).to.be.a("string");
        chaiExpect(result.data.data.name).to.equal(
          twitterAPIData.userAccountName
        );
        chaiExpect(result.data.data.username).to.be.a("string");
        chaiExpect(result.data.data.username).to.equal(
          twitterAPIData.userAccountUserName
        );
        chaiExpect(result.data.data.public_metrics).to.be.a("object");
        chaiExpect(result.data.data.public_metrics).to.equal(
          twitterAPIData.userPublicMetrics
        );
      })
      .catch((error) => {
        console.log(error);
      });
  });

  it("should fetch user details from DB and verify them", async () => {
    results = await DBConnection.executeQueryOnMySql(QUERIES.getUserQuery);
    results.forEach(function async(value) {
      let result = JSON.parse(JSON.stringify(value));
      addLogger("DB Results : " + result.name);
      ASSERT_CHAI(result.name, QUERIES.getUserIdExpected);
    });
  });
});
