package pageObjects;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import com.paulhammant.ngwebdriver.ByAngular;
import com.paulhammant.ngwebdriver.NgWebDriver;

import utils.DriverFactory;

public class Page_Objects extends DriverFactory{
	
	
	/* LOGIN PAGE LOCATORS WITH By */
	protected By userName = ByAngular.model("user.name");
	protected By passWord = ByAngular.model("user.password");
	protected By loginButton = By.xpath("//button[contains(text(),'Login')]");
	protected By loginError = ByAngular.cssContainingText("p.error-message.ng-binding", "Invalid username or password!");
	
	/* HOME PAGE LOCATORS WITH By */
	protected By logoutButton = ByAngular.cssContainingText("p.main-button", "Logout");
	protected By createButton = ByAngular.cssContainingText("a#bAdd.subButton", "Create");	
	protected By editButton = ByAngular.cssContainingText("#bEdit.subButton", "Edit");	
	protected By deleteButton = ByAngular.cssContainingText("#bDelete.subButton", "Delete");
	protected By greetings = ByAngular.cssContainingText("p#greetings.ng-binding", "Hello Luke");
	
	/* CREATE PAGE LOCATORS WITH By */
	
	protected By createCancelButton =By.xpath("//a[@class='subButton bCancel']");
	protected By createUserName = ByAngular.model("selectedEmployee.firstName");
	protected By createPassWord = ByAngular.model("selectedEmployee.lastName");
	protected By createStartDate = ByAngular.model("selectedEmployee.startDate");
	protected By createEmail = ByAngular.model("selectedEmployee.email");
	protected By createAddButton =By.xpath("//button[@class='main-button']");
	
	
	
	public Page_Objects() throws IOException {
		super();
	}
	
	public static Page_Objects goToLoginPage (String brws) throws Exception {
		
		driver = getDriver(brws);
		ngWebdriver = new NgWebDriver((JavascriptExecutor) driver);
		driver.get("http://cafetownsend-angular-rails.herokuapp.com/login");
		ngWebdriver.waitForAngularRequestsToFinish();
		
		return new Page_Objects();
		
	}
	


	  
}
