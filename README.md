<html>
<head>
<style>
  summary{
    font-size : 17px;
    font-weight : bold;
    font-style : italic;
  }
</style>
</head>
<body>
<div align="center">

<img src="https://user-images.githubusercontent.com/51842349/167406501-c704fa1c-0136-43c0-9422-be6f226cda9d.png" width="160" alt="Groot" style= "border-radius: 50%"/>


# **Groot - 👋 I am Groot**  <img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" width="80" height="40" alt="Awesome" align="center"/>


**Groot is End to End Automation Framework**

This repository contains automation testing framework built in webdriverIO and Typescript.<br> Named after fictional character in the 2016 Marvel movie Guardians of the Galaxy.
</div>
<br>

## **Languages & Framework Used**
<br>
<p align="left">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="Typescript" /></a>
&nbsp;&nbsp;&nbsp;
<a href="https://webdriver.io/" target="_blank" rel="noreferrer"><img src="https://user-images.githubusercontent.com/51842349/167116198-3b47dc3a-bce6-4513-89f9-5abd8efbce43.png" width="36" height="36" alt="Webdriverio" /></a>
&nbsp;&nbsp;&nbsp;
<a href="https://mochajs.org/" target="_blank" rel="noreferrer"><img src="https://cdn.freebiesupply.com/logos/large/2x/mocha-1-logo-png-transparent.png" width="33" height="36" alt="Mocha" /></a>
&nbsp;&nbsp;&nbsp;
<a href="https://www.chaijs.com/" target="_blank" rel="noreferrer"><img src="https://mpng.subpng.com/20180430/cae/kisspng-mocha-javascript-node-js-test-driven-development-a-chai-sheng-5ae7aa529013f4.9462065815251318585902.jpg" width="39x" height="36" alt="Mocha" style= "border-radius: 50%" /></a>
</p>

## **Table of Contents**

