import { expect } from 'chai';
import steps from '../support/asygen';

const { then } = module.exports = steps();

then(/^I should see the total amount of my bill$/, function *() {
  const { By } = this.webdriver;

  const element = yield this.driver.findElement(By.css('.bill-total'));
  const value = yield element.getAttribute('textContent');
  expect(value).to.equal('£130.10');
});

then(/^I should see (\d+) subscriptions$/, async function(amount) {
  const { By } = this.webdriver;

  const elements = await this.driver.findElements(By.css('.subscription > div'));
  expect(elements.length).to.equal(parseInt(amount, 0));
});

then(/^I should see (\d+) (purchases|charges)$/, async function(amount, type) {
  const { By } = this.webdriver;

  const elements = await this.driver.findElements(By.css('.' + type + ' tbody tr'));
  expect(elements.length).to.equal(parseInt(amount, 0));
});
