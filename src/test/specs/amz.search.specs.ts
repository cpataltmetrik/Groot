import SearchPage from '../../main/pageobjects/amz.search.page';
import  SEARCH_DATA  from '../testdata/searchData';
import * as config from 'config'

//let searchString : string = config.get('TestData1.searchTerm')
//let expectedString : string = config.get('TestData1.expectedString')

let searchString : string = SEARCH_DATA.dataset1.searchString
let expectedString : string = SEARCH_DATA.dataset1.expectedString

describe('Search a product from Amazon', () => {
    it('Should search a product and store the value', async () => {
        await SearchPage.open();

        await SearchPage.searchProduct(searchString);
        let getAllIphone = await SearchPage.searchResults;

        await getAllIphone.forEach(element => {
           console.log(element.getText());
        })

        expect(await getAllIphone[0].getText()).toHaveValue(expectedString);
    });
});