import allureReporter from '@wdio/allure-reporter';

export const addLogger = (log: string) => {
    allureReporter.addStep(`STEP: ${log}`)
    console.log(`STEP: ${log}`)
}