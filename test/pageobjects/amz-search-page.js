const BasePage = require('./amz-base-page.js');
const AllureReporter = require('@wdio/allure-reporter').default;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get searchField () {
        return $('#twotabsearchtextbox');
    }

    get btnSearch () {
        return $('#nav-search-submit-button');
    }

    get searchResults() {
        return $$('//div/h2/a/span[contains(text(),"Apple iPhone 12")]');
    }

    get amazonChoiceList(){
        return $$('//span[text()="Amazon\'s "]/following::span[1][text()="Choice"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to search a product
     */
    async searchProduct (productToSearch) {
        AllureReporter.addStep('Searching the producr '+productToSearch);
        await this.searchField.click();
        await this.searchField.setValue(productToSearch);
        await this.btnSearch.click();
        //AllureReporter.addStep('Click on Button '+this.btnSearch);
    }

    /*async getListOfResults(){
         await this.searchResults;
    }8/

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new SearchPage();
