Feature: Create New Employee functionality tests
#You can select a browser as chrome" or "firefox" by simply entering your choice to properties/config.properties file
#By the help of the Bonigarcia’s webdriver manager, tests will run with the selected browser

  Background: Successful login with correct credentials
  
    Given User navigates to login page with "Chrome" browser
      And User enters following credentials for login
      | username | password  | 
      | Luke     | Skywalker | 
     When User clicks on the login
  
  Scenario: Successfully creates a new user then deletes it
  
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
  
  Scenario: Missing user name
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email               | 
      |            | Pennyworth | 1933-03-14 | Pennyworth@dark.com | 
     When User clicks on the Add button
     Then User should still be at new user page
      And User logs out
  
  Scenario: Missing Last Name
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email               | 
      | Alfred     | Pennyworth | 1933-03-14 | Pennyworth@dark.com | 
     When User clicks on the Add button
     Then User should still be at new user page
      And User logs out
  
  Scenario: Missing Start Date
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email               | 
      | Alfred     | Pennyworth |            | Pennyworth@dark.com | 
     When User clicks on the Add button
     Then User should still be at new user page
      And User logs out
  
  Scenario: Missing Email or incorrect email format
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email | 
      | Alfred     | Pennyworth | 1933-03-14 | 2333  | 
     When User clicks on the Add button
     Then User should still be at new user page
      And User logs out    
  
  Scenario: Hitting enter key instead of Add button
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name | Start_date | Email						 | 
      | ttt        | uuuu      | 1994-10-21 |  pulpfiction@gmail.com     | 
     When User hits enter
     Then User should see "ttt uuuu" in the employees list
     And User deletes "ttt uuuu"           
     # This one deletes newly added employee, so same credentials can be used next time  
      And User logs out
      
  Scenario: Using incorrect date format
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name | Start_date | Email						 | 
      | Andy       | Dufresne      | 94-19-21 |  pulpfiction@gmail.com     | 
     When User clicks on the Add button
     Then User should see the alert message
      And User logs out
