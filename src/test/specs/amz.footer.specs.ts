import Footer from "../../main/pageobjects/amz.footer.page"
import * as config from 'config'
import { addLogger } from '../../../utilities/logger'
const baseURL = config.get('Environment.baseUrl');
const footer: any=new Footer();

describe('Navigate to Footer Section', async()=>
{
    it('navigating to footer and click on Help',async()=>
    {
     await footer.navigate_footer();
     })


     it('Search for Amazon pay and validate the links present below',async()=>
     {
         await footer.amazonpay_validation("Amazon Pay");
     }
     )
})
