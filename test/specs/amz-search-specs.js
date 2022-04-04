const SearchPage = require('../pageobjects/amz-search-page');
const AllureReporter = require('@wdio/allure-reporter').default;
const assert = require('chai');

describe('Search a product from Amazon', () => {
    before(() =>{
        SearchPage.open();
        AllureReporter.addStep('Application is loading');
    })

    it('Should search a product and store the value', async () => {
        await SearchPage.searchProduct('Iphone 12');
        let getAllIphone = await SearchPage.searchResults;

        await getAllIphone.forEach(element =>{
            AllureReporter.addStep('Product name is '+element.getText().toString())
        })

        expect(await getAllIphone[0].getText()).toHaveValue('Apple');
    });

    it('Select phones from Amazon\'s Choice', async () => {
        await SearchPage.searchProduct('Iphone 12');
        let getAmzChoicePhones = await SearchPage.amazonChoiceList;
        console.log('There are  '+ getAmzChoicePhones.legth+  ' phones available of amazon choice');
        
    });

    it('Should be failed to get screenshot', async () => {
        assert.expect(2).to.equal(4);
        
    });
});