* [Why Typescript?](#why-typescript)

* [Why should I use WDIO over Selenium?](#why-should-i-use-wdio-over-selenium)

* [Why Groot? Why not use WDIO Directly?](#why-groot-why-not-use-wdio-directly)

* [How does Groot Strengthen WDIO?](#how-does-groot-strengthen-wdio)

* [Getting Started](#getting-started)

* [Running Tests](#running-tests)

* [Understanding the Folder structure](#understanding-the-folder-structure)

* [Mocha Integration](#mocha-integration)

* [Test Reports](#test-reports)

* [Naming conventions](#naming-conventions)

* [Features](#features)
    
    * [Bail out](#bail-out)
    * [Retries and re run](#retries-and-re-run)
    * [Custom Commands Implementation](#custom-commands-implementation)
    * [Eslint Configuration](#eslint-configuration)
    * [DevTool Integration for LightHouse](#devtool-integration-for-lighthouse)
    * [WDIO Logger Utility](#wdio-logger-utility)
    * [Allure Report](#allure-report)
    * [Spec Report](#spec-report)
    * [Js Doc](#js-doc)

* [code Examples](#code-examples)

* [mocha official webite](#mocha-official-website)

* [wdio official website](#wdio-official-website)

## **Why Typescript?**

Groot integrated with typescript because of business requirement and typescript also having so many features. 

Typescript is nothing but Javascript some additional ES6 features. It points out the compilation errors at the time of development.

Also supports Interfaces, sub-interfaces, classes and sub-classes. Has additional features like debug, OOPS concepts, Static typing (Datatype correctness during compilation)


## **Why should I use WDIO over Selenium?**

* WDIO in-built timeout configuration removes the Explicit timeout and Implicit timeout.
* Supported for multiple platform and multiple browser execution.
* You choose how to interact with browser - using webdriver or DevTools protocol.
* Easy project setup.
* Flexible configuration.
* Integration with other test automation tools out of a box.

## **Why Groot? Why not use WDIO Directly?**

WebdriverIO has huge in-built functionalities, but depends on business requirement and we come up with idea of Groot Testing framework. It is integration of Multiple features, libraries and functionalities 

Feature like Docker, ESlint, Parallel executions, Mocha libraries and
bail-out that strengthen Groot framework helps   to reduce in code repeatability and increase in productivity.

## **How does Groot Strengthen WDIO?**
Groot comes with multiple features like Spec report for reporting test files. Also, Integreated configuration file with Bail out logic that enhances groot to

WebdriverIO framework. Here is the link for more details [here](#features)

## **Getting Started**
1. Ensure that Node.js 10+ is installed
   https://nodejs.org/en/download/

2. Clone this repo locally and install the dependencies

```
$ git clone https://github.com/cpataltmetrik/groot.git
$ cd groot
$ npm install
```
## **Running Tests**
>  Based on the NODE_ENV, an appropriate environment config file will be loaded

1. To run a single test case
```
   SET NODE_ENV=dev&& npx wdio .\config-wdio\wdio.local.conf.ts --spec <path to test case>

   EX: SET NODE_ENV=dev&& npx wdio .\config-wdio\wdio.local.conf.ts --spec test\specs\forgotPassword.spec.ts
```  
2. How to run multiple test cases based on the environment or based on tags
```
   npm run test-dev        -> to run all test cases for Dev env
   npm run test-dev-smoke  -> to run only Smoke tests
   npm run test-dev-sanity -> to run only Sanity tests
```
> Note: Refer to package.json to know more scripts

## **Understanding the Folder structure**
```
 1. config --> this folder contains all ENV related JSON files, where baseURL is saved
    1.1. wdio.local.conf.ts -> will have all the default configs, and some are overriden according to our requirement
 2. config-wdio --> this folder contains all webdriver IO config files specific to browsers (yet to add more browser config files)
 3. src\main\helper --> contains all the helper classes like Custom methods and Navigator classes et
 4. src\main\pageObjects --> Contains all the page classes, which contains all the locators and their respective actions
 5. src\main\utilities --> Contains utility methods or classes like File name generator, email generator and etc
 6. test\specs --> all the test cases files are saved here
 7. test\testData --> contains all the test data ts files
```

## **Mocha Integration**
 Groot using mocha framework for writing test scripts. mocha is a powerful testing tool.

> How to run mocha test script in wdio
 ```
 npm install @wdio/mocha-framework --save-dev
 ```
 for Integrating mocha with WDIO in wdio-config you need to provide mocha as framework as follows.
```
framework: 'mocha'
```
If you want to define other Mocha-specific settings, you can do it with the mochaOpts key in your configuration file. A list of all options can be found on the [Mocha project website.](https://mochajs.org/api/mocha)

## **Test Reports**
We are using Allure reports in this project,Allure is a flexible lightweight multi-language test report tool that not only shows a very concise representation of what have been tested in a neat web report form, but allows everyone participating in the development process to extract maximum of useful information from everyday execution of tests.
> how to run a report
```
npm run report
```
This command will generate the report and will open it. Incase you are facing issue while opening the file, you can directly open the index file in browser.
> make this change in Firefox
```
        1] type 'about:config' in firefox window
        2] check 'warn me statement'
        3] click on accept the risk and continue
        4] type below command in search box :-
            security.fileuri.strict_origin_policy
        5] set above flag to 'false'
        6] copy path of index.html file which is inside allure-report folder
        7] open mozilla window. paste the path and hit enter
```
> make this change in Chrome
```
        1] Click on window. Type run and hit enter 
        2] In the command line window copy below command :-
            chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
        3] hit enter. new chrome window will get open
        4] copy path of index.html file which is inside allure-report folder
        5] paste path in newly opened chrome window and hit enter
```
## **Naming conventions**
1. Pascal Case Naming Convention :-
	first letter of every word will be in capital only
	>EX: LoginPage, SearchPage
2. Camel Case Naming Convention :-
	first letter of first word will be in lowercase. and first letter of other words will be in uppercase
	>Ex: forgotPassword, login, pinCodeChange


Follow Pascal Case for :
	
    Class names and .ts file consists of class and functions

Follow camel Case for :

	Function/Method
	variables
	Folder
	helper files
	spec files
	pageobject files
	data files
	utilities files
	.ts files without class and consists only functions

Add below suffixes to the files respectively :

	helper files :- fileName.helper.ts
	spec files :- fileName.spec.ts
	pageobject files :- fileName.page.ts
	data files :- fileName.data.ts
	utilities files :- fileName.util.ts



Branch name conventions :

	feature/test_scenario_name
	all words of 'test_scenario_name' will be in lowercase, separated by underscore (_)
	>> EX:- feature/product_category


constants :

	constants will be written in capital letters (UPPERCASE)
	if constants have words more than one, then separate words by underscore (_)
	>> example:- const DAYS_UNTIL_TOMORROW = 1;

## **Features**
<details>
<summary> Bail out </summary>
Bail event help to stop the execution when the specified bail count equals to test failure count.

Condition we need to know : 

* Maximum Instance <= Bail count

> Add the maximum instances in wdio config file.

```
capabilities: [{
    maxInstances: 1
  }]
```
> Configure Mocha bailout options in wdio config file.

Bail object must be boolean.

```
  mochaOpts: {
    bail: true
  }
```
> Configure specific bail count to stop the execution after that much number of failure.

```
bail: 2  //execution will stop after 2 failures
```
#### *Bail report*

Once the execution is stopping because of bail we need to generate our own report.

For creating our own report formate we need to add the following code in wdio-config!
```
onComplete: function(exitCode, config, capabilities, results) {
    if(results.failed == this.bail){
      console.log(chalk.red.underline.bold("******* BAILING OUT *******"))
      console.table({
        "Total Executed cases" : results.finished,
        "passed cases": results.passed,
        "failed cases": results.failed 
      })      
    }
  }
```
</details>

<details>
<summary> Retries and re run</summary>

### *Retries :*
Retry is an mechanism available in Mocha to re-execute the falky test cases when it fails.  

This can be achieved in different levels in mocha as below: 
#### *Suite/Test Level :*
Rerun whole test suites/test cases by configuring in describe/it block respectively as below:
```
describe('retries', function () {  
  this.retries(n);   // Retry all tests in this suite up to n times  
  it('retry Test', async function () {         
        this.retries(n)  
      })                  
  }) 
```
#### *Framework Level:*
By configuring the below properties in WDIO config file can control the retry logice in framework levels:

**specFileRetries :** n - Retries on this level mean that the whole setup process will simply be repeated, just as if it were for a new spec file.  

(i.e., A new browser instance is created for each spec file) 

**Retries property in mochaOpts object :** This retries configuration will rerun the failed test by refreshing the same browser session.

Instructions on how to configure retry logic in WDIO can be found [here.](https://webdriver.io/docs/retry/)

### *Rerun :*
Groot integrate node library to achieve the rerunning the flaky test cases. 

How Re-run differs from retry: 

  * Enables an entire spec file to be re-run after a main test execution is complete.
  * Failed testcases be copied externally and executed (retry cannot) 
  * Can still be used in conjunction with retry methods 
  * Does not require any code change to apply retry logic to flaky or problematic tests
### *Installation :*
For installing Re-run service use this command.
```
npm install wdio-rerun-service --save-dev
```
Re-run configuration in wdio-config :
```
const RerunService = require('wdio-rerun-service'); 

services: [ 
[RerunService, { // Re-run service options here... }] 
], 

```
</details>
<details>
<summary> Custom Commands Implementation </summary>
Groot create his own custom commands by extend the browser instance with his own set of commands, the check out some browser method addCommand is here for you.

```
browser.addCommand("<Method name>", async function (<selector>) {
    await $(selector).waitForDisplayed()
    await $(selector).click()
}, true)
```
above command we can call like this 
```
await browser.<method name>('<selector>')
```
This custom commands we used to reduce the code repeatability in groot.
</details>

<details>
<summary> Eslint Configuration </summary>
ESLint is a JavaScript and TypeScript linting tool. That means it analyses source code and identifies possible programming problems and errors.

It underlines errors in red and warnings in yellow. It is very useful to cover coding styles issues. 

It allows developers to create their own linting rules. Every rule provided in the ESLint official guide is a standalone rule and a developer at any point can decide whether to use a specific rule or not.
### *Installation :*
Installation of Eslint
```
npm install prettier eslint husky lint-staged --save-dev 
```
Create .prettierrc file and add the following code to do settings (This is prettier file settings): 
```
{ 
"singleQuote": true, 
"semi": true 
} 
```
Initialize ESLint by entering the command below: 
```
npx eslint --init 
```
Once prettier and eslint configured run lint staged: 
```
npx mrm lint-staged
```
Lint errors in a file can disabled by using the below command:
```
/* eslint-disable */ 
```
### *Execution :*
Run the following command to get the lint errors present in the code base. 
```
npm run lint 
```
To fix the lint errors use the following command, 
```
 npm run fix 
```
</details>

<details>
<summary> DevTool Integration for LightHouse </summary>
The following WDIO service help us to automate chrome beyond the webDriver protocol.
```
npm install @wdio/devtools-service --save-dev
```
 It also gives you access to the Chrome DevTools protocol as well as to a Puppeteer instance that you can use to automate Chrome with the [Puppeteer](https://pptr.dev/) automation interface. (Puppeteer is high-level API to control Chrome).
```
browser.enablePerformanceAudits()            //enabling performance audit
let metrics = browser.getMetrics()           //get performance metrics
assert.ok(metrics.speedIndex < 1500)
let score = browser.getPerformanceScore()    //get performance score
assert.ok(score >= .99)
```
service integration in wdio-config
```
services: ['devtools']
```
</details>

<details>
<summary>WDIO Logger Utility </summary>
Groot has its own logger functionality that help us to print the data in console and also add the info in allure reporter.

This command help us to perform logger function
```
export const addLogger = (log: string) => {
allureReporter.addStep(`STEP: ${log}`)
console.log(`STEP: ${log}`)
}
```
</details>

<details>
<summary> Allure Report </summary>
Allure reporter help us to create a report with formatted information and interactive UI.

Installation of allure report with WDIO
```
npm install @wdio/allure-reporter --save-dev
npm i allure-commandline
```
Configure the output directory in your wdio.conf.js file
```
reporters: [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
}]]
```
Command to generate allure report
```
allure generate allure-results --clean && allure open
```
for more information please refer [Test Report](#test-reports)
</details>

<details>
<summary> Spec Report </summary>
A WebdriverIO plugin to report in spec style. This is one of the reporter in WebdriverIO by which we can check Test case execution status whether it is pass, skip or in fail state. 

And it gives user more in-depth and line by line human readable statements of test case execution. 
### *Installation :*
We can install it using the below command
```
npm install wdio-spec-reporter --save-dev 
```
Instructions on how to install Spec Report can be found [here.](https://webdriver.io/docs/spec-reporter)

Following code shows the default wdio test runner configuration.
```
reporters: ['spec']
```
</details>

<details>
<summary>Js Doc</summary>
JSDoc is a markup language used to annotate JavaScript/TypeScript source code files. Using comments containing JSDoc, programmers can add documentation describing the API of the code they're creating. 

It is used for documentation lookup in JavaScript and TypeScript, as well as for type annotations and method return type hints in chained methods.
### *Installation :*
Js docs installation using below comment.
```
npm install --save-dev jsdoc
```
Once JSDoc is installed locally, the JSDoc command-line tool is available in: 
```
./node_modules/.bin. 
```
JSDoc comments should generally be placed immediately before the code being documented. Each comment must start with a /** sequence in order to be recognized by the JSDoc parser. Comments beginning with /** , /***, or more than 3 stars will be ignored.

The JSDoc community has created templates and other tools to help you generate and customize your documentation which can be found in [here.](https://www.npmjs.com/package/jsdoc )
</details>

## **code Examples**
1. WDIO test folder and specs - groot\test\specs
```
login.spec.ts
productCategory.spec.ts
pinCodeChange.spec.ts
```
## **Mocha official website**
https://mochajs.org/
## **Wdio official website**
https://webdriver.io/

# Contributors ✨

Thanks goes to these wonderful peoples :

<table>
  <tr>
    <td align="center"><a href="https://github.com/cpataltmetrik/Groot"><img src="https://i.pinimg.com/originals/4c/52/48/4c524884748a0517cce7c905453a686e.png" style= "border-radius: 20%" width="80px;" alt=""/><br /><sub><b>Altimetrik QA Team</b></sub></a><br /><a href="https://github.com/cpataltmetrik/Groot/graphs/contributors" title="contribution">💻</a></td>
  </tr>
<table>

</body>

</html>