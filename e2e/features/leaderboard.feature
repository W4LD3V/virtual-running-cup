Feature: Weekly leaderboard
  Scenario: View the weekly leaderboard
    Given I open the home page
    Then I see "Weekly Leaderboard"
    And I see places "1", "2", "3"
    And I see athlete name "Asta"
