var defaults = require("./base.conf").config;
var _ = require("lodash");
import * as configVal from 'config'
const baseURL = configVal.get('Environment.baseUrl');

var overrides = {

    baseUrl: baseURL,
    services: ['devtools'],
    runner: 'local',
    logLevel: 'info',

    capabilities: [{
        'goog:maxInstances': 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

}

exports.config = _.defaultsDeep(overrides, defaults);

exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
