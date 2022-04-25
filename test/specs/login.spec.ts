import Login from "../../src/main/pageobjects/login.page";
import { addLogger } from "../../src/main/utilities/logger";
import loginData from "../testData/loginData";
const chaiExpect: any = require("chai").expect;
const login: any = new Login();

/*data from login data*/
const input1: string = loginData.userPassSet.input1;
const input2: string = loginData.userPassSet.input2;

describe("Login Page", async () => {
  it("Should login to amazon page", async () => {
    await login.open("");
    await login.successLog.clickWhenReady();
    await login.emailField.setText(input1);
    await login.continueButton.clickWhenEnabled();
    await login.passWord.setText(input2);
    await login.lastBtn.clickWhenEnabled();
  });

  it("Should check login has been done successful or not", async () => {
    let txt: string = await login.successLog.getText();
    chaiExpect(txt).to.equal("Hello,");
  });
});
