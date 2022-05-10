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
        /**
         * below code gets the browser metrics and checks for speedindext and performance score
         */
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