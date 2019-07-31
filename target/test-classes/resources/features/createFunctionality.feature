Feature: Create New Employee functionality tests
#You can select a browser as "Chrome" or "Firefox" by simply
# entering your choice to properties/config.properties file
#By the help of the Bonigarcia’s webdriver manager, tests will 
#run with the selected browser

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
  
  Scenario: User leaves the user name area empty while creating new user
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email               | 
      |            | Pennyworth | 1933-03-14 | Pennyworth@dark.com | 
     When User clicks on the Add button
     Then User should still be at new user page
      And User logs out
  
  Scenario: User leaves the last name area empty while creating new user
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email               | 
      | Alfred     | Pennyworth | 1933-03-14 | Pennyworth@dark.com | 
     When User clicks on the Add button
     Then User should still be at new user page
      And User logs out
  
  Scenario: User leaves the Start Date area empty while creating new user
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email               | 
      | Alfred     | Pennyworth |            | Pennyworth@dark.com | 
     When User clicks on the Add button
     Then User should still be at new user page
      And User logs out
  
  Scenario: User enters incorrect email format or leaves the email area empty 
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name  | Start_date | Email | 
      | Alfred     | Pennyworth | 1933-03-14 | 2333  | 
     When User clicks on the Add button
     Then User should still be at new user page
      And User logs out    
  
  Scenario: User hitting enter key instead of using Add button while creating new user
  
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
      
  Scenario: User enters incorrect date format
  
    Given User should be at home page
      And User clicks on the Create button
      And User should be in new user page
      And User enters following details for new user
      | First_name | Last_name | Start_date | Email						 | 
      | Andy       | Dufresne      | 94-19-21 |  pulpfiction@gmail.com     | 
     When User clicks on the Add button
     Then User should see the alert message
      And User logs out
