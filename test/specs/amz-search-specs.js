const SearchPage = require('../pageobjects/amz-search-page');
var searchresultsPhones = [];

describe('Search a product from Amazon', () => {
    it('Should search a product and store the value', async () => {
        await SearchPage.open('');
        await SearchPage.searchProduct('Iphone 12');
        for(i=0; i< await SearchPage.getListOfResults().length; i++){
        searchresultsPhones.push(await SearchPage.getListOfResults()[i]);
        }
        searchresultsPhones.forEach(element => {
            console.log(element.getText());
        });

        expect(searchresultsPhones).toHaveValue('Apple');

        
    });
});


