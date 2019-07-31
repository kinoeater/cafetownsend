$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/createFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Create New Employee functionality tests",
  "description": "",
  "id": "create-new-employee-functionality-tests",
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
  "duration": 6490878600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 164767100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 116540800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successfully creates a new user then deletes it",
  "description": "",
  "id": "create-new-employee-functionality-tests;successfully-creates-a-new-user-then-deletes-it",
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
        "Alfred",
        "Pennyworth",
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
  "name": "User deletes \"Alfred Pennyworth\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "# This one deletes newly added employee, so same credentials can be used next time"
    }
  ],
  "line": 25,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 34372300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2763331700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 294356900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 465057600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2163800000,
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
  "duration": 608491800,
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
  "duration": 2418612100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2183213300,
  "status": "passed"
});
formatter.after({
  "duration": 649341800,
  "status": "passed"
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
  "duration": 5602518900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 259253800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 108046800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Missing user name",
  "description": "",
  "id": "create-new-employee-functionality-tests;missing-user-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 33
    },
    {
      "cells": [
        "",
        "Pennyworth",
        "1933-03-14",
        "Pennyworth@dark.com"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User should still be at new user page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 26335600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2817753400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 300654000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 382428100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2153971900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 13532000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2150708800,
  "status": "passed"
});
formatter.after({
  "duration": 705954500,
  "status": "passed"
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
  "duration": 5675417300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 246817200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 120608200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Missing Last Name",
  "description": "",
  "id": "create-new-employee-functionality-tests;missing-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 45
    },
    {
      "cells": [
        "Alfred",
        "Pennyworth",
        "1933-03-14",
        "Pennyworth@dark.com"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User should still be at new user page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 34015200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2880273000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 302565200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 483724700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2137690800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 11693900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2181981500,
  "status": "passed"
});
formatter.after({
  "duration": 709093100,
  "status": "passed"
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
  "duration": 6733082600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 159242600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 107689500,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Missing Start Date",
  "description": "",
  "id": "create-new-employee-functionality-tests;missing-start-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 57
    },
    {
      "cells": [
        "Alfred",
        "Pennyworth",
        "",
        "Pennyworth@dark.com"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User should still be at new user page",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 27499200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2874932600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 284039300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 361609300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2198046100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 12907500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2183696500,
  "status": "passed"
});
formatter.after({
  "duration": 676006100,
  "status": "passed"
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
  "duration": 5577705400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 208513400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 103491600,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Missing Email or incorrect email format",
  "description": "",
  "id": "create-new-employee-functionality-tests;missing-email-or-incorrect-email-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 69
    },
    {
      "cells": [
        "Alfred",
        "Pennyworth",
        "1933-03-14",
        "2333"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "User should still be at new user page",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 28764400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2933012700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 300025800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 339286900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2153818900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 12965600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2164827100,
  "status": "passed"
});
formatter.after({
  "duration": 700183400,
  "status": "passed"
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
  "duration": 5708228300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 212241900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 111059800,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Hitting enter key instead of Add button",
  "description": "",
  "id": "create-new-employee-functionality-tests;hitting-enter-key-instead-of-add-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 77,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 81
    },
    {
      "cells": [
        "ttt",
        "uuuu",
        "1994-10-21",
        "pulpfiction@gmail.com"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User hits enter",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "User should see \"ttt uuuu\" in the employees list",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "User deletes \"ttt uuuu\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 86,
      "value": "# This one deletes newly added employee, so same credentials can be used next time"
    }
  ],
  "line": 87,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 31319900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2766606200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 316528400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 466949100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_hits_enter()"
});
formatter.result({
  "duration": 40008000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ttt uuuu",
      "offset": 17
    }
  ],
  "location": "WebScenarios.user_should_see_something_in_the_employees_list(String)"
});
formatter.result({
  "duration": 608016200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ttt uuuu",
      "offset": 14
    }
  ],
  "location": "WebScenarios.user_deletes_something(String)"
});
formatter.result({
  "duration": 2299807300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2186892400,
  "status": "passed"
});
formatter.after({
  "duration": 659493400,
  "status": "passed"
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
  "duration": 5967070700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 257529400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 94185900,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Using incorrect date format",
  "description": "",
  "id": "create-new-employee-functionality-tests;using-incorrect-date-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 95
    },
    {
      "cells": [
        "Andy",
        "Dufresne",
        "94-19-21",
        "pulpfiction@gmail.com"
      ],
      "line": 96
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "User should see the alert message",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 26780800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2872371400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 305819300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 484353600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2140918200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_see_the_alert_message()"
});
formatter.result({
  "duration": 3018330900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2189483800,
  "status": "passed"
});
formatter.after({
  "duration": 649138800,
  "status": "passed"
});
});