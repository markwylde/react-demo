import http from 'http';
import world from './world.js';

let webServer;

function hooks() {
  this.registerHandler('BeforeFeatures', function(event, callback) {
    if (process.env.TEST_WEBSERVER) {
      console.log('Starting local test server');
      startLocalWebServer();
    }

    callback();
  });

  this.registerHandler('AfterFeatures', function(event, callback) {
    world().getDriver().quit().then(callback);
  });

};

function startLocalWebServer() {
  let finalhandler = require('finalhandler');
  let serveStatic = require('serve-static');

  let serve = serveStatic(process.env.TEST_WEBSERVER);

  webServer = http.createServer(function(req, res) {
    let done = finalhandler(req, res);
    serve(req, res, done);
  });

  webServer.listen(8080);
}

module.exports = hooks;
