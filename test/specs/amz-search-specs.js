const SearchPage = require('../pageobjects/amz-search-page');

describe('Search a product from Amazon', () => {
    before(() =>{
        SearchPage.open();
    })

    it('Should search a product and store the value', async () => {
        await SearchPage.searchProduct('Iphone 12');
        let getAllIphone = await SearchPage.searchResults;

        await getAllIphone.forEach(element =>{
            //console.log('Apple phone list is '+element.getText());
        })

        expect(await getAllIphone[0].getText()).toHaveValue('Apple');
    });

    it('Select phones from Amazon\'s Choice', async () => {
        await SearchPage.searchProduct('Iphone 12');
        let getAmzChoicePhones = await SearchPage.amazonChoiceList;
        console.log('There are  '+ getAmzChoicePhones.legth+  ' phones available of amazon choice');
        
    });

    it('Should be failed to get screenshot', async () => {
        expect({a: 1}).to.not.have.property('b');
        
    });
});


