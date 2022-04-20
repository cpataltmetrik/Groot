import shopByCategory from "../../main/pageobjects/amz.shopbycategory.page"
import * as config from 'config'
import { addLogger } from '../../../utilities/logger'

const shop:any=new shopByCategory();
describe('ShopBy category', async()=>
{
  it('select mobiles in shopby category ',async()=>
  {
       
      await shop.shopby_category();
       
 })
 it('validate the products based on Brands', async()=>
 {
    await shop.selectBrand(shop.boat_brand,shop.boat_Product1)
    await shop.selectBrand(shop.oneplus_brand,shop.oneplus_product1)
  }
 )








}


)