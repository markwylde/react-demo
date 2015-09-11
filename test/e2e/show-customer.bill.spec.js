/* globals browser, expect, $, by */

describe('show customer bill', function() {

  it('should display the dropdown menu on click', function() {
    browser.get('/');

    waitForElementToBeVisible(by.css('.navbar'))
      .then(function() {
        $('.navbar-nav .dropdown a').click();
        expect($('.dropdown-menu').isDisplayed()).toBeTruthy();
      });
  });

  it('should show three packages', function() {
    browser.get('/');

    waitForElementToBeVisible(by.css('.subscription'))
      .then(function() {
        browser.findElements(by.css('.subscription > div')).then(function(elems) {
          expect(elems.length).toEqual(3);
        });
      });
  });

  it('should show three purchases', function() {
    browser.get('/');

    waitForElementToBeVisible(by.css('.purchases'))
      .then(function() {
        browser.findElements(by.css('.purchases tbody tr')).then(function(elems) {
          expect(elems.length).toEqual(3);
        });
      });
  });

  it('should show twenty eight call charges', function() {
    browser.get('/');

    waitForElementToBeVisible(by.css('.charges'))
      .then(function() {
        browser.findElements(by.css('.charges tbody tr')).then(function(elems) {
          expect(elems.length).toEqual(28);
        });
      });
  });

});

function waitForElementToBeVisible(selector) {
  return browser.wait(function() {
    return browser.isElementPresent(selector);
  }, 5000);
}
