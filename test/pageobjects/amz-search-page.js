const BasePage = require('./amz-base-page.js');
let headingProducts = '//div/h2/a/span[contains(text(),"Apple iPhone 12")]';

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
        return $(headingProducts);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to search a product
     */
    async searchProduct (productToSearch) {
        await this.searchField.click();
        await this.searchField.setValue(productToSearch);
        await this.btnSearch.click();
    }

    async getListOfResults(){
         return this.searchResults;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new SearchPage();
