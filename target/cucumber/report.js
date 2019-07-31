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
  "duration": 6728599900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 180585200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 112633300,
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
  "duration": 35569600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2726561500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 291591200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 395813600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2168058400,
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
  "duration": 1315279300,
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
  "duration": 4569117500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2197416900,
  "status": "passed"
});
formatter.after({
  "duration": 639023000,
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
  "duration": 5746357500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 222414000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 122854900,
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
  "duration": 31574100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2863613800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 298475700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 375775500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2183744200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 11431800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2187226700,
  "status": "passed"
});
formatter.after({
  "duration": 671410000,
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
  "duration": 5497436500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 150939300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 110837700,
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
  "duration": 27635100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2899524600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 310870700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 394296400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2150477500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 10796400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2150044600,
  "status": "passed"
});
formatter.after({
  "duration": 659097900,
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
  "duration": 6678827700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 215391900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 109232700,
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
  "duration": 27340700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2910984200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 305860500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 360496300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2154571200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 11322000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2156842600,
  "status": "passed"
});
formatter.after({
  "duration": 696796800,
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
  "duration": 5634597200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 232713200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 116930700,
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
  "duration": 32453000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2857805400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 302879700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 417256000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2184648600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_still_be_at_new_user_page()"
});
formatter.result({
  "duration": 12427000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2201887100,
  "status": "passed"
});
formatter.after({
  "duration": 693635500,
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
  "duration": 5879585900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 190874200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 109758200,
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
  "duration": 35583300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2859144900,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 316645800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 440253200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_hits_enter()"
});
formatter.result({
  "duration": 37085900,
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
  "duration": 629065600,
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
  "duration": 2356955000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2193436600,
  "status": "passed"
});
formatter.after({
  "duration": 679567600,
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
  "duration": 6157835500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 254891100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 115727700,
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
  "duration": 31440300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2873420000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 303975600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 502705200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2136336500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_see_the_alert_message()"
});
formatter.result({
  "duration": 3018099600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2207754900,
  "status": "passed"
});
formatter.after({
  "duration": 668901500,
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
  "duration": 5636616100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 252216000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 123507000,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 31985500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2136953600,
  "status": "passed"
});
formatter.after({
  "duration": 683192400,
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
  "duration": 6096235600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 280787800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 107296500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_see_login_error_message()"
});
formatter.result({
  "duration": 578887600,
  "status": "passed"
});
formatter.after({
  "duration": 674586200,
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
  "duration": 5663216100,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 226991600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 113702500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_see_login_error_message()"
});
formatter.result({
  "duration": 537694200,
  "status": "passed"
});
formatter.after({
  "duration": 672136200,
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
  "duration": 5597769300,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 204455600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 111138500,
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
  "duration": 32187400,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_create_button()"
});
formatter.result({
  "duration": 2906443600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_in_new_user_page()"
});
formatter.result({
  "duration": 305529700,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_details_for_new_user(DataTable)"
});
formatter.result({
  "duration": 457402600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_add_button()"
});
formatter.result({
  "duration": 2137083700,
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
  "duration": 589846600,
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
  "duration": 6762673500,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d75.0.3770.142)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-U9KGDGS\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.8 (681f24ea911fe7..., userDataDir: C:\\Users\\musta\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64889}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 269cc715236e504729d7b947184bcc36\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat stepDefinitions.WebScenarios.user_deletes_something(WebScenarios.java:191)\r\n\tat ✽.And User deletes \"Alfred Pennyworth\"(test.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1186059600,
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
  "duration": 5623799200,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_enters_following_credentials_for_login(DataTable)"
});
formatter.result({
  "duration": 233792800,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_clicks_on_the_login()"
});
formatter.result({
  "duration": 108101600,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_should_be_at_home_page()"
});
formatter.result({
  "duration": 30791500,
  "status": "passed"
});
formatter.match({
  "location": "WebScenarios.user_logs_out()"
});
formatter.result({
  "duration": 2180011400,
  "status": "passed"
});
formatter.after({
  "duration": 685275100,
  "status": "passed"
});
});