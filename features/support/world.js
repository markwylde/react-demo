var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

var getDriver = function() {
  return driver;
};

var World = function World(callback) {

  var defaultTimeout = 5000;

  this.webdriver = webdriver;
  this.driver = driver;

  this.waitFor = function(cssLocator, callback, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      var res = driver.isElementPresent({ css: cssLocator });
      if (res && callback) callback();
      return res;
    }, waitTimeout);
  };

  this.quit = function(callback) {
    driver.quit().then(function() {
      callback();
    });
  };

};

module.exports.World = World;
module.exports.getDriver = getDriver;
