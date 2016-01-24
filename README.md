React with Redux Demo
==================
This is an example of building a React application using a Redux store. The app is fully tested, showing how to use Mocha for unit tests and CasperJS for end to end testing.

[![Build Status](https://travis-ci.org/markwylde/react-demo.svg?branch=master)](https://travis-ci.org/markwylde/react-demo)
[![Coverage Status](https://coveralls.io/repos/markwylde/react-demo/badge.svg?branch=master&service=github)](https://coveralls.io/github/markwylde/react-demo?branch=master)
[![bitHound Score](https://www.bithound.io/github/markwylde/react-demo/badges/score.svg)](https://www.bithound.io/github/markwylde/react-demo)
[![Dependancies Check](https://david-dm.org/markwylde/react-demo.svg)](https://david-dm.org/markwylde/react-demo)
[![Node.js](https://img.shields.io/badge/node.js-4-lightgrey.svg)](https://nodejs.org/)
[![BrowserStack](https://img.shields.io/badge/browserStack-auto-lightgrey.svg)](https://browserstack.com/)
[![MIT License](http://imgh.us/license-mit.svg)](https://opensource.org/licenses/MIT)

-------------

### Screenshot
![screenshot of react-demo](http://i.imgur.com/U4WJsRW.png)

### <i class="icon-file"></i> Installation

**Installation instructions:**
- Clone this git repository locally and navigate to the folder in your console.
- Install the node dependancies by running `npm install`
- Launch the application in dev mode by running `npm run dev`

**Deployment:**
- Check your code passes all unit tests by running `npm run unit_tests`
- Check your code is well structured and formatted to the correct standards `npm run lint`
- Run `npm run build` to compile the source into *./dist*.
- Check your code passes all end to end tests `npm run e2e_tests`

##Testing:#
###Feature Tests##
The feature test runner comes with the ability to start a local webserver. When running the tests 
locally you wil probably want to test the already running webpack-dev-server. So that is the 
default behaviour of feature_tests.
- If you would like to feature test the build (`dist`) directory you can add the `TEST_WEBSERVER` 
environment variable:
```bash
TEST_WEBSERVER="dist" npm run feature_tests
```
####Locally####
- To run the feature tests locally just run
```bash
npm run feature_tests
```

####BrowserStack####
> Make sure you have the [BrowserStackLocal](https://www.browserstack.com/local-testing#command-line) service running

- To run the feature tests on browser stack run the following
```bash
TEST_BROWSER="browserstack:chrome" BS_USER="???" BS_KEY="???" npm run feature_tests
```
