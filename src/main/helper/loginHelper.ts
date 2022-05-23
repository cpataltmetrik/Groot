import loginPage from '../pageobjects/login.page';

export default class loginHelper {
    /**
   * This is a helper method that is used to increase reusability of code
   * @callback amazonLogin
   * @method
   * @param {String} username username
   * @param {String} username password
   */ 
    public static async amazonLogin(username, password){
        await loginPage.successLog.clickWhenReady();
        await loginPage.emailField.setText(username);
        await loginPage.continueButton.clickWhenEnabled();
        await loginPage.passWord.setText(password);
        await loginPage.lastBtn.clickWhenEnabled();
    }
}