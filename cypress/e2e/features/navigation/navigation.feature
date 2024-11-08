Feature: Navigation

  Background:
    Given User vist home page
    And User go to "Navigation" menu
  
  @tag
  Scenario: Go back
    Given User is in "navigation" link path
    When User go back
    Then User is not in "navigation" link path
    When User go forward
    Then User go to "navigation" path

