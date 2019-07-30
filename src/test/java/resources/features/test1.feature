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
  

  