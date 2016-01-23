module.exports = function() {

  this.World = require('../support/world.js').World;

  this.Given(/^I am visiting the home page$/, function(callback) {
    var driver = this.driver;

    driver.get('http://localhost:3000/');

    this.waitFor('#app', callback);
  });
};
