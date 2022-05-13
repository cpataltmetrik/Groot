var defaults = require("./base.conf").config;
var _ = require("lodash");
import * as configVal from "config";
const BASEURL = configVal.get("Environment.baseUrl");
const DRIVERS = { chrome: { version: '87.0.4280.20' } }

var overrides = {
  baseUrl: BASEURL,
  runner: "local",
  logLevel: "error",

  services: [['selenium-standalone', { args: { DRIVERS }, installArgs: { DRIVERS } }]],

  capabilities: [
    {
      "goog:maxInstances": 5,
      browserName: "chrome",
    },
  ],
};

exports.config = _.defaultsDeep(overrides, defaults);

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
