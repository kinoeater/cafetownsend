$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createFunctionality.feature");
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
  "duration": 7006188200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 205455200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 117356900,
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
  "duration": 47424900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2824686600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 309555500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 484035900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2172881100,
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
  "duration": 608299600,
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
  "duration": 4710692000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2166720700,
  "status": "passed"
});
formatter.after({
  "duration": 638392100,
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
  "duration": 5680310000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 228791400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 115816400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User leaves the user name area empty while creating new user",
  "description": "",
  "id": "create-new-employee-functionality-tests;user-leaves-the-user-name-area-empty-while-creating-new-user",
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
  "duration": 27902700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2866955100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 302555900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 484252500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2154140700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 15336400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2202829000,
  "status": "passed"
});
formatter.after({
  "duration": 667483200,
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
  "duration": 5751282100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 206151900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 116224100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User leaves the last name area empty while creating new user",
  "description": "",
  "id": "create-new-employee-functionality-tests;user-leaves-the-last-name-area-empty-while-creating-new-user",
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
  "duration": 34228600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2986738100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 339506900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 454064900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2136566200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 11728800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2134508200,
  "status": "passed"
});
formatter.after({
  "duration": 670287500,
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
  "duration": 5631184400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 226701700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 127186100,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User leaves the Start Date area empty while creating new user",
  "description": "",
  "id": "create-new-employee-functionality-tests;user-leaves-the-start-date-area-empty-while-creating-new-user",
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
  "duration": 32226200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2867330300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 302871800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 442388100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2179906800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 24043500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2159276300,
  "status": "passed"
});
formatter.after({
  "duration": 670674300,
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
  "duration": 5575576600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 253035000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 119853800,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "User enters incorrect email format or leaves the email area empty",
  "description": "",
  "id": "create-new-employee-functionality-tests;user-enters-incorrect-email-format-or-leaves-the-email-area-empty",
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
  "duration": 33206600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2765067200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 307513100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 437124200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2158422100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 13815700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2160626700,
  "status": "passed"
});
formatter.after({
  "duration": 674325600,
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
  "duration": 5562153200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 202199000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 114218400,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "User hitting enter key instead of using Add button while creating new user",
  "description": "",
  "id": "create-new-employee-functionality-tests;user-hitting-enter-key-instead-of-using-add-button-while-creating-new-user",
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
  "duration": 33269900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2863715300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 331603900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 426646200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_hits_enter()"
});
formatter.result({
  "duration": 38732500,
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
  "duration": 629339300,
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
  "duration": 2384209300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2188464300,
  "status": "passed"
});
formatter.after({
  "duration": 653074100,
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
  "duration": 5609773300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 189317200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 127311000,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "User enters incorrect date format",
  "description": "",
  "id": "create-new-employee-functionality-tests;user-enters-incorrect-date-format",
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
  "duration": 34131000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2861410000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 316158800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 501868700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2149592500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_see_the_alert_message()"
});
formatter.result({
  "duration": 3018366700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2166029000,
  "status": "passed"
});
formatter.after({
  "duration": 651894500,
  "status": "passed"
});
formatter.uri("loginFunctionality.feature");
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
  "name": "User should be at home page",
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
  "duration": 9919298800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 205112700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 128752200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 33606600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2138035300,
  "status": "passed"
});
formatter.after({
  "duration": 646266800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Unsuccessful login with incorrect username",
  "description": "",
  "id": "login-functionality-tests;unsuccessful-login-with-incorrect-username",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User navigates to login page with \"Chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enters following credentials for login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20
    },
    {
      "cells": [
        "John",
        "Skywalker"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on the login",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should see login error message",
  "keyword": "Then "
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
  "duration": 6731661700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 195666300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 146279000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_see_login_error_message()"
});
formatter.result({
  "duration": 582701600,
  "status": "passed"
});
formatter.after({
  "duration": 660435400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Unsuccessful login with incorrect password",
  "description": "",
  "id": "login-functionality-tests;unsuccessful-login-with-incorrect-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User navigates to login page with \"Chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User enters following credentials for login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29
    },
    {
      "cells": [
        "Luke",
        "Connor"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the login",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User should see login error message",
  "keyword": "Then "
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
  "duration": 5598313300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 215008300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 130605000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_see_login_error_message()"
});
formatter.result({
  "duration": 583553500,
  "status": "passed"
});
formatter.after({
  "duration": 647975000,
  "status": "passed"
});
formatter.uri("test.feature");
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
  "duration": 5907620300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 190105400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 125131900,
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
  "duration": 46815300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2775707200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 311107900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 454680300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2154071300,
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
  "duration": 592155400,
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
  "duration": 6753095100,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d75.0.3770.142)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-U9KGDGS\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.8 (681f24ea911fe7..., userDataDir: C:\\Users\\musta\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50957}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8931e90c73872fd413031be274240bb8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat stepDefinitions.WebScenarios.user_deletes_something(WebScenarios.java:191)\r\n\tat ✽.And User deletes \"Alfred Pennyworth\"(test.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1279318200,
  "status": "passed"
});
formatter.uri("test1.feature");
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
  "name": "User should be at home page",
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
  "duration": 4749110800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 232911100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 178867100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 39668300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2134980300,
  "status": "passed"
});
formatter.after({
  "duration": 654858200,
  "status": "passed"
});
});