module.exports = function() {

  this.World = require('../support/world.js').World;

  this.Given(/^I am an existing customer with packages$/, function(callback) {
    callback();
  });
};
