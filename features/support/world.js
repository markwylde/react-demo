import * as se_webdriver from 'selenium-webdriver';
import * as bs_webdriver from 'browserstack-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';

const TEST_BROWSER = process.env.TEST_BROWSER;

let service, driver, webdriver, baseUrl;

if (process.env.TEST_WEBSERVER) {
  baseUrl = 'http://localhost:8089/';
} else {
  baseUrl = 'http://localhost:3000/';
}

if (TEST_BROWSER === 'browserstack:chrome') {
  webdriver = bs_webdriver;

  const capabilities = {
    'browserstack.user': process.env.BS_USER,
    'browserstack.key': process.env.BS_KEY,

    browserName: 'chrome',

    'browserstack.local': 'true',
    'browserstack.debug': 'true'
  };

  driver = new webdriver.Builder()
    .usingServer('http://hub.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();
} else {
  webdriver = se_webdriver;
  service = new chrome.ServiceBuilder(path).build();
  chrome.setDefaultService(service);

  driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
}

const getDriver = () => driver;
const getWebDriver = () => webdriver;

function World(callback) {
  const defaultTimeout = 20000;

  this.webdriver = webdriver;
  this.driver = driver;
  this.baseUrl = baseUrl;

  this.waitFor = function(cssLocator, callback, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      var res = driver.isElementPresent({ css: cssLocator });
      if (res && callback) callback();
      return res;
    }, waitTimeout);
  };
};

module.exports = function() {
  if (this) {
    this.World = World;
    this.getDriver = getDriver;
    this.getWebDriver = getWebDriver;
  } else {
    return {
      getDriver,
      getWebDriver
    };
  }
};
