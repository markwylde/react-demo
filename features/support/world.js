import * as se_webdriver from 'selenium-webdriver';
import * as bs_webdriver from 'browserstack-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';

const TEST_BROWSER = process.env.TEST_BROWSER;

let service, driver, webdriver, baseUrl;

if (process.env.TEST_WEBSERVER) {
  baseUrl = 'http://localhost:8080/';
} else {
  baseUrl = 'http://localhost:3000/';
}

webdriver = bs_webdriver;
let bsOptions, testEngine;
switch (TEST_BROWSER) {
  case 'browserstack:IE11:windows':
    bsOptions = {
      browser: 'IE',
      browser_version: '11.0',
      os: 'Windows',
      os_version: '7',
      resolution: '1024x768'
    };
    testEngine = 'browserstack';
    break;

  case 'browserstack:IE10:windows':
    bsOptions = {
      browser: 'IE',
      browser_version: '10.0',
      os: 'Windows',
      os_version: '7',
      resolution: '1024x768'
    };
    testEngine = 'browserstack';
    break;

  case 'browserstack:IE9:windows':
    bsOptions = {
      browser: 'IE',
      browser_version: '9.0',
      os: 'Windows',
      os_version: '7',
      resolution: '1024x768'
    };
    testEngine = 'browserstack';
    break;

  case 'browserstack:chrome:osx':
    bsOptions = {
      browser: 'Chrome',
      browser_version: '47.0',
      os: 'OS X',
      os_version: 'El Capitan',
      resolution: '1024x768'
    };
    testEngine = 'browserstack';
    break;

  case 'browserstack:firefox:osx':
    bsOptions = {
      browser: 'Firefox',
      browser_version: '43.0',
      os: 'OS X',
      os_version: 'El Capitan',
      resolution: '1024x768'
    };
    testEngine = 'browserstack';
    break;

  case 'browserstack:safari9:osx':
    bsOptions = {
      browser: 'Safari',
      browser_version: '9.0',
      os: 'OS X',
      os_version: 'El Capitan',
      resolution: '1024x768'
    };
    testEngine = 'browserstack';
    break;

  case 'browserstack:safari8:osx':
    bsOptions = {
      browser: 'Safari',
      browser_version: '8.0',
      os: 'OS X',
      os_version: 'Yosemite',
      resolution: '1024x768'
    };
    testEngine = 'browserstack';
    break;

  case 'browserstack:ios:iphone':
    bsOptions = {
      browserName: 'iPhone',
      platform: 'MAC',
      device: 'iPhone 6S Plus'
    };
    testEngine = 'browserstack';
    break;

  case 'browserstack:android:galaxy':
    bsOptions = {
      browserName: 'android',
      platform: 'ANDROID',
      device: 'Samsung Galaxy S5'
    };
    testEngine = 'browserstack';
    break;

  default:
    testEngine = 'local';
}

if (testEngine === 'browserstack') {
  const capabilities = {
    ...bsOptions,

    'browserstack.user': process.env.BS_USER,
    'browserstack.key': process.env.BS_KEY,

    'project': 'React Demo',

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
  const defaultTimeout = 30000;

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
