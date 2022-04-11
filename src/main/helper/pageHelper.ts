//import { ChainablePromiseElement } from 'webdriverio';
//const  addLogger= require('../../../utilities/logger.ts')
import { addLogger } from '../../../utilities/logger'


module.exports = {
     clickWhenDisplayed: function (timeout): void {
          try {
               this.waitForDisplayed(timeout || { timeout: 10000 })
               this.click()
               addLogger(`Clicked on element : ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error)
          }
     },
     clickWhenReady: function (timeout) {
          try {
               this.waitForClickable(timeout || { timeout: 10000 })
               this.click()
               addLogger(`Clicked element : ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error)
          }
     },
     clickWhenEnabled: async function (timeout) {
          try {
               await this.waitForEnabled(timeout || { timeout: 10000 })
               await this.click()
               addLogger(`Clicked element : ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error)
          }
     },
     setText: async function (text: string) {
          try {
               this.clear();
               await this.click();
               await this.setValue(text);
               addLogger(`Entered value : ${text} in ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error)
          }
     },
     // this is similar to clickWhenDisplayed method above, so commenting this out for
     // waitAndClick: function(timeout) {
     //     try {
     //      this.waitForDisplayed(timeout || { timeout: 3000 })
     //      this.click()
     //      addLogger(`Clicked element : ${this.selector.toString()}`)
     //     }
     //      catch(error) {
     //           addLogger('ERROR :' +error)
     //      }
     // },

     waitAndEnterText: function (timeout, textVal) {
          try {
               this.waitForDisplayed(timeout || { timeout: 3000 })
               this.clear()
               this.click()
               this.setValue(textVal)
               addLogger(`Entered value : ${textVal} in ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     waitTill: async function () {
          try {
               if ((await $(this.selector)).waitForEnabled()) {
                    addLogger(`Element : ${this.selector.toString()} is enabled`)
               }
          } catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     waitTillInterval: async function (timeout) {
          try {
               if ((await $(this.selector)).waitForEnabled()) {
                    addLogger(`Element : ${this.selector.toString()} is enabled`)
               }
               else {
                    await (await $(this.selector)).waitForDisplayed(timeout)
                    addLogger(`Element : ${this.selector.toString()} is enabled after ${timeout}`)
               }
          } catch (error) {
               addLogger('ERROR :' + error);
          }

     },

     waitForPageLoad: async function (timeout) {
          try {
               browser.waitUntil(async function () {
                    const state = browser.execute(function () {
                         return document.readyState;
                    });
                    return await state === 'complete';
               },
                    {
                         timeout: 60000, //60secs
                         timeoutMsg: 'Oops! Check your internet connection'
                    });
               addLogger(`Page loaded successfully`)
          } catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     highlightElement: async function (timeout) {
          try {
               browser.execute('arguments[0].style.backgroundColor = "#FDFF47";', $(this.selector));//provide a yellow background 
               browser.execute('arguments[0].style.outline = "#f00 solid 4px";', $(this.selector)); //provide a red outline
               addLogger(`Highlighted ${this.selector.toString()} in Yellow background and Red outline`)
          } catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     getUrl: function (timeout): string {
          try {
               return browser.getUrl().toString()
          } catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     fieldClear: function (timeout) {
          try {
               this.waitForDisplayed(timeout || { timeout: 3000 })
               this.clear()
               addLogger(`Cleared the field ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error);
          }
     },
}