import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchField() {
        return $('#twotabsearchtextbox');
    }

    public get btnSearch() {
        return $('#nav-search-submit-button');
    }

    public get searchResults() {
        return $$('//div/h2/a/span[contains(text(),"Apple iPhone 12")]');
    }

    public get amazonChoiceList() {
        return $$('//span[text()="Amazon\'s "]/following::span[1][text()="Choice"]');
    }

    public get allButtonSearch() {
        return $('//a[@id="nav-hamburger-menu"]//span[text()="All"]');
    }

    public get helpAndSettingSection() {
        return $('//div[contains(text(),"help")]');
    }

    public get getAllHeadingsFromhelpAndSettingSection() {
        return $$('//ul[@data-menu-id="1"]//li[@class="hmenu-separator"][4]/following-sibling::li/a');
    }

    public get signIn_Btn() {
        return $('//li/a[text()="Sign In"]');
    }

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async searchProduct(productToSearch) {
        await this.searchField.clickWhenDisplayed();
        await this.searchField.clickAndhighlight();
        await this.searchField.setText(productToSearch);
        await this.btnSearch.clickWhenEnabled();
    }

    public async clickAllButton() {
        await this.allButtonSearch.clickWhenDisplayed();
    }

    public async scrollToHelpAndSettingsSection() {
        await this.helpAndSettingSection.scrolltoView();
    }

    public async scrollTOSignInButton() {
        await this.signIn_Btn.scrolltoView();
    }

    public async getHeadings() {
        await this.getAllHeadingsFromhelpAndSettingSection;
    }

    /**
     * overwrite specific options to adapt it to page object
     */

    public open() {
        return super.open('');
    }

}

export default new SearchPage();
