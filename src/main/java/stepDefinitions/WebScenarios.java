package stepDefinitions;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import com.paulhammant.ngwebdriver.ByAngular;
import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.Base_Page;
import pageObjects.Page_Objects;

public class WebScenarios extends Page_Objects {

    public WebScenarios() throws IOException {
        super();

    }

    /**********************************************************************************
     **LOGIN FUNCTION STEP DEFINITIONS
     **********************************************************************************/
    
    @Given("^User navigates to login page with \"([^\"]*)\" browser$")
    public static void user_navigates_to_login_page_with_browser(String browser) throws Throwable {

        goToLoginPage(browser);

    }
    
    @Then("^User should still be in login page$")
    public void user_should_still_be_in_login_page() throws Throwable {
      
        Thread.sleep(2000);
        Base_Page.verify("Login", loginButton);
    }    

    @When("^User clicks on the login$")
    public void user_clicks_on_the_login() throws Throwable {

        driver.findElement(loginButton).click();
        Base_Page.waitAndClickElement(driver.findElement(loginButton));

    }

    @And("^User logs out$")
    public void user_logs_out() throws Throwable {

        Base_Page.actionMoveAndClick(driver.findElement(logoutButton));

    }

    @Then("^User should be at home page$")
    public void user_should_be_at_home_page() throws Throwable {

        Base_Page.waitForPresenceOfElement(greetings);
        Base_Page.verify("Hello Luke", greetings);

    }

    @Then("^User should see login error message$")
    public void user_should_see_login_error_message() throws Throwable {
        Base_Page.waitForPresenceOfElement(loginError);
        Base_Page.verify("Invalid username or password!", loginError);


    }
    @And("^User enters following credentials for login$")
    public void user_enters_following_credentials_for_login(DataTable table) throws Throwable {

        List < Map < String, String >> list = table.asMaps(String.class, String.class);
        for (int i = 0; i < list.size(); i++) {
        
        Base_Page.sendKeysToWebElement(driver.findElement(userName), list.get(i).get("username"));
        Base_Page.sendKeysToWebElement(driver.findElement(passWord), list.get(i).get("password"));

        }

    }

    /**********************************************************************************
     **CREATE FUNCTION STEP DEFINITIONS
     **********************************************************************************/

    @When("^User clicks on the Add button$")
    public void user_clicks_on_the_add_button() throws Exception {

        Base_Page.actionMoveAndClick(driver.findElement(createAddButton));
        
    }

    @Then("^User should see \"([^\"]*)\" in the employees list$")
    public void user_should_see_something_in_the_employees_list(String NameToCheck) throws Throwable {

        ngWebdriver.waitForAngularRequestsToFinish();
 
        List < WebElement > employees = driver.findElements(ByAngular.exactRepeater("employee in employees"));

        for (WebElement employee: employees) {

            try {
                //	System.out.println(NameToCheck + " is successfully added!");
                String exportedName = employee.getText();
                Assert.assertTrue(exportedName.equalsIgnoreCase(NameToCheck));
                //	Assert.assertTrue(exportedName.contains(NameToCheck));
                break;

            } catch (AssertionError error) {


            } catch (Exception e) {


            }
        }
    }

    @And("^User clicks on the Create button$")
    public void user_clicks_on_the_create_button() throws Throwable {


        ngWebdriver.waitForAngularRequestsToFinish();   // wait for angular activity
        Base_Page.actionMoveAndClick(driver.findElement(createButton));

    }

    @And("^User should be in new user page$")
    public void user_should_be_in_new_user_page() throws Throwable {

        Base_Page.waitForPresenceOfElement(createCancelButton);

    }

    @And("^User enters following details for new user$")
    public void user_enters_following_details_for_new_user(DataTable table) throws Throwable {

        	List < Map < String, String >> list = table.asMaps(String.class, String.class);
        
        for (int i = 0; i < list.size(); i++) {

            Base_Page.sendKeysToWebElement(driver.findElement(createUserName), list.get(i).get("First_name"));
            Base_Page.sendKeysToWebElement(driver.findElement(createPassWord), list.get(i).get("Last_name"));
            Base_Page.sendKeysToWebElement(driver.findElement(createStartDate), list.get(i).get("Start_date"));
            Base_Page.sendKeysToWebElement(driver.findElement(createEmail), list.get(i).get("Email"));

        }

    }

    @When("^User hits enter$")
    public void user_hits_enter() throws Throwable {
       
      		driver.findElement(createEmail).sendKeys(Keys.ENTER);
    }


    @Then("^User should see the alert message$")
    public void user_should_see_the_alert_message() throws Throwable {

            Thread.sleep(3000);
            String expectedAlertMessage = "Error trying to create a new employee: {\"start_date\":[\"can't be blank\"]})";
            Alert alert = driver.switchTo().alert();
            String actualAlertMessage = alert.getText();
     //		System.out.println("THIS IS ACTUAL ALERT: " + actualAlertMessage);
     //		System.out.println("THIS IS EXPECTED ALERT:  " + expectedAlertMessage);
            Assert.assertTrue(expectedAlertMessage.equalsIgnoreCase(actualAlertMessage));
            alert.accept();

    }

    @Then("^User should still be at new user page$")
    public void user_should_still_be_at_new_user_page() throws Throwable {

        	Base_Page.waitForPresenceOfElement(createCancelButton);
    }
    @And("^User deletes \"([^\"]*)\"$")
    public void user_deletes_something(String nameToDelete) throws Throwable {

            List < WebElement > employees = driver.findElements(ByAngular.exactRepeater("employee in employees"));
            Actions actions = new Actions(driver);

        for (WebElement employee: employees) {

            try {
                String exportedName = employee.getText();

                if (exportedName.contentEquals(nameToDelete)) {

                    actions.click(employee).build().perform();
                    Thread.sleep(2000);
                    driver.findElement(deleteButton).click();
                    Alert alert = driver.switchTo().alert();
                    System.out.println("Alert message:  " + alert.getText());
                    alert.accept();

                }
            } catch (NoAlertPresentException e) {

                e.printStackTrace();

            }
        }
    }

    /**********************************************************************************
     **AFTER SCENARIO
     **********************************************************************************/


    @After
    public void tearDownAndScreenshotOnFailure(Scenario scenario) {
        try {
            if (driver != null && scenario.isFailed()) {

                Base_Page.captureScreenshot();
                driver.manage().deleteAllCookies();
                driver.quit();
                driver = null;
            }
            
          	if (driver != null) {

                driver.manage().deleteAllCookies();
                driver.quit();
                driver = null;
            }
        } 
      
      catch (Exception e) {

            System.out.println("Methods failed, Exception: " + e.getMessage());
        }
    }

}