var defaults = require("./base.conf").config;
var _ = require("lodash");
import * as configVal from "config";
const baseURL = configVal.get("Environment.baseUrl");

var overrides = {
  baseUrl: baseURL,
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  runner: "local",

  logLevel: "info",
  maxInstances: 1,

  capabilities: [
    {
      browserName: "firefox",
      browserVersion: "99.0",
      "selenoid:options": {
        enableVNC: true,
        enableVideo: false,
      },
    },
  ],
};

exports.config = _.defaultsDeep(overrides, defaults);

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
