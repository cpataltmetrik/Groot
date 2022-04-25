# webdriveriowithtypescript
This repository contains webdriverIO configuration with typescript and mocha

## Getting Started
1. Ensure that Node.js 10+ is installed
   https://nodejs.org/en/download/

2. Clone this repo locally and install the dependencies

```
    $ git clone https://github.com/cpataltmetrik/webdriveriowithtypescript.git
    $ cd webdriveriowithtypescript
    $ npm install
```
## Running Tests
>  Based on the NODE_ENV, an appropriate environment config file will be loaded
 ```
1. To run a single test case

     SET NODE_ENV=dev&& npx wdio .\config-wdio\wdio.local.conf.ts --spec <path to test case>

     EX: SET NODE_ENV=dev&& npx wdio .\config-wdio\wdio.local.conf.ts --spec test\specs\forgotPassword.spec.ts

 2. How to run multiple test cases based on the environment or based on tags

     npm run test-dev   -> to run all test cases for Dev env
     npm run test-dev-smoke  -> to run only Smoke tests
     npm run test-dev-sanity  -> to run only Sanity tests

 ```
> Note: Refer to package.json to know more scripts

 ## Understanding the Folder structure
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
 ## Test Reports
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
## Naming conventions :
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



Branch name conventions= :

	feature/test_scenario_name
	all words of 'test_scenario_name' will be in lowercase, separated by underscore (_)
	>> EX:- feature/product_category


constants :

	constants will be written in capital letters (UPPERCASE)
	if constants have words more than one, then separate words by underscore (_)
	>> example:- const DAYS_UNTIL_TOMORROW = 1;