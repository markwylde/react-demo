module.exports = function() {

  this.When(/^I am visiting the home page$/, async function() {
    this.driver.get(this.baseUrl);
    await this.waitFor('.bill-page');
  });

};
