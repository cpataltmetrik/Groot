var defaults = require("./base.conf").config;
var _ = require("lodash");
import * as configVal from "config";
const BASEURL = configVal.get("Environment.baseUrl");
const BROWSER = process.env.BROWSER||'chrome';
let DRIVERS;
let browserName;
if (BROWSER.toLowerCase() === "chrome") {
  (browserName = "chrome"), (DRIVERS = { chrome: { version: "87.0.4280.20" } });
} else if (BROWSER.toLowerCase() === "edge") {
  (browserName = "MicrosoftEdge"),
    (DRIVERS = { chromiumedge: { version: "85.0.564.70" } });
} else if (BROWSER.toLowerCase() === "ff") {
  (browserName = "firefox"), (DRIVERS = { firefox: { version: "0.29.1" } });
}
var overrides = {
  baseUrl: BASEURL,
  runner: "local",
  logLevel: "error",

  services: [
    ['selenium-standalone', { args: { DRIVERS }, installArgs: { DRIVERS } }],
  ],

  capabilities: [
    {
      browserName: browserName,
    },
  ],
};

exports.config = _.defaultsDeep(overrides, defaults);

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
