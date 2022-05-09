const customCommands = require("../src/main/helper/pageHelper.ts");
import { addLogger } from "../src/main/utilities/logger";
import * as configVal from "config";
const baseURL = configVal.get("Environment.baseUrl");
const commonUtils = require("../src/main/utilities/commonUtils");
const chalk = require("chalk");
const RerunService = require("wdio-rerun-service");
import fs = require("fs");
import path = require("path");
const { v5: uuidv5 } = require("uuid");

const argv = require("minimist")(process.argv.slice(2));

const rerun_utilities = {
  nonPassingItems: [],
  serviceWorkerId: "",
  rerunDataDir: "./results/rerun",
  rerunScriptPath: "./rerun.sh",
  commandPrefix: "",
  specFile: "",
};

export const config: WebdriverIO.Config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  //
  // =====================
  // ts-node Configurations
  // =====================
  //
  // You can write tests using TypeScript to get autocompletion and type safety.
  // You will need typescript and ts-node installed as devDependencies.
  // WebdriverIO will automatically detect if these dependencies are installed
  // and will compile your config and tests for you.
  // If you need to configure how ts-node runs please use the
  // environment variables for ts-node or use wdio config's autoCompileOpts section.
  //

  autoCompileOpts: {
    autoCompile: true,
    // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
    // for all available options
    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
    // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
    // do please make sure "tsconfig-paths" is installed as dependency
    // tsConfigPathsOpts: {
    //     baseUrl: './'
    // }
  },
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //
  specs: ["./test/specs/**.*.ts"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.441
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 1,
      //
      browserName: "chrome",
      acceptInsecureCerts: true,
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 2,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "http://localhost",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: [
    [
      "selenium-standalone",
      { drivers: { chrome: true, chromiumedge: "latest" } },
    ],
    "screenshots-cleanup",
    [
      RerunService,
      {
        rerunDataDir: rerun_utilities.rerunDataDir,
        rerunScriptPath: rerun_utilities.rerunScriptPath,
        // ignoredTags: ['@known_bug']
        commandPrefix: "VARIABLE=true", //Prefix which will be added to the re-run command that is generated.
      },
    ],
  ],

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "mocha",
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 2,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [
    "spec",

    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    bail: true,
    // retries: 3,
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just after a worker process has exited.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {Number} exitCode 0 - success, 1 - fail
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {Number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {String} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */
  before(capabilities, specs) {
    addLogger(`Env is ${process.env}.toString()`);
    addLogger(`Test is running in ${baseURL}`);

    // Add commands to WebdriverIO
    Object.keys(customCommands).forEach((key) => {
      browser.addCommand(key, customCommands[key], true);
    });

    // Add commands to WebdriverIO
    Object.keys(commonUtils).forEach((key) => {
      browser.addCommand(key, commonUtils[key], true);
    });
    browser.setWindowSize(1920, 1080);
    console.log(`Session Id for session lookup: ${browser.sessionId}`);
    //console.log(`BASE URL: ${browser.options.baseUrl}`)

    rerun_utilities.specFile = specs[0];
    console.log(
      `Re-run service is activated. Data directory: ${rerun_utilities.rerunDataDir}`
    );
    fs.mkdirSync(rerun_utilities.rerunDataDir, { recursive: true });
    // INFO: `namespace` below copied from: https://github.com/kelektiv/node-uuid/blob/master//lib/v35.js#L54:16
    rerun_utilities.serviceWorkerId = uuidv5(
      `${Date.now()}`,
      "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
    );
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) starts.
   */
  beforeTest: function (test, context) {
    addLogger(
      `Test is running in Env : ${process.env.NODE_ENV} & URL : ${baseURL}`
    );
  },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function (test, context) {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function (test, context, { error, result, duration, passed, retries }) {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine only)
   * @param {Object}  test             test object
   * @param {Object}  context          scope object the test was executed with
   * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
   * @param {Any}     result.result    return object of test function
   * @param {Number}  result.duration  duration of test
   * @param {Boolean} result.passed    true if test has passed, otherwise false
   * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
   */
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      browser.saveScreenshot(
        "./screenshot/" +
          test.title +
          "_" +
          commonUtils.generateFileNameWithTimeStamp()
      );
    }
    if (result === "skip") {
      browser.saveScreenshot(
        "./screenshot/" +
          test.title +
          "_" +
          commonUtils.generateFileNameWithTimeStamp()
      );
    }

    if (config.framework !== "cucumber" && !passed) {
      console.log(`Re-run service is inspecting non-passing test.`);
      console.log(`Test location: ${rerun_utilities.specFile}`);
      if (error && error.message) {
        rerun_utilities.nonPassingItems.push({
          location: rerun_utilities.specFile.replaceAll("\\", "/"),
          failure: error.message,
          ErrorStack: error.stack.replaceAll("\\", "/"),
        });
      } else {
        console.log(
          "The non-passing test did not contain any error message, it could not be added for re-run."
        );
      }
    }
  },

  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  after: function (result, capabilities, specs) {
    if (rerun_utilities.nonPassingItems.length > 0) {
      fs.writeFileSync(
        `${
          rerun_utilities.rerunDataDir
        }/rerun-${commonUtils.generateFileNameWithTimeStamp()}.json`,
        JSON.stringify(rerun_utilities.nonPassingItems)
      );
      console.log(
        "ServiceWorkId: ",
        JSON.stringify(rerun_utilities.serviceWorkerId)
      );
    } else {
      console.log(
        "Re-run service did not detect any non-passing scenarios or tests."
      );
    }
  },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: function (exitCode, config, capabilities, results) {
    const directoryPath = path.join(`${rerun_utilities.rerunDataDir}`);
    if (fs.existsSync(directoryPath)) {
      const rerunFiles = fs.readdirSync(directoryPath);
      console.log("In On complete hook");
      console.log("length: ", rerunFiles.length);
      if (rerunFiles.length > 0) {
        let rerunCommand = `DISABLE_RERUN=true node_modules/.bin/wdio ${argv._[0]} `;
        if (rerun_utilities.commandPrefix) {
          rerunCommand = `${rerun_utilities.commandPrefix} ${rerunCommand}`;
          console.log("Rerun Command: ", rerunCommand);
        }
        let failureLocations = [];
        rerunFiles.forEach((file) => {
          const json = JSON.parse(
            fs
              .readFileSync(`${rerun_utilities.rerunDataDir}/${file}`)
              .toString()
          );
          json.forEach((failure) => {
            failureLocations.push(failure.location.replace(/\\/g, "/"));
          });
        });
        const failureLocationsUnique = [...new Set(failureLocations)];
        failureLocationsUnique.forEach((failureLocation) => {
          rerunCommand += ` --spec=${failureLocation}`;
        });
        console.log("RerunCommand: ", rerunCommand);
        fs.writeFileSync(rerun_utilities.rerunScriptPath, rerunCommand);
        console.log(
          `Re-run script has been generated @ ${rerun_utilities.rerunScriptPath}`
        );
      }
    }

    if (results.failed == this.bail) {
      console.log(chalk.red.underline.bold("******* BAILING OUT *******"));
      console.table({
        "Total Executed cases": results.finished,
        "passed cases": results.passed,
        "failed cases": results.failed,
      });
    }
  },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};
