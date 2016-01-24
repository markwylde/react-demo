import http from 'http';
import { getDriver } from './world.js';

let webServer;

function hooks() {
  this.registerHandler('BeforeFeatures', function(event, callback) {
    let finalhandler = require('finalhandler');
    let serveStatic = require('serve-static');

    let serve = serveStatic('./dist');

    webServer = http.createServer(function(req, res) {
      let done = finalhandler(req, res);
      serve(req, res, done);
    });

    webServer.listen(8089);

    callback();
  });

  this.registerHandler('AfterFeatures', function(event, callback) {
    getDriver().quit().then(callback);
  });

};

module.exports = hooks;
