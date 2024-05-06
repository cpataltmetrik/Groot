import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
   * define selectors using getter methods
   */
    public get searchField() {
        return <any>$("#twotabsearchtextbox");
    }

    public get btnSearch() {
        return <any>$("#nav-search-submit-button");
    }

    public get searchResults() {
        return <any>$$('//div/h2/a/span[contains(text(),"Apple iPhone 12")]');
    }

    public get amazonChoiceList() {
        return <any>(
      $$('//span[text()="Amazon\'s "]/following::span[1][text()="Choice"]')
    );
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

    public get helpAndSettingAllHeadings() {
        return $$("//div[.='help & settings']/../following-sibling::li/a");
    }

    public get newReleaseLink() {
        return <any>(
      $('//li/div[text()="trending"]/following::li[2]/a[text()="New Releases"]')
    );
    }

    public get hotReleaseHeading() {
        return <any>$('//div/span[text()="Amazon Hot New Releases"]');
    }

    public get getHotReleaseGroupList() {
        return $$('//div[@data-csa-c-slot-id="tree-nav-2"]//div//div[2]//div');
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

    public async clickOnSearchAllButton() {
        await this.allButtonSearch.waitForDisplayed();
    // await this.allButtonSearch.clickWhenDisplayed();
    }

    // public async scrollToHelpAndSettingsSection() {
    //   await this.helpAndSettingSection.scrolltoView();
    // }

    public async getHelpAndSettingAllHeadings() {
        await this.helpAndSettingSection.waitForDisplayed();
    }

    public async clickNewReleaseLink() {
        await this.newReleaseLink.waitForDisplayed();
        await this.newReleaseLink.clickWhenDisplayed();
    }

    public async getHotReleaseHeadingText() {
        return await this.hotReleaseHeading.getText();
    }

    // public async clickAllButton() {
    //   await this.allButtonSearch.clickWhenDisplayed();
    // }

    // public async scrollToHelpAndSettingsSection() {
    //   await this.helpAndSettingSection.scrolltoView();
    // }

    // public async scrollTOSignInButton() {
    //   await this.signIn_Btn.scrolltoView();
    // }

    public async getHeadings() {
        await this.getAllHeadingsFromhelpAndSettingSection;
    }

    /**
   * overwrite specific options to adapt it to page object
   */

    public open() {
        return super.open("");
    }
}

export default new SearchPage();
