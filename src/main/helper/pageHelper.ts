import clearValue from "webdriverio/build/commands/element/clearValue";
import { addLogger } from "../utilities/logger";

module.exports = {

 /**
   * This is a custom command that is used to click on a web element when it is displayed on the webpage
   * @callback clickWhenDisplayed
   * @method
   * @param {number} timeout IntervalTime
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
   * @callback clickWhenReady
   * @method
   * @param {number} timeout TimeInterval
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
   * @callback clickWhenEnabled
   * @method
   * @param {number} timeout TimeInterval
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
   * @callback setText
   * @async
   * @method
   * @param {string} text set value
   */
  setText: async function (text) {
    try {
      this.clearValue();
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
   * @callback waitAndEnterText
   * @method
   * @param {number} timeout TimeInterval
   * @param {string} textVal set value
   */
  waitAndEnterText: function (timeout, textVal) {
    try {
      this.waitForDisplayed(timeout || { timeout: 3000 });
      this.clearValue();
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
   * @callback waitTill
   * @method
   * @async
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
   * @callback waitTillInterval
   * @method
   * @async
   * @param {number} timeout 
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
   * @callback clickAndhighlight
   * @method
   * @async function clickAndhighlight(params:type) {}
   * @param {number} [timeout]
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
   * @callback scrolltoView
   * @method
   * @async
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
   * @callback selectByText
   * @method
   * @param {string} option Text of option element to get selected
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
   * @callback selectOptionByValue
   * @method
   * @param {string} option Attribute of option element to get selected
   * @param {string} value Value of option element to get selected
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
   * @callback selectOptionByIndex
   * @method
   * @param {number} index Option index
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
   * @callback waitForPageLoad
   * @method
   * @param {number} timeout TimeInterval
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
   * @callback highlightElement
   * @method
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
   * Obtain the webpage URL and also the title of the webpage
   * @callback getUrlAndTitle
   * @method
   * @param {number} timeout 
   * @returns URL and Title
   */
  getUrlAndTitle: function (timeout) {
    try {
      return browser.getUrl().toString();
      return browser.getTitle.toString();
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Clear the field/text value
   * @callback fieldClear
   * @method
   * @param {number} timeout TimeInterval
   */
  fieldClear: function (timeout) {
    try {
      this.waitForDisplayed(timeout || { timeout: 3000 });
      this.clearValue();
      addLogger(`STEP: Cleared the field ${this.selector.toString()}`);
    } catch (error) {
      addLogger("ERROR :" + error);
    }
  },

  /**
   * Double click on a Webelement
   * @callback
   * @method
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
   * @callback switchToIframe
   * @method
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
   * @callback mouseHover
   * @method
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
   * @callback switchToWindow
   * @method
   * @param {string} name 
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
  /**
   * Check the Element is exist in the page or not and return true if it presents else send false
   * @callback isElementExist
   * @method
   * @param {string} timeout provided default timeout
   */
  isElementExist: async function (timeout = 1000) {
    try {
      await browser.pause(timeout)
      return (await $(this.selector)).isExisting()
    } catch (error) {
      addLogger(`ERROR : ${error}`);
    }
  }
};

