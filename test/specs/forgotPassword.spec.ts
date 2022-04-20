import SearchPage from '../../src/main/pageobjects/amz.search.page';
import amazonHomePage from '../../src/main/pageobjects/home.page';
import amazonLoginPage from '../../src/main/pageobjects/login.page';
import  LOGINDATA  from '../testData/loginData';
import * as config from 'config'
import { addLogger } from '../../src/main/utilities/logger'

let email : string = LOGINDATA.account1.email
describe('Click on forgot password link', () => {
    it('Should return a Verification page for OTP', async () => {
       
        await SearchPage.open();
        await amazonHomePage.clickLoginButton();
        await amazonLoginPage.enterEmailAddress(email);
        await amazonLoginPage.clickContinueButton();
        await amazonLoginPage.waitForPageLoad();
        await amazonLoginPage.clickForgotPasswordLink();
        await amazonLoginPage.enterEmailAddress(email);
        await amazonLoginPage.clickContinueButton();

        expect(amazonLoginPage.getVerificationRequiredText()).toHaveValue("Verification required");
        addLogger(amazonLoginPage.getVerificationRequiredText() + " text validated Successfully");
    });
});