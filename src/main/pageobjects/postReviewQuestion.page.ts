import Page from './page';

export default class PostReviewQuestion extends Page {

  public get searchField() {
    return <any>$("//input[@id='twotabsearchtextbox']");
  }

  public get searchButton() {
    return <any>$("#nav-search-submit-button");
  }

  public get selectMobile() {
    return <any>($('//span[contains(text(),"Redmi Note 11 (Horizon Blue, 6GB RAM, ")]'));
  }

  public get searchInputField() {
    return <any>$("(//input[@type='search'])");
  }

  public get postQuestion() {
    return <any>($("(//span[@class='a-size-base a-text-bold']//parent::div/..//a//button)[1]"));
  }

  public get popUpValidate() {
    return <any>$("//p[contains(text(),'Your question might be answered')]");
  }

  public get postButton() {
    return <any>($("(//form[@method='post']//parent::div//p/../..//button[@type='button'])[2]"));
  }

  public get emailField() {
    return <any>$(`[name="email"]`);
  }

  public get passwordField() {
    return <any>$("//input[@name='password']");
  }

  public get sighInButton() {
    return <any>$("//input[@id='signInSubmit']");
  }

  public get validateQuestionReceived() {
    return <any>$("//div[@class='a-box-inner a-alert-container']");
  }

  public async SearchProduct(productToSearch) {
    await (await this.searchField).click();
    await (await this.searchField).setValue(productToSearch);
    await (await this.searchButton).click();
    await this.selectMobile.clickWhenDisplayed();
  }

  public async ValidatePostQuestionButton() {
    await this.searchInputField.scrolltoView();
    await this.searchInputField.click();
    await this.postQuestion.click();
  }

  public async PopUpValidateFunction() {
    await this.popUpValidate.waitForDisplayed();
    await this.postButton.clickWhenDisplayed();
  }

  public async LoginFunctionality(email, password) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.sighInButton.click();
  }

  public open() {
    return super.open("");
  }
}
