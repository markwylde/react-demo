Feature: Customer Bill
  As a customer
  I want to see my bill
  So I know how much I need to pay

  Scenario: Explaining my packages
    Given I am an existing customer with packages
    When I am visiting the home page
    Then I should see the total amount of my bill
     And I should see 3 subscriptions
     And I should see 3 purchases
     And I should see 28 charges
