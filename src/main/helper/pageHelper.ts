import allureReporter from '@wdio/allure-reporter';

export const addLogger = (log: string) => {
     allureReporter.addStep(`STEP: ${log}`)
     console.log(`STEP: ${log}`)
}

export const clickElement = async function (elem: WebdriverIO.Element) {
     try{
          if(elem.waitForExist)
          await elem.click();
          addLogger(`Clicked on element: ${elem.selector.toString()}`)
     }
    
     catch(error){
               if(error.name === 'Element is not found'){
               addLogger(`Unable to click on element: ${elem.selector.toString()}`)
               }
               else {
                    throw error;
               }
     }
    
}

export const setText = async (element: WebdriverIO.Element, text: string) => {
     await element.click();
     await element.setValue(text);
     addLogger(`Entered value: ${text}`)
}
/*
module.exports = {
     

     clickWhenDisplayed: function (timeout): void {
          // `this` is return value of $(selector)
          allureReporter.addStep(`waiting for ${timeout / 1000} second....`);
          this.waitForDisplayed(timeout || { timeout: 10000 })
          this.click()
          allureReporter.addStep('clicked successfully');
     },
     clickWhenReady: function (timeout) {
          // `this` is return value of $(selector)
          allureReporter.addStep(`waiting for ${timeout / 1000} second....`);
          this.waitForClickable(timeout || { timeout: 10000 })
          this.click()
          allureReporter.addStep('clicked successfully');
     },
     clickWhenEnabled: function (timeout) {
          // `this` is return value of $(selector)
          allureReporter.addStep(`waiting for ${timeout / 1000} second....`);
          this.waitForEnabled(timeout || { timeout: 10000 })
          this.click()
          allureReporter.addStep('clicked successfully');
     },
}
*/
