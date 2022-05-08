import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get loginButton() {
        return <any>$(`//a[@id='nav-link-accountList']`);
    }

    public async clickLoginButton() {
        await this.loginButton.click();
    }
    public async waitForPageLoad() {
        await this.loginButton.waitForPageLoad();
    }

    public get pinCode() {
        return <any>$(`#glow-ingress-block`);
    }
    public async clickSelectAddress() {
        await this.pinCode.waitTill();
        await this.pinCode.clickWhenReady();
    }

    public async getPostalCodeText() {
        return await this.pinCode.getText();
    }

    public async enterPostalcode(postalCode) {
        await $(`#GLUXZipUpdateInput`).setValue(postalCode);
    }

    public async clickApplyButton() {
        await $(
            `[data-action$='GLUXPostalUpdateAction'] > input`,
        ).clickWhenEnabled();
    }
}

export default new HomePage();
