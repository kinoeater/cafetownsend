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

    public static void main( String[] args ) throws InterruptedException
    {
       
    	WebDriverManager.chromedriver().setup();
    	WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);	
		NgWebDriver ngWebdriver = new NgWebDriver((JavascriptExecutor) driver);
		driver.get("http://cafetownsend-angular-rails.herokuapp.com/login");
		ngWebdriver.waitForAngularRequestsToFinish();
		
		driver.findElement(ByAngular.model("user.name")).sendKeys("Luke");
		driver.findElement(ByAngular.model("user.password")).sendKeys("Skywalker");
	//	driver.findElement(ByAngular.buttonText("Login"));
		
		driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();
	//	Thread.sleep(5000);
		System.out.println(driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout")).isDisplayed());
		System.out.println(driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout")).isEnabled());
		System.out.println(driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout")).getText());
		WebElement element = driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout"));
		Actions actions = new Actions(driver);
		actions.moveToElement(element).click().build().perform();
	//	driver.findElement(ByAngular.cssContainingText("p.main-button", "Logout")).click();
		
	//	driver.findElement(ByAngular.model("createEmployee()")).click();
	//	driver.findElement(By.xpath("//*[@id='bAdd']")).click();
	//	driver.findElement(ByAngular.cssContainingText(".subButton","Create")).click();
		
		
	//	System.out.println(driver.getPageSource());
	// **	driver.findElement(ByAngular.cssContainingText("a#bAdd.subButton", "Create")).click(); 
		
	/*	List<WebElement> employees =driver.findElements(ByAngular.exactRepeater("employee in employees"));
		
		Actions actions = new Actions(driver);
		
		String input = "Andy Dufresne";
	
		for(int i=0;i<employees.size();i++) {
			
		String employeeName = employees.get(i).getText();
		if (employeeName.contentEquals(input)) {
			
			actions.doubleClick(employees.get(i)).perform();
		}
		}   */
		
	
	
		
		
	//	driver.findElement(ByAngular.cssContainingText("a#bAdd.subButton", "Edit")).click();
		
		
	
	 driver.quit();
    }
}
