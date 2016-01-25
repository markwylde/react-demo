import { expect } from 'chai';

module.exports = function() {

  this.Then(/^I should see the total amount of my bill$/, async function() {
    const { By } = this.webdriver;

    const element = this.driver.findElement(By.css('.bill-total'));
    const value = await element.getAttribute('textContent');
    expect(value).to.equal('£130.10');
  });

  this.Then(/^I should see (\d+) subscriptions$/, async function(amount) {
    const { By } = this.webdriver;

    const elements = await this.driver.findElements(By.css('.subscription > div'));
    expect(elements.length).to.equal(parseInt(amount, 0));
  });

  this.Then(/^I should see (\d+) (purchases|charges)$/, async function(amount, type) {
    const { By } = this.webdriver;

    const elements = await this.driver.findElements(By.css('.' + type + ' tbody tr'));
    expect(elements.length).to.equal(parseInt(amount, 0));
  });

};
