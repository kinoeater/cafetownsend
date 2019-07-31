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
  "duration": 8343172400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 105859200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 455105500,
  "status": "passed"
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
  "duration": 64368800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2298914800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 310677500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 297399900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2142323700,
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
  "duration": 500365900,
  "status": "passed"
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
  "duration": 4482996300,
  "error_message": "org.openqa.selenium.NoSuchElementException: cssContainingText(#bDelete.subButtonDelete) didn\u0027t have any matching elements at this place in the DOM\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-U9KGDGS\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat com.paulhammant.ngwebdriver.ByAngular$BaseBy.errorIfNull(ByAngular.java:155)\r\n\tat com.paulhammant.ngwebdriver.ByAngular$BaseBy.findElement(ByAngular.java:166)\r\n\tat com.paulhammant.ngwebdriver.ByAngularCssContainingText.findElement(ByAngularCssContainingText.java:7)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.WebScenarios.user_deletes_something(WebScenarios.java:204)\r\n\tat ✽.And User deletes \"Alfred Pennyworth\"(src/test/java/resources/features/test.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 993833000,
  "status": "passed"
});
});