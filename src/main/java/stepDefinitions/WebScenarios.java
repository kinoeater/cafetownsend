package stepDefinitions;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.paulhammant.ngwebdriver.ByAngular;
import com.paulhammant.ngwebdriver.NgWebDriver;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import pageObjects.Base_Page;
import pageObjects.Page_Objects;
import utils.DriverFactory;

public class WebScenarios extends Page_Objects{
	
	public WebScenarios() throws IOException {
		super();
		// TODO Auto-generated constructor stub
	}

//	static WebDriver driver;
//	static NgWebDriver ngWebdriver;
	

/*
 ********************* LOGIN FUNCTION TEST SCENARIOS*******************
 * 
 * 
 */
	@Given("^User navigates to login page with \"([^\"]*)\" browser$")
	public static void user_navigates_to_login_page_with_browser(String browser) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		
		goToLoginPage(browser);
		/*		driver = getDriver(browser);
		ngWebdriver = new NgWebDriver((JavascriptExecutor) driver);
		driver.get("http://cafetownsend-angular-rails.herokuapp.com/login");
		ngWebdriver.waitForAngularRequestsToFinish(); */
		
/*		if ("Chrome".equals(browser)) {
        
			
		 	WebDriverManager.chromedriver().setup();
	    	driver = new ChromeDriver();
			driver.manage().window().maximize();
			ngWebdriver = new NgWebDriver((JavascriptExecutor) driver);
			driver.get("http://cafetownsend-angular-rails.herokuapp.com/login");
			ngWebdriver.waitForAngularRequestsToFinish();
        } else if ("Firefox".equals(browser)) {
           
        }  */
    
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
	    		 	    	
	    	List<Map<String, String>> list = table.asMaps(String.class, String.class);
	    	for(int i=0; i<list.size(); i++) {

	    		Base_Page.sendKeysToWebElement(driver.findElement(userName), list.get(i).get("username"));
	    		Base_Page.sendKeysToWebElement(driver.findElement(passWord), list.get(i).get("password"));
	    	
	    	}
	    	
	    }
/*
 * 
 * ***************************CREATE FUNCTION SCENARIOS ******************
 * 
 */

	
	    @When("^User clicks on the Add button$")
	    public void user_clicks_on_the_add_button() throws Exception {
	    	
	    	Base_Page.actionMoveAndClick(driver.findElement(createAddButton));
	    }

	    @Then("^User should see \"([^\"]*)\" in the employees list$")
	    public void user_should_see_something_in_the_employees_list(String employeeName) throws Throwable {
	    	ngWebdriver.waitForAngularRequestsToFinish();
	    	
	    	List<WebElement> employees =driver.findElements(ByAngular.exactRepeater("employee in employees"));
	
	    	for(WebElement employee :employees ) {
				
	    		    String name = employee.getText();
	    		        
	    			if (name.contains(employeeName)) {
	    				
	    				System.out.println(employeeName + " is successfully added!");
	    				String exportedName = employee.getText();
	    				Assert.assertTrue(exportedName.equalsIgnoreCase(employeeName));
	    				break;
	    			
	    			}  
	    			
	    	}
	    	
	    	
	    	
	    }

	    @And("^User clicks on the Create button$")
	    public void user_clicks_on_the_create_button() throws Throwable {
	    //	Thread.sleep(5000);
	    	ngWebdriver.waitForAngularRequestsToFinish();
	    	Base_Page.actionMoveAndClick(driver.findElement(createButton));
	    	
	    	
	    	
	    }

	    @And("^User should be in new user page$")
	    public void user_should_be_in_new_user_page() throws Throwable {
	    	
	    	Base_Page.waitForPresenceOfElement(createCancelButton);
	    //	Base_Page.actionMoveAndClick(driver.findElement(createCancelButton));
	    }

	    @And("^User enters following details for new user$")
	    public void user_enters_following_details_for_new_user(DataTable table) throws Throwable {
	    	
	    	List<Map<String, String>> list = table.asMaps(String.class, String.class);
	    	for(int i=0; i<list.size(); i++) {

	    		Base_Page.sendKeysToWebElement(driver.findElement(createUserName), list.get(i).get("First_name"));
	    		Base_Page.sendKeysToWebElement(driver.findElement(createPassWord), list.get(i).get("Last_name"));
	    		Base_Page.sendKeysToWebElement(driver.findElement(createStartDate), list.get(i).get("Start_date"));
	    		Base_Page.sendKeysToWebElement(driver.findElement(createEmail), list.get(i).get("Email"));
	    	
	    	}
	      
	    }

	    /*
	     * 
	     *   
	     * ***************************AFTER SCENARIO ******************
	     * 
	     */
	    
	  @After
		public void tearDownAndScreenshotOnFailure(Scenario scenario) {
			try {
				if(driver != null && scenario.isFailed()) {
					
					Base_Page.captureScreenshot();
					driver.manage().deleteAllCookies();
					driver.quit();
					driver = null;
				}
				if(driver != null) {
					
					driver.manage().deleteAllCookies();
					driver.quit();
					driver = null;
				}
			} catch (Exception e) {
				System.out.println("Methods failed, Exception: " + e.getMessage());
			}
	}
	    
}
