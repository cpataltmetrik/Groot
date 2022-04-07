import SearchPage from '../pageobjects/amz.search.page';

describe('Search a product from Amazon', () => {
    it('Should search a product and store the value', async () => {
        await SearchPage.open();

        await SearchPage.searchProduct('Iphone 12');
        let getAllIphone = await SearchPage.searchResults;

        await getAllIphone.forEach(element => {
            console.log(element.getText());
        })

        expect(await getAllIphone[0].getText()).toHaveValue('Apple');
    });
});