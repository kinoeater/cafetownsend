$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/test1.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality tests",
  "description": "",
  "id": "login-functionality-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#You can select a browser as chrome\" or \"firefox\" by simply entering your choice to properties/config.properties file"
    },
    {
      "line": 3,
      "value": "#By the help of the Bonigarcia’s webdriver manager, tests will run with the selected browser"
    }
  ],
  "line": 5,
  "name": "Successful login with correct credentials",
  "description": "",
  "id": "login-functionality-tests;successful-login-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User navigates to login page with \"Chrome\" browser",
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
formatter.step({
  "line": 12,
  "name": "User should see greeting message",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 35
    }
  ],
  "location": "WebScenarios.user_navigates_to_login_page_with_browser(String)"
});
formatter.result({
  "duration": 6536785600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 220698700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 79845400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_see_greeting_message()"
});
formatter.result({
  "duration": 62383800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 148079900,
  "status": "passed"
});
formatter.after({
  "duration": 665786300,
  "status": "passed"
});
});