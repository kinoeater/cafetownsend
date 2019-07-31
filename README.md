# Page Object and Cucumber hybrid Framework 

#### Similar information with pictures can also be reached on QA_task_READ_ME_1.PNG and QA_task_READ_ME_2.PNG files under root directory.

## TEST CASES  


### 1. Registering new customer tests

a) Verify that user can successfully register with suitable credentials.

b) Verify that user cannot register when entering very short password.

c) Verify that user cannot register when password and repeating password do not match.

d) Verify that user cannot register when trying to use an invalid e-mail format.


### 2.  Verify that user can confirm registiration via email.


### 3. Login functionality tests

a) Verify that user can successfully login with correct credentials.

b) Verify that user cannot login with incorrect email

c) Verify that user cannot login with incorrect password

d) Verify that user cannot login with empty email

e) Verify that user cannot login with empty password

f) Verify that user cannot login with empty email and empty password


### 4. Search travel functionality tests

a) Verify that user can successfully login with correct credentials, then navigates to

   travel search page, fills the search criterias, then gets at least one search result
   
   
## CUCUMBER FRAMEWORK DESIGN
   
   
1. You can choose firefox or chrome by adding from config file. Code can be modified by the help of Bonigarcia’s webdriver manager if it is required to use different browsers.  
2. Each Page Object has its specific web elements and methods in it.
3. Base Page has some specific easy to use methods. More methods can be added if required. It is like a toolbox of the framework, use the gadgets, add new gadgets when you find.
   
## REPORTING
   
 1. I used Cucumber Extent Report as reporting tool.  
 2. After each test run latest test report can be seen with "report.html" name under /output directory. 
 3. Report can be opened simply double clicking on the  item.
 
## RUNNING THE TESTS
 
 ### 1. By directly using runner class

a) You should open / choose one of the runner classes under 
   /check_24_Framework/src/test/java/runners

b) Then you should right click on the page or on the class,

c) Then you should click on TestNG option.

### 2. By using "mvn test" command on CLI

a) You go to root directory of the maven project from command line (CMD / terminal)
b) Then type followings

> mvn test

c) Then hit enter
