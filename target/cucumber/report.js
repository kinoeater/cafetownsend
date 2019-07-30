$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/createFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Create New Employee Data functionality tests",
  "description": "",
  "id": "create-new-employee-data-functionality-tests",
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
  "duration": 6985169300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 203089701,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 111501901,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successfully creates a new user",
  "description": "",
  "id": "create-new-employee-data-functionality-tests;successfully-creates-a-new-user",
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
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 42591399,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 6733058200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 361765599,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 498330000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 5151577399,
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
  "duration": 577853900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 5171869099,
  "status": "passed"
});
formatter.after({
  "duration": 643839199,
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
  "duration": 5592634400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 165743900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 104807000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Missing user name",
  "description": "",
  "id": "create-new-employee-data-functionality-tests;missing-user-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 31
    },
    {
      "cells": [
        "",
        "Pennyworth",
        "1933-03-14",
        "Pennyworth@dark.com"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User should be at home page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 28470200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 5892538400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 326652900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 457712800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 5208439799,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 26790501,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 5190151900,
  "status": "passed"
});
formatter.after({
  "duration": 681428700,
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
  "duration": 5832933801,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 196267299,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 121699300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Missing Last Name",
  "description": "",
  "id": "create-new-employee-data-functionality-tests;missing-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 43
    },
    {
      "cells": [
        "Alfred",
        "Pennyworth",
        "1933-03-14",
        "Pennyworth@dark.com"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User should be at home page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 34990400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 6435719200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 576406100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 507155400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 5174496200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 40959100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 5193684799,
  "status": "passed"
});
formatter.after({
  "duration": 672289700,
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
  "duration": 6364866800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 246093600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 100178301,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Missing Start Date",
  "description": "",
  "id": "create-new-employee-data-functionality-tests;missing-start-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 55
    },
    {
      "cells": [
        "Alfred",
        "Pennyworth",
        "",
        "Pennyworth@dark.com"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User should be at home page",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 26118100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 6605151501,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 650111400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 449039899,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 5210545601,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 31266600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 5169327600,
  "status": "passed"
});
formatter.after({
  "duration": 663394200,
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
  "duration": 6923274601,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 157037499,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 108980599,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Missing Email",
  "description": "",
  "id": "create-new-employee-data-functionality-tests;missing-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 63,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 67
    },
    {
      "cells": [
        "Alfred",
        "Pennyworth",
        "1933-03-14",
        ""
      ],
      "line": 68
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User clicks on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User should be at home page",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 25587501,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 6209877000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 337338999,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 354270600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 5203386900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 26383399,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 5183745299,
  "status": "passed"
});
formatter.after({
  "duration": 664622701,
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
  "duration": 6707386499,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 312754700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 118610701,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Hitting enter key instead of Add button",
  "description": "",
  "id": "create-new-employee-data-functionality-tests;hitting-enter-key-instead-of-add-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "User should be at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User clicks on the Create button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User should be in new user page",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User enters following details for new user",
  "rows": [
    {
      "cells": [
        "First_name",
        "Last_name",
        "Start_date",
        "Email"
      ],
      "line": 79
    },
    {
      "cells": [
        "Honey",
        "Bunny",
        "1994-10-21",
        ""
      ],
      "line": 80
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User hits enter",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "User should see \"Honey Bunny\" in the employees list",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "User logs out",
  "keyword": "And "
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 27510500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 5988153900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 187900001,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 328163401,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_hits_enter()"
});
formatter.result({
  "duration": 53864000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honey Bunny",
      "offset": 17
    }
  ],
  "location": "WebScenarios.user_should_see_something_in_the_employees_list(String)"
});
formatter.result({
  "duration": 21041100,
  "error_message": "org.openqa.selenium.NoSuchElementException: exactRepeater(employee in employees) didn\u0027t have any matching elements at this place in the DOM\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-U9KGDGS\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat com.paulhammant.ngwebdriver.ByAngular$BaseBy.errorIfNull(ByAngular.java:155)\r\n\tat com.paulhammant.ngwebdriver.ByAngular$BaseBy.findElements(ByAngular.java:177)\r\n\tat com.paulhammant.ngwebdriver.ByAngularRepeater.findElements(ByAngularRepeater.java:6)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:307)\r\n\tat stepDefinitions.WebScenarios.user_should_see_something_in_the_employees_list(WebScenarios.java:132)\r\n\tat ✽.Then User should see \"Honey Bunny\" in the employees list(src/test/java/resources/features/createFunctionality.feature:82)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1193748700,
  "status": "passed"
});
});