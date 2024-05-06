import SearchPage from '../../src/main/pageObjects/amz.search.page';
import amazonHomePage from '../../src/main/pageObjects/home.page';
import amazonLoginPage from '../../src/main/pageObjects/login.page';
import LOGINDATA from '../testData/loginData';
import * as config from 'config'
import { addLogger } from '../../src/main/utilities/logger'

let email: string = LOGINDATA.userPassSet.input1
describe('Click on forgot password link -> @Smoke', () => {
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