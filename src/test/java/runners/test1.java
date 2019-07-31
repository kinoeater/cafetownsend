package runners;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.paulhammant.ngwebdriver.ByAngular;
import com.paulhammant.ngwebdriver.NgWebDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class test1 {

    public static void main( String[] args ) throws Exception
    {
       
    	WebDriverManager.chromedriver().setup();
    	WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);	
		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		NgWebDriver ngWebdriver = new NgWebDriver((JavascriptExecutor) driver);
		driver.get("http://cafetownsend-angular-rails.herokuapp.com/login");
		ngWebdriver.waitForAngularRequestsToFinish();
	//	ngWebdriver.waitForAngular2RequestsToFinish();
		
		driver.findElement(ByAngular.model("user.name")).sendKeys("Luke");
		ngWebdriver.waitForAngularRequestsToFinish();
		driver.findElement(ByAngular.model("user.password")).sendKeys("Skywalker");
		ngWebdriver.waitForAngularRequestsToFinish();
	//	driver.findElement(ByAngular.buttonText("Login"));
		
		driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();
		ngWebdriver.waitForAngularRequestsToFinish();
	//	Thread.sleep(5000);
//		System.out.println(driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout")).isDisplayed());
//		System.out.println(driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout")).isEnabled());
//		System.out.println(driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout")).getText());
	//	WebElement element = driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout"));
	//	Actions actions = new Actions(driver);
	//	actions.moveToElement(element).click().build().perform();
	//	driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout")).click();
		
	//	driver.findElement(ByAngular.model("createEmployee()")).click();
	//	driver.findElement(By.xpath("//*[@id='bAdd']")).click();
	//	driver.findElement(ByAngular.cssContainingText(".subButton","Create")).click();
		
		
	//	System.out.println(driver.getPageSource());
		
	//	Actions actions = new Actions(driver);
	//	actions.moveToElement(driver.findElement(ByAngular.cssContainingText("a#bAdd.subButton", "Create"))).click().build().perform();
		
	 //   driver.findElement(ByAngular.cssContainingText("a#bAdd.subButton", "Create")).click(); 
	//	Base_Page.actionMoveAndClick(driver.findElement(ByAngular.cssContainingText("a#bAdd.subButton", "Create")));

		
		List<WebElement> employees =driver.findElements(ByAngular.exactRepeater("employee in employees"));
		
		Actions actions = new Actions(driver);
		
	//	String input = "Andy Dufresne";
		By deleteButton = ByAngular.cssContainingText("#bDelete.subButton", "Delete");
		ngWebdriver.waitForAngularRequestsToFinish();
	
		for(int i=0;i<employees.size();i++) {
			
	//	String employeeName = employees.get(i).getText();
			System.out.println(employees.size());
			
		actions.click(employees.get(i)).build().perform();
		

		
		Thread.sleep(5000);
		driver.findElement(deleteButton).click();
		Thread.sleep(3000);
		System.out.println(driver.switchTo().alert().getText());
		driver.switchTo().alert().accept();
		
		Thread.sleep(3000);
		/*if (employeeName.contentEquals(input)) {
			
			actions.doubleClick(employees.get(i)).perform();
		
		}  */ 
		
	
    }
		
		
	//	driver.findElement(ByAngular.cssContainingText("a#bAdd.subButton", "Edit")).click();
		
		
	
	driver.quit();
    }
}
