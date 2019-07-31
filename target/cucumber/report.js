$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/test.feature");
formatter.feature({
  "line": 1,
  "name": "creates a new user",
  "description": "",
  "id": "creates-a-new-user",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#You can select a browser as chrome\" or \"Firefox\" by simply entering your choice to properties/config.properties file"
    },
    {
      "line": 3,
      "value": "#By the help of the Bonigarcia’s webdriver manager, tests will run with the selected browser"
    }
  ],
  "line": 5,
  "name": "Successful login with correct credentials",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User navigates to login page with \"Firefox\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters following credentials for login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "Luke",
        "Skywalker"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the login",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 35
    }
  ],
  "location": "WebScenarios.user_navigates_to_login_page_with_browser(String)"
});
formatter.result({
  "duration": 1693042500,
  "error_message": "java.lang.NullPointerException\r\n\tat utils.DriverFactory.getDriver(DriverFactory.java:51)\r\n\tat pageObjects.Page_Objects.goToLoginPage(Page_Objects.java:45)\r\n\tat stepDefinitions.WebScenarios.user_navigates_to_login_page_with_browser(WebScenarios.java:39)\r\n\tat ✽.Given User navigates to login page with \"Firefox\" browser(src/test/java/resources/features/test.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Successfully creates a new user",
  "description": "",
  "id": "creates-a-new-user;successfully-creates-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 20
    },
    {
      "cells": [
        "Alfred",
        "Pennyworth",
        "1933-03-14",
        "Pennyworth@dark.com"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should see \"Alfred Pennyworth\" in the employees list",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User deletes \"Alfred Pennyworth\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "# This one deletes newly added employee, so same credentials can be used next time"
    }
  ],
  "line": 26,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfred Pennyworth",
      "offset": 17
    }
  ],
  "location": "WebScenarios.user_should_see_something_in_the_employees_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfred Pennyworth",
      "offset": 14
    }
  ],
  "location": "WebScenarios.user_deletes_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 60700,
  "status": "passed"
});
});