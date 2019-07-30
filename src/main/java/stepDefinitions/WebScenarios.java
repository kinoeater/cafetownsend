package stepDefinitions;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.paulhammant.ngwebdriver.ByAngular;
import com.paulhammant.ngwebdriver.NgWebDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
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
		
		
		setup(browser);
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

	    @Then("^User should see \"([^\"]*)\" message$")
	    public void user_should_see_something_message(String strArg1) throws Throwable {
	        
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
	    
}
