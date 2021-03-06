package runners;
import java.io.File;
import java.io.IOException;
import org.testng.annotations.AfterClass;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import pageObjects.Base_Page;

/**********************************************************************************
 **Runner file to run login feature test scenarios
 **********************************************************************************/


@CucumberOptions(features = { "src/test/java/resources/features/loginFunctionality.feature" }, glue = {
		"stepDefinitions" }, monochrome = true, tags = {}, 
				plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json",
				"com.cucumber.listener.ExtentCucumberFormatter:output/report.html" })

public class loginRunner_Test2 extends AbstractTestNGCucumberTests {
	
	@AfterClass   // REPORTING
	public static void writeExtentReport() throws IOException, InterruptedException {
		Reporter.loadXMLConfig(new File(System.getProperty("user.dir") + File.separator +"src"+ File.separator +"main"+ File.separator +"java"+ File.separator +"utils"+ File.separator +"ReportsConfig.xml"));	
		Base_Page.copyLatestExtentReport();
	}
}