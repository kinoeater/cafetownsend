Feature: creates a new user
#You can select a browser as chrome" or "firefox" by simply entering your choice to properties/config.properties file
#By the help of the Bonigarcia’s webdriver manager, tests will run with the selected browser

  Background:  Successful login with correct credentials

    Given User navigates to login page with "Chrome" browser
     And User enters following credentials for login
      | username | password  | 
      | Luke     | Skywalker | 
     When User clicks on the login

      
  Scenario: Successfully creates a new user
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email               | 
      | Alfred     | Pennyworth | 1933-03-14 | Pennyworth@dark.com | 
     When User clicks on the Add button
     Then User should see "Alfred Pennyworth" in the employees list
      And User deletes "Alfred Pennyworth"    
     # This one deletes newly added employee, so same credentials can be used next time 
      And User logs out
  
