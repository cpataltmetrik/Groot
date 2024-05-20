import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  public async open(path: string): Promise<string> {
    return super.open(path);
  }
  public get emailField() {
    return <any>$(`[name="email"]`);
  }
  public get continueButton() {
    return <any>$(`#continue`);
  }

  public get forgotPasswordLink() {
    return <any>$("#auth-fpp-link-bottom");
  }

  public get signIn() {
    return <any>$("//a[@id='nav-link-accountList']");
  }
  public get eMail() {
    return <any>$("//input[@id='ap_email']");
  }
  public get contBtn() {
    return <any>$("//input[@id='continue']");
  }
  public get passWord() {
    return <any>$("//input[@id='ap_password']");
  }
  public get lastBtn() {
    return <any>$("//input[@id='signInSubmit']");
  }
  public get createAccountBtn() {
    return <any>$("#createAccountSubmit")
  }

  //checking if the login is success or not

  public get successLog() {
    return <any>$("span#nav-link-accountList-nav-line-1");
  }

  public async getVerificationRequiredText() {
    return await $('div[class="a-row a-spacing-small"] h1').getText();
  }
  public async enterEmailAddress(email) {
    await this.emailField.setValue(email);
  }

  public async clickContinueButton() {
    await this.continueButton.clickWhenReady();
  }
  public async clickForgotPasswordLink() {
    await this.forgotPasswordLink.clickWhenReady();
  }

  public async waitForPageLoad() {
    await this.emailField.waitForPageLoad();
  }

  public async clickCreateAccountButton(){
    await this.createAccountBtn.clickWhenReady();
  }
}
export default new LoginPage();
