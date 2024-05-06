import loginData from "../testData/loginData";
import loginPage from "../../src/main/pageobjects/login.page";
import { expect } from "chai";

/*data from login data*/
const input1: string = loginData.userPassSet.input1;
const input2: string = loginData.userPassSet.input2;

describe("Login Page", async () => {
    it("Should login to amazon page", async () => {
        await loginPage.open("");
        await loginPage.successLog.clickWhenReady();
        await loginPage.emailField.setText("input1");
        await loginPage.continueButton.clickWhenEnabled();
        await loginPage.passWord.setText(input2);
        await loginPage.lastBtn.clickWhenEnabled();
    });

    it("Should check login has been done successful or not", async () => {
        const txt: string = await loginPage.successLog.getText();
        expect(txt).to.equal("Test,");
    });
});