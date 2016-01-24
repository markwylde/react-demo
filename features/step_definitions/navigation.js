module.exports = function() {

  this.World = require('../support/world.js').World;

  this.Given(/^I am visiting the home page$/, function(callback) {
    this.driver.get(this.baseUrl);
    this.waitFor('.bill-page', callback);
  });
};
