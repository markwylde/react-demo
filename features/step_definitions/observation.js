var expect = require('chai').expect;

module.exports = function() {

  this.World = require('../support/world.js').World;

  this.Given(/^I should see the total amount of my bill$/, function(callback) {
    var driver = this.driver;
    var by = this.webdriver.By;

    driver.findElement(by.css('.bill-total')).then(function(element) {
      element.getAttribute('textContent').then(function(val) {
        expect(val).to.equal('£130.10');
        callback();
      });
    });

  });
};
