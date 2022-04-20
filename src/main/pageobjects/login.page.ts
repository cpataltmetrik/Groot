import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
 public get emailField() {
     return <any>$(`[name="email"]`)
 }
 public get continueButton() {
     return <any>$(`#continue`);
 }

 public get forgotPasswordLink() {
     return <any>$('#auth-fpp-link-bottom')
 }

 public async getVerificationRequiredText() {
     return await $('div[class="a-row a-spacing-small"] h1').getText()
 }
 public async enterEmailAddress(email) {
      await this.emailField.setValue(email);
 }
 
 public async clickContinueButton(){
      await this.continueButton.clickWhenReady();
 }
 public async clickForgotPasswordLink() {
     await this.forgotPasswordLink.clickWhenReady();
 }

 public async waitForPageLoad() {
   await this.emailField.waitForPageLoad();
}
}

export default new LoginPage();