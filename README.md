# Automating an Angular Web Page by in Page Object and Cucumber hybrid Framework by the help of ngWebDriver


## CAFETOWNSEND WEB APPLICATION QA TEST PLAN:

## I. Introduction

This document mainly serves as the plan for testing all software artifacts as well as the reporting of test results. 

## II. Automation Framework 

At first I was thinking to automate the test cases by using protractor. Although I had some experience on that tool which is a god fit for angular apps, I aşso want to benefit from page objects metodology and  Cucumber framework. That was the point I came up to use NGWebDriver. It is a small open source library of WebDriver locators and more for AngularJS (v1.x) and Angular (v2.x +), for Java. 
It works with Firefox, Chrome and all the other Selenium-WebDriver browsers.

https://github.com/paul-hammant/ngWebDriver


## III. Manual Test Cases 
Black box manual test cases that will run on the code. Rather creating all of the test cases I wrote down the the test cases for login and create new user functionalities.

The URL: http://cafetownsend-angular-rails.herokuapp.com

### Login functionality tests:

a) Verify that user can successfully login with correct credentials.

b) Verify that user cannot login with incorrect user name.

c) Verify that user cannot login with incorrect password.

d) Verify that user cannot login with empty email

e) Verify that user cannot login with empty password

f) Verify that user cannot login with empty email and empty password

### Create new employee functionality tests:
a)	Verify that user can successfully creates a new user by entering whole credentials correctly, then deletes newly created user entry.

## Gherkin format:

  ### Scenario: Successfully creates a new user then deletes it  
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
     
   
b) Verify that User leaves the first name area empty, then cannot create the new user entry.

c) Verify that User leaves the last name area empty, then cannot create the new user entry.

d) Verify that User leaves the start date area empty, then cannot create the new user entry.

d) Verify that User leaves the email area empty or enters email without ' @ ' sign, then cannot create the new user entry.

e) Verify that User enters whole credentials correctly, then hits "enter key" on keyboard instead of using Add button, then successfully creates a new user.

f) Verify that User enters incorrect date format, then presented with an alert and cannot create the new user entry.


