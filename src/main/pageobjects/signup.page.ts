import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class signUpPage extends Page {
  public async open(path: string): Promise<string> {
    return super.open(path);
  }
  public get emailField() {
    return <any>$(`[type="email"],#ap_password_check`);
  }
  public get continueButton() {
    return <any>$(`#continue`);
  }
  public get passwordFieldCheck(){
     return <any>$(`#ap_password_check`) 
  }
  public get nameField() {
    return <any>$("#ap_customer_name");
  }

  public get phoneNumberField() {
    return <any>$("[data-validation-id='phoneNumber'],#ap_email");
  }
  public get passwordField() {
    return <any>$("//input[@id='ap_password']");
  }

  public get expectedLog() {
    return <any>$(".a-size-large");
  }

  public get header() {
      return <any>$('//h1');
  }

  public async enterEmailAddress(email) {
    await this.emailField.setValue(email);
  }
  public async enterPassword(password) {
    await this.passwordField.setValue(password);
  }
  public async confirmPassword(password) {
    if(await this.passwordFieldCheck.isElementExist())
        await this.passwordFieldCheck.setValue(password);
  }
  public async clickContinueButton() {
    await this.continueButton.clickWhenReady();
  }
  public async enterName(name) {
    await this.nameField.setValue(name);
  }
  public async enterPhoneNumber(phoneNumber) {
    await this.phoneNumberField.setValue(phoneNumber);
  }
}
export default new signUpPage();
