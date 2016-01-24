module.exports = function() {

  this.World = require('../support/world.js').World;

  this.Given(/^I am visiting the home page$/, function(callback) {
    var driver = this.driver;

    driver.get(this.baseUrl);

    // setTimeout(function() {
      this.waitFor('.bill-page', callback);
    // }, 60000);
  });
};
