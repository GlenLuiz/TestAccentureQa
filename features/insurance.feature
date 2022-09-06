Feature: Vehicle insurance
  Scenario: Quote vehicle insurance form
    Given I am on the Tricentis insurance app
    When I filled in all form steps
    And press Send
    Then will be displayed a message containing "Sending e-mail success!"