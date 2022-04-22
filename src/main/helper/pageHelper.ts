//import { ChainablePromiseElement } from 'webdriverio';
//const  addLogger= require('../../../utilities/logger.ts')
import { addLogger } from '../utilities/logger'


module.exports = {
     clickWhenDisplayed: function (timeout): void {
          try {
               this.waitForDisplayed(timeout || { timeout: 10000 })
               this.click()
               addLogger(`STEP: Clicked on element : ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error)
          }
     },
     clickWhenReady: function (timeout) {
          try {
               this.waitForClickable(timeout || { timeout: 10000 })
               this.click()
               addLogger(`STEP: Clicked element : ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error)
          }
     },
     clickWhenEnabled: async function (timeout) {
          try {
               await this.waitForEnabled(timeout || { timeout: 10000 })
               await this.click()
               addLogger(`STEP: Clicked element : ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error)
          }
     },
     setText: async function (text: string) {
          try {
               this.clearValue();
               await this.click();
               await this.setValue(text);
               addLogger(`STEP: Entered value : ${text} in ${this.selector.toString()}`)
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
               addLogger(`STEP: Entered value : ${textVal} in ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     waitTill: async function () {
          try {
               if ((await $(this.selector)).waitForEnabled()) {
                    addLogger(`STEP: Element : ${this.selector.toString()} is enabled`)
               }
          } catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     waitTillInterval: async function (timeout) {
          try {
               if ((await $(this.selector)).waitForEnabled()) {
                    addLogger(`STEP: Element : ${this.selector.toString()} is enabled`)
               }
               else {
                    await (await $(this.selector)).waitForDisplayed(timeout)
                    addLogger(`STEP: Element : ${this.selector.toString()} is enabled after ${timeout}`)
               }
          } catch (error) {
               addLogger('ERROR :' + error);
           }

       },

       clickAndhighlight : async function(timeout) {

          try {
               await this.click();
              browser.execute('arguments[0].style.backgroundColor = "#FDFF47";', $(this.selector));//provide a yellow background
               browser.execute('arguments[0].style.outline = "#e94f58";', $(this.selector)); //provide a red outline
               addLogger(`Highlighted ${this.selector.toString()} in Yellow background and Red outline`)
           } catch (error) {
               addLogger('ERROR :' + error);
           }

       },

       scrolltoView : async function () {
            try {
               if((await $(this.selector)).waitForEnabled()) {
                    (await $(this.selector)).scrollIntoView()
                    this.waitForDisplayed(3000)
                    addLogger(`Scrolled to the Element ${this.selector.toString()} view`)
               }
            }
            catch(error) {
                 addLogger('ERROR :' +error);
            }
            
       },

       selectByText : async function (option) {
            try {
                 (await $(this.selector)).click();
                 (await $(this.selector)).selectByVisibleText(option);

            }catch(error) {
               addLogger('ERROR :' +error);
            }
            
       },

       selectOption : async function (option, value) {
          try {
               (await $(this.selector)) .click();
               (await $(this.selector)).selectByAttribute(option, value)

          }catch(error) {
             addLogger('ERROR :' +error);
          }
          
     },

     selectOption : async function (index) {
          try {
               (await $(this.selector)) .click();
               (await $(this.selector)).selectByIndex(index)

          }catch(error) {
             addLogger('ERROR :' +error);
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
               addLogger(`STEP: Page loaded successfully`)
          } catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     highlightElement: async function (timeout) {
          try {
               browser.execute('arguments[0].style.backgroundColor = "#FDFF47";', $(this.selector));//provide a yellow background 
               browser.execute('arguments[0].style.outline = "#f00 solid 4px";', $(this.selector)); //provide a red outline
               addLogger(`STEP: Highlighted ${this.selector.toString()} in Yellow background and Red outline`)
          } catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     getUrlAndTitle: function (timeout): string {
          try {
               return browser.getUrl().toString()
               return browser.getTitle.toString()
          } catch (error) {
               addLogger('ERROR :' + error);
          }
     },

     fieldClear: function (timeout) {
          try {
               this.waitForDisplayed(timeout || { timeout: 3000 })
               this.clear()
               addLogger(`STEP: Cleared the field ${this.selector.toString()}`)
          }
          catch (error) {
               addLogger('ERROR :' + error);
          }
     },
     elementDoubleClick: async function () {
          try {
               if (this.waitForDisplayed()) {
                    this.doubleClick();
                    addLogger(`STEP: Element dobule clicked successfull :${this.selector.toString()}`);
               }
          }
          catch (error) {
               addLogger(`ERROR: Element not found to click : ${error}`);
          }

     },
     switchToIframe: async function () {
          try {
               if (this.waitForExist()) {
                    this.switchToFrame();
                    addLogger(`STEP: Moved to frame successfully :${this.selector.toString()}`);
               }
          }
          catch (error) {
               addLogger(`ERROR: Frame does not exist : ${error}`);
          }
     },

     mouseHover : async function () {
          try {
               const location = (await $(this.selector)).getLocation();
               console.log(location); 

               const xLocation = await (await $(this.selector)).getLocation('x')
               console.log(xLocation); 

               const yLocation = await (await $(this.selector)).getLocation('y')
               console.log(yLocation);

               browser.moveToElement('$(this.selector)', xLocation, yLocation)
          } catch (error) {
               addLogger(`ERROR : ${error}`)
          }
     },

     switchToWindow : async function name() {
          try{

                    // get the current or parent window name 
                     let parentWindow = await browser.getWindowHandle();

                    // get the all child windows name  
                     let childWindows = await browser.getWindowHandles();
                     await childWindows.forEach(window => {
                          if(window !== parentWindow){
                                browser.newWindow(window)
                          }

                          else {
                              addLogger('ERROR : There is no new window opened')
                          }
                     });
          }
          catch (error){
               addLogger(`ERROR : ${error}`)
          }
          
     }
}