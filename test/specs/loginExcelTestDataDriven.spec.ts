import dataConverter from '../../src/main/utilities/testDataConverter';
import loginPage from '../../src/main/pageobjects/login.page';
import loginHelper from '../../src/main/helper/loginHelper';
const chaiExpect: any = require("chai").expect;
let loginExcelTestData = dataConverter.exceltoJsonDataConverter('test/testData/loginExcelTestData.xlsx');
loginExcelTestData = loginExcelTestData.Login;

describe("Login Page", async () => {
    loginExcelTestData.forEach((testData) => {
        it(`Should login to amazon page and check login has been done successful or not using excel data | testcase id : ${testData.testCaseId}`, async () => {
            await loginPage.open("");
            await loginHelper.amazonLogin(testData.email,testData.password)
            let txt: string = await loginPage.successLog.getText();
            chaiExpect(txt).to.equal(testData.welcomeData);
        });
    });
});