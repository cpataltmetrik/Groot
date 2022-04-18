import ProductDetailsPage from '../../main/pageobjects/amz.productDetails.page';
import SearchPage from '../../main/pageobjects/amz.search.page';
import  SEARCH_DATA  from '../testData/searchData';
import * as config from 'config'
import { addLogger } from '../../../utilities/logger'
const baseURL = config.get('Environment.baseUrl');

let pdtsearchString : string = config.get('ProductData.searchProduct')
let pdtexpectedString : string = config.get('ProductData.expectedString')

// let searchString : string = SEARCH_DATA.dataset1.searchString
// let expectedString : string = SEARCH_DATA.dataset1.expectedString
describe('Search a product from Amazon', () => {
    
    it('Should search a product and store the value', async () => {
       
        await SearchPage.open();

        console.log(pdtsearchString)
        await SearchPage.searchProduct(pdtsearchString);
        let getAllTvResults = await SearchPage.searchResults;

        await getAllTvResults.forEach(element => {
           console.log(element.getText());
        })

       // expect(await getAllTvResults[0].getText()).toHaveValue(pdtexpectedString);
    });

    it('Click on the Product to View' , async () => {

        await ProductDetailsPage.productView(pdtsearchString);
        let getAllTvResults = await SearchPage.searchResults;
        await getAllTvResults.forEach(element => {
            console.log(element.getText());
         })
 
        // expect(await getAllTvResults[0].getText()).toHaveValue(pdtexpectedString);
    });

    it('Validate EMI Options', async () => {

        await ProductDetailsPage.viewEMIOptions();

    });


    it('Product zoom', async () => {

        await ProductDetailsPage.productZoom();

    });
    
});

