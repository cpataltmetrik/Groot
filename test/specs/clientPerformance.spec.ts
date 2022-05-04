import SearchPage from '../../src/main/pageObjects/amz.search.page';
const assert = require('assert')

describe('Load Amazon for client performance', () => {
    before(async() => {
       await browser.enablePerformanceAudits()
    })

    it('should load within performance budget', async() => {
        /**
         * this page load will take a bit longer as the DevTools service will
         * capture all metrics in the background
         */
       await SearchPage.open();

        //await browser.url('http://json.org')
        //browser.pause(10000)

        // let metrics = await browser.getMetrics()
        // assert.ok(metrics.speedIndex < 1500) // check that speedIndex is below 1.5ms

        // let score = await browser.getPerformanceScore() // get Lighthouse Performance score
        // console.log("Pefromance Score ===="+score)
        // //assert.ok(score >= .99) // Lighthouse Performance score is at 99% or higher

        // await $(`//a[contains(text(),'Esperanto')]`).click()

        let metrics = await browser.getMetrics()
        assert.ok(metrics.speedIndex < 4500)
        let score = await browser.getPerformanceScore()
        console.log("Pefromance Score ===="+score)
        assert.ok(score >= .50)
    })

    after(() => {
        browser.disablePerformanceAudits()
    })
})