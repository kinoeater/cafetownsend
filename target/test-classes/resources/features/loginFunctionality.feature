Feature: Login functionality tests
#You can select a browser as chrome" or "firefox" by simply entering your choice to properties/config.properties file
#By the help of the Bonigarcia’s webdriver manager, tests will run with the selected browser

  Scenario: Successful login with correct credentials

    Given User navigates to login page with "Chrome" browser
     And User enters following credentials for login
      | username | password  | 
      | Luke     | Skywalker | 
     When User clicks on the login
      Then User should be at home page
     And User logs out
  
  
  Scenario: Unsuccessful login with incorrect username
  
    Given User navigates to login page with "Chrome" browser
      And User enters following credentials for login
      | username | password  | 
      | John     | Skywalker | 
     When User clicks on the login
     Then User should see login error message 
  
  Scenario: Unsuccessful login with incorrect password
  
    Given User navigates to login page with "Chrome" browser
      And User enters following credentials for login
      | username | password | 
      | Luke     | Connor   | 
     When User clicks on the login
     Then User should still be in login page 
     
  Scenario: Unsuccessful login with empty username
  
    Given User navigates to login page with "Chrome" browser
      And User enters following credentials for login
      | username | password | 
      |          | Connor   | 
     When User clicks on the login
     Then User should still be in login page     
     

  Scenario: Unsuccessful login with empty password
  
    Given User navigates to login page with "Chrome" browser
      And User enters following credentials for login
      | username | password | 
      | Luke     |          | 
     When User clicks on the login
     Then User should still be in login page     
     
  Scenario: Unsuccessful login with empty user name and  password
  
    Given User navigates to login page with "Chrome" browser
      And User enters following credentials for login
      | username | password | 
      | Luke     |          | 
     When User clicks on the login
     Then User should still be in login page     
     
