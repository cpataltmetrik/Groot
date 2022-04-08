import { ChainablePromiseElement } from 'webdriverio';
import {clickElement, setText}  from '../helper/pageHelper'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchField()  {
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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /*public async searchProduct(productToSearch) {
        await this.searchField.clickWhenDisplayed(1000);
        await this.searchField.setValue(productToSearch);
        await this.btnSearch.clickWhenEnabled(1000);
    }*/

    public async searchProductTest(productToSearch) {
        await clickElement(await this.searchField);
        await setText(await this.searchField, productToSearch);
        await clickElement(await this.btnSearch);

    }
     
    /**
     * overwrite specific options to adapt it to page object
     */

    public open() {
        return super.open('');
    }  
    
}

export default new SearchPage();
