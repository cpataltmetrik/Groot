// ***********************************************
// This pageHelper.ts file would allow you how to
// create various custom commands and overwrite
// existing commands.

// For more comprehensive examples of custom
// commands please read more here:
// https://webdriver.io/docs/customcommands/
// ***********************************************

import { addLogger } from "../utilities/logger";

module.exports = {

 /**
   * This is a custom command that is used to click on a web element when it is displayed on the
  webpage
   * @param timeout 
   */ 
  clickWhenDisplayed: function (timeout) {
    try {
      this.waitForDisplayed(timeout || { timeout: 10000 });
      this.click();
      addLogger(`Clicked on element : ${this.selector.toString()}`);
      // return new Promise((resolve,reject) => {
      //      resolve('successful');
      //         });
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /** 
   * Perform click when ther WebElement is ready to click 
   * @param timeout 
   */
  clickWhenReady: function (timeout) {
    try {
      this.waitForClickable(timeout || { timeout: 10000 });
      this.click();
      addLogger(`STEP: Clicked element : ${this.selector.toString()}`);
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Perform click after the WebElement is enabled on the webpage and specified timeout 
   * @param timeout 
   */
  clickWhenEnabled: async function (timeout) {
    try {
      await this.waitForEnabled(timeout || { timeout: 10000 });
      await this.click();
      addLogger(`STEP: Clicked element : ${this.selector.toString()}`);
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Click and enter value to the field 
   * @param text 
   */
  setText: async function (text: string) {
    try {
      this.clear();
      await this.click();
      await this.setValue(text);
      addLogger(`STEP: Entered value : ${text} in ${this.selector.toString()}`);
    } catch (error) {
      addLogger("ERROR :" + error);
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

  /**
   * Wait for the specified interval of time and enter the value/text on the field 
   * @param timeout 
   * @param textVal 
   */
  waitAndEnterText: function (timeout, textVal) {
    try {
      this.waitForDisplayed(timeout || { timeout: 3000 });
      this.clear();
      this.click();
      this.setValue(textVal);
      addLogger(
        `STEP: Entered value : ${textVal} in ${this.selector.toString()}`
      );
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Wait till the WebElement is enabled on the webpage
   */
  waitTill: async function () {
    try {
      if ((await $(this.selector)).waitForEnabled()) {
        addLogger(`STEP: Element : ${this.selector.toString()} is enabled`);
      }
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Wait for an element for the provided amount of milliseconds to be displayed or not displayed.
   * @param timeout 
   */
  waitTillInterval: async function (timeout) {
    try {
      if ((await $(this.selector)).waitForEnabled()) {
        addLogger(`STEP: Element : ${this.selector.toString()} is enabled`);
      } else {
        await (await $(this.selector)).waitForDisplayed(timeout);
        addLogger(
          `STEP: Element : ${this.selector.toString()} is enabled after ${timeout}`
        );
      }
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**  
   * Perform a click action and then highlight the webelement
   */
  clickAndhighlight: async function (timeout) {
    try {
      await this.click();
      browser.execute(
        'arguments[0].style.backgroundColor = "#FDFF47";',
        $(this.selector)
      ); //provide a yellow background
      browser.execute(
        'arguments[0].style.outline = "#e94f58";',
        $(this.selector)
      ); //provide a red outline
      addLogger(
        `Highlighted ${this.selector.toString()} in Yellow background and Red outline`
      );
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Scroll an element into the visible area of the browser window 
   */
  scrolltoView: async function () {
    try {
      if ((await $(this.selector)).waitForEnabled()) {
        (await $(this.selector)).scrollIntoView();
        this.waitForDisplayed(3000);
        addLogger(`Scrolled to the Element ${this.selector.toString()} view`);
      }
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Select the options with the displayed text (given label) 
   * @param option -  text of option element to get selected
   */
  selectByText: async function (option) {
    try {
      (await $(this.selector)).click();
      (await $(this.selector)).selectByVisibleText(option);
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Select the option with the given value 
   * @param option - attribute of option element to get selected
   * @param value - value of option element to get selected
   */
  selectOptionByValue: async function (option, value) {
    try {
      (await $(this.selector)).click();
      (await $(this.selector)).selectByAttribute(option, value);
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Select the value/option at the given index. 
   * Index starts from 0
   * @param index - option index
   */
  selectOptionByIndex: async function (index) {
    try {
      (await $(this.selector)).click();
      (await $(this.selector)).selectByIndex(index);
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Wait for a webpage to load untill the DOM elements are ready
   * @param timeout 
   */
  waitForPageLoad: async function (timeout) {
    try {
      browser.waitUntil(
        async function () {
          const state = browser.execute(function () {
            return document.readyState;
          });
          return (await state) === "complete";
        },
        {
          timeout: 60000, //60secs
          timeoutMsg: "Oops! Check your internet connection",
        }
      );
      addLogger(`STEP: Page loaded successfully`);
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Accepts a string with the code to highlight a WebElement
   */
  highlightElement: async function () {
    try {
      browser.execute(
        'arguments[0].style.backgroundColor = "#FDFF47";',
        $(this.selector)
      ); //provide a yellow background
      browser.execute(
        'arguments[0].style.outline = "#f00 solid 4px";',
        $(this.selector)
      ); //provide a red outline
      addLogger(
        `STEP: Highlighted ${this.selector.toString()} in Yellow background and Red outline`
      );
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * 
   * @param timeout Obtain the webpage URL and also the title of the webpage
   * @returns URL and Title
   */
  getUrlAndTitle: function (timeout): string {
    try {
      return browser.getUrl().toString();
      return browser.getTitle.toString();
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Clear the field/text value
   * @param timeout 
   */
  fieldClear: function (timeout) {
    try {
      this.waitForDisplayed(timeout || { timeout: 3000 });
      this.clear();
      addLogger(`STEP: Cleared the field ${this.selector.toString()}`);
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Double click on a Webelement
   */
  elementDoubleClick: async function () {
    try {
      if (this.waitForDisplayed()) {
        this.doubleClick();
        addLogger(
          `STEP: Element dobule clicked successfull :${this.selector.toString()}`
        );
      }
    } catch (error) {
      addLogger(`ERROR: Element not found to click : ${error}`);
    }
  },

  /**
   * Switch to IFrame using element property
   */
  switchToIframe: async function () {
    try {
      if (this.waitForExist()) {
        this.switchToFrame();
        addLogger(
          `STEP: Moved to frame successfully :${this.selector.toString()}`
        );
      }
    } catch (error) {
      addLogger(`ERROR: Frame does not exist : ${error}`);
    }
  },

  /**
   * changes or view pops up when the pointer of a mouse moves over a particular WebElement
   */
  mouseHover: async function () { // removed extra spaces in this function
    try {
      const location = (await $(this.selector)).getLocation();
      console.log(location);
      const xLocation = await (await $(this.selector)).getLocation("x");
      console.log("xlocation********** :", xLocation);
      const yLocation = await (await $(this.selector)).getLocation("y");
      console.log("ylocation********** :", yLocation);
      this.moveTo(xLocation, yLocation);
    } catch (error) {
      addLogger(`ERROR : ${error}`);
    }
  },

  /**
   * Switch over to new window or new tab
   * @param name 
   */
  switchToWindow: async function (name) {
    try {
      // get the current or parent window name
      let parentWindow = await browser.getWindowHandle();

      // get the all child windows name
      let childWindows = await browser.getWindowHandles();
      await childWindows.forEach((window) => {
        if (window !== parentWindow) {
          browser.newWindow(window);
        } else {
          addLogger("ERROR : There is no new window opened");
        }
      });
    } catch (error) {
      addLogger(`ERROR : ${error}`);
    }
  },
};

