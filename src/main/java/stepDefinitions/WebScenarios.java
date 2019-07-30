package stepDefinitions;

import java.io.IOException;
import java.util.List;
import java.util.Map;

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
	    
	    }
	    
	    @And("^User logs out$")
	    public void user_logs_out() throws Throwable {
	    	
			Actions actions = new Actions(driver);
			actions.moveToElement(driver.findElement(logoutButton)).click().build().perform();
	   
	    }

	    @Then("^User should see greeting message$")
	    public void user_should_see_greeting_message() throws Throwable {
	        
	    
	    	System.out.println(driver.findElement(greetings).getText());
	    	Base_Page.waitForPresenceOfElement(greetings);
	    	Base_Page.verify("Hello Luke", greetings);
	    	
	    }

	    @And("^User enters following credentials for login$")
	    public void user_enters_following_credentials_for_login(DataTable table) throws Throwable {
	    	
	 
	    	
	    	List<Map<String, String>> list = table.asMaps(String.class, String.class);
	    	for(int i=0; i<list.size(); i++) {
	    		
	    		driver.findElement(userName).clear();
	    		driver.findElement(userName).sendKeys(list.get(i).get("username"));
	    		driver.findElement(passWord).clear();
	    		driver.findElement(passWord).sendKeys(list.get(i).get("password"));	
	    	
	    	}
	    	
	    	

	    
	    	
}
	    
	    @After
		public void tearDownAndScreenshotOnFailure(Scenario scenario) {
			try {
				if(driver != null && scenario.isFailed()) {
					
					Base_Page base = new Base_Page();
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
