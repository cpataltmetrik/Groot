//import { ChainablePromiseElement } from 'webdriverio';
//const  addLogger= require('../../../utilities/logger.ts')
import { addLogger } from '../../../utilities/logger'

module.exports = {
    clickWhenDisplayed: function (timeout):void {
         // `this` is return value of $(selector)
         this.waitForDisplayed(timeout || { timeout: 10000 })
         this.click()
         addLogger(`Clicked on element: ${this.selector.toString()}`)
    },
    clickWhenReady: function (timeout) {
        // `this` is return value of $(selector)
        this.waitForClickable(timeout || { timeout: 10000 })
        this.click()
   },
   clickWhenEnabled: function (timeout) : void {
     // `this` is return value of $(selector)
     this.waitForEnabled(timeout || { timeout: 10000 })
     this.click()
     addLogger(`Clicked element: ${this.selector.toString()}`)
     },
   setText : async function (text: string) {
          await this.click();
          await this.setValue(text);
          addLogger(`Entered value: ${text} in ${this.selector.toString()}`)
     }
}