import steps from '../support/asygen';

const { when } = module.exports = steps();

when(/^I am visiting the home page$/, function *() {
  this.driver.get(this.baseUrl);
  yield this.waitFor('.bill-page');
});
