Feature: Todo List

  Scenario: Display two todo items by default
    Given User is in "https://example.cypress.io/todo"
    And User can see 2 todo items by default
