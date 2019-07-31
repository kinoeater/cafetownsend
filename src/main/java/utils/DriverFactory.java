package utils;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import com.paulhammant.ngwebdriver.NgWebDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class DriverFactory {
	
	protected static WebDriver driver;
	protected static NgWebDriver ngWebdriver;

	
	
	
	public static WebDriver getDriver(String browser) {
		try {
			// Read Configuration
			if ("Chrome".equals(browser)) {
	
			 	WebDriverManager.chromedriver().setup();
		    	driver = new ChromeDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);	

	        } else if ("Firefox".equals(browser)) {
	      
	        	WebDriverManager.firefoxdriver().setup();
				DesiredCapabilities capabilities = DesiredCapabilities.firefox();
				capabilities.setCapability("marionette", true);
				driver = new FirefoxDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	        }
	    

		} catch (Exception e) {
			System.out.println("Unable to load browser: " + e.getMessage());
		} finally {
			
			driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);

			
		}
		return driver;
	}
}
