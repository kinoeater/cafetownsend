package runners;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.paulhammant.ngwebdriver.ByAngular;
import com.paulhammant.ngwebdriver.NgWebDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class test2 {

    public static void main( String[] args ) throws InterruptedException
    {
       
    	WebDriverManager.chromedriver().setup();
    	WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
		NgWebDriver ngWebdriver = new NgWebDriver((JavascriptExecutor) driver);
		driver.get("http://cafetownsend-angular-rails.herokuapp.com/login");
		
		ngWebdriver.waitForAngularRequestsToFinish();
		
		driver.findElement(ByAngular.model("user.name")).sendKeys("Luke");
		driver.findElement(ByAngular.model("user.password")).sendKeys("");
	//	driver.findElement(ByAngular.buttonText("Login"));
		
		driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();
		Thread.sleep(5000);
		
		String message = driver.findElement(ByAngular.model("user.password")).getAttribute("validationMessage"); 
		
		System.out.println(message);

	
		
		
	//	driver.findElement(ByAngular.cssContainingText("a#bAdd.subButton", "Edit")).click();
		
		
	
	// driver.quit();
    }
}
