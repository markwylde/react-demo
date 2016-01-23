React with Flux Demo
==================
This is an example of building a React application using the Flux architecture. The app is fully tested, showing how to use Mocha for unit tests and CasperJS for end to end testing.

[![Build Status](https://travis-ci.org/markwylde/react-demo.svg?branch=master)](https://travis-ci.org/markwylde/react-demo)
[![Coverage Status](https://coveralls.io/repos/markwylde/react-demo/badge.svg?branch=master&service=github)](https://coveralls.io/github/markwylde/react-demo?branch=master)
[![bitHound Score](https://www.bithound.io/github/markwylde/react-demo/badges/score.svg)](https://www.bithound.io/github/markwylde/react-demo)
[![Dependancies Check](https://david-dm.org/markwylde/react-demo.svg)](https://david-dm.org/markwylde/react-demo)
[![Node.js](https://img.shields.io/badge/node.js--lightgrey.svg)](https://nodejs.org/)
[![MIT License](http://imgh.us/license-mit.svg)](https://opensource.org/licenses/MIT)

-------------

### Screenshot
![screenshot of react-demo](http://i.imgur.com/ImbXBcS.png)

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

### Known Issues

- E2E tests don't run automatically on Travis as the server needs to be running to make them work. They do run locally so long as you run `npm run dev` first
