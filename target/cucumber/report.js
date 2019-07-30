$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/createFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality tests",
  "description": "",
  "id": "login-functionality-tests",
  "keyword": "Feature"
});
formatter.background({
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
  "type": "background",
  "keyword": "Background"
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
  "duration": 7022028700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 175993399,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 113290800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successfully creates a new user",
  "description": "",
  "id": "login-functionality-tests;successfully-creates-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 19
    },
    {
      "cells": [
        "Mustafa",
        "ttt",
        "1933-03-14",
        "Pennyworth@dark.com"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User should see \"Alfred Pennyworth\" in the employees list",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 35878499,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 5833791701,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 174356500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 388438000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 5171115799,
  "status": "passed"
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
  "duration": 1579617999,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 5201365701,
  "status": "passed"
});
formatter.after({
  "duration": 650873900,
  "status": "passed"
});
});