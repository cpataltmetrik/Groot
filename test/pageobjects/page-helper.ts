module.exports = {
    clickWhenDisplayed: function (timeout):void {
         // `this` is return value of $(selector)
         this.waitForDisplayed(timeout || { timeout: 10000 })
         this.click()
         console.log('clicked element successfully ======================')
    },
    clickWhenReady: function (timeout) {
        // `this` is return value of $(selector)
        this.waitForClickable(timeout || { timeout: 10000 })
        this.click()
   },
   clickWhenEnabled: function (timeout) {
     // `this` is return value of $(selector)
     this.waitForEnabled(timeout || { timeout: 10000 })
     this.click()
},
}