package pageObjects;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.paulhammant.ngwebdriver.ByAngular;
import com.paulhammant.ngwebdriver.NgWebDriver;

import utils.DriverFactory;

public class Page_Objects extends DriverFactory{
	
	protected By userName = ByAngular.model("user.name");
	protected By passWord = ByAngular.model("user.password");
	protected By loginButton = By.xpath("//button[contains(text(),'Login')]");
	
	public Page_Objects() throws IOException {
		super();
	}
	
	public static Page_Objects setup (String brws) throws Exception {
		
		driver = getDriver(brws);
		ngWebdriver = new NgWebDriver((JavascriptExecutor) driver);
		driver.get("http://cafetownsend-angular-rails.herokuapp.com/login");
		ngWebdriver.waitForAngularRequestsToFinish();
		
		return new Page_Objects();
		
	}
	
	public Page_Objects entersEmail (String email) throws Exception {
		

		
		return new Page_Objects();
		
	}

	
	  public Page_Objects entersPassword (String password) throws Exception {
			
	  
	   return new Page_Objects();
	   
	}
	  
	   public Page_Objects clicks_Login () throws Exception {
			   
	  
	   return new Page_Objects();
	   
	}
	   
	   public Page_Objects check_visibility_of_email_area () throws Exception {
			
	
	   return new Page_Objects();
		
	}
	  
	  
}
