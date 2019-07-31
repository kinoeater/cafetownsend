package runners;
import java.io.File;
import java.io.IOException;
import org.testng.annotations.AfterClass;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import pageObjects.Base_Page;

/**********************************************************************************
 **Runner file to run all test scenarios, currently testNG.xml is pointed to this one.
 *You can either edit testNG.xml to point another runner file, or create another testNG_2.xml file
 **********************************************************************************/

@CucumberOptions(features = { "src/test/java/resources/features/" }, glue = {
		"stepDefinitions" }, monochrome = true, tags = {}, 
				plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json",
				"com.cucumber.listener.ExtentCucumberFormatter:output/report.html" })

public class MainRunner_Test extends AbstractTestNGCucumberTests {
	
	@AfterClass   // REPORTING
	public static void writeExtentReport() throws IOException, InterruptedException {
		Reporter.loadXMLConfig(new File(System.getProperty("user.dir") + File.separator +"src"+ File.separator +"main"+ File.separator +"java"+ File.separator +"utils"+ File.separator +"ReportsConfig.xml"));	
		Base_Page.copyLatestExtentReport();
	}
}