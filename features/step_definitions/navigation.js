import steps from '../support/asygen';

const { when } = module.exports = steps();

when(/^I am visiting the home page$/, async function() {
  this.driver.get(this.baseUrl);
  await this.waitFor('.bill-page');
});
