@ignore
Feature: Basic Get Call

  Background:
    * def expectedOutput = read('../json/all.json')

  Scenario: basic get call 2
    Given url 'https://reqres.in/api/users/2'
    And method GET
    Then status 200
    Then print response
    And match response == expectedOutput[0]

  Scenario: basic get call 3
    Given url 'https://reqres.in/api/users/3'
    And method GET
    Then status 200
    Then print response
    And match response == expectedOutput[1]