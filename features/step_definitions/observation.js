import { expect } from 'chai';
import steps from '../support/asygen';

const { then } = module.exports = steps();

then(/^I should see the total amount of my bill$/, function *() {
  const { By } = this.webdriver;

  const element = yield this.driver.findElement(By.css('.bill-total'));
  const value = yield element.getAttribute('textContent');
  expect(value).to.equal('£130.10');
});
