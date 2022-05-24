import loginPage from '../../src/main/pageobjects/login.page';
import loginHelper from '../../src/main/helper/loginHelper';
const chaiExpect: any = require("chai").expect;
const loginJsonTestData = require('../testData/loginJsonTestData.json')

describe("Login Page", async () => {
    loginJsonTestData.forEach((testData) => {
        it(`Should login to amazon page and check login has been done successful or not using json data | testcase id : ${testData.testCaseId}`, async () => {
            await loginPage.open("");
            await loginHelper.amazonLogin(testData.email,testData.password);
            let txt: string = await loginPage.successLog.getText();
            chaiExpect(txt).to.equal(testData.welcomeData);
        });
    });
});