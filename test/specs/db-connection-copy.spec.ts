import DBConnection from "../../src/main/helper/db-connection-helper";
const ASSERT_CHAI = require("chai").assert;
const QUERIES = require("../testData/sql-queries.json");
let results = [];

describe("connecting to MySql db", () => {
  it("should verify the new connection to db", async () => {
    results = await DBConnection.executeQueryOnMySql(QUERIES.getUserQuery);
    results.forEach(function async(value) {
      let result = JSON.parse(JSON.stringify(value));
      console.log("result name: " + result.name);
      ASSERT_CHAI(result.name,QUERIES.getUserIdExpected);
    });
  });
});