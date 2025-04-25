Feature: Login Feature

Scenario: Successful login with valid credentials
Given the user is on login page
When the user enter valid username and password
And the user clicks on the login button
Then the user is logged in succesfully
  