# Page Object and Cucumber hybrid Framework 


# CAFETOWNSEND WEB APPLICATION QA TEST PLAN:
## I. Introduction
This serves as the plan for testing all software artifacts as well as the reporting of test results.
## II. Test Plan
Black box test cases you will run on your code.

### Login functionality tests:

a) Verify that user can successfully login with correct credentials.

b) Verify that user cannot login with incorrect user name.

c) Verify that user cannot login with incorrect password.

d) Verify that user cannot login with empty email

e) Verify that user cannot login with empty password

f) Verify that user cannot login with empty email and empty password

### Create new employee functionality tests:
a)	Verify that user can successfully creates a new user then deletes it.

Gherkin format:

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
