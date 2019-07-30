package pageObjects;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.cucumber.listener.Reporter;
import utils.DriverFactory;

public class Base_Page extends DriverFactory{
	
	 protected WebDriverWait wait;

	 private static String screenshotName;
	
	public Base_Page() throws IOException {
		super();
	}
	
	
	
	
	   
	   /**********************************************************************************/
	   /**********************************************************************************/

	   /***METHODS RELATED WITH REPORTING****************************************************************/
	   public static String returnDateStamp(String fileExtension) {     		// helps to get the current time stamp, then turns it into string
	    Date d = new Date();
	    String date = d.toString().replace(":", "_").replace(" ", "_") + fileExtension;
	    return date;
	   }

	   public static void captureScreenshot() throws IOException, InterruptedException {
	    File srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);     // Captures screenshot on "srcfile"

	    screenshotName = returnDateStamp(".jpg");   //creates the name for the screenshoot, with above created time stamp

	    FileUtils.copyFile(srcFile, new File(System.getProperty("user.dir") +File.separator+"output"+File.separator+"imgs"+File.separator+ screenshotName));
	  // gives the screenshoot name, to srcFile, now screenshot has a name 
	    Reporter.addStepLog("Taking a screenshot!");  // this parts are for the html part
	    Reporter.addStepLog("<br>");  // a bracket, space
	    Reporter.addStepLog("<a target=\"_blank\", href=" + returnScreenshotName() + "><img src=" + returnScreenshotName() + " height=200 width=300></img></a>");
	   } // a tag for providing a link to the screenshot, so that screnshoot is embeeded to the html report

	   public static String returnScreenshotName() {
	    return (System.getProperty("user.dir") +File.separator+"output"+File.separator+"imgs"+File.separator+ screenshotName).toString();
	   }  // screen shoot with the whole directory

	   private static void copyFileUsingStream(File source, File dest) throws IOException {
	    InputStream is = null;
	    OutputStream os = null;

	    try {
	     is = new FileInputStream(source);
	     os = new FileOutputStream(dest);
	     byte[] buffer = new byte[1024];
	     int length;

	     while ((length = is.read(buffer)) > 0) {
	      os.write(buffer, 0, length);
	     }

	    } finally {
	     is.close();
	     os.close();
	    }
	   }

	   public static void copyLatestExtentReport() throws IOException {  // takes the latest report an give it a name with the current date
	    Date d = new Date();
	    String date = d.toString().replace(":", "_").replace(" ", "_");
	    File source = new File(System.getProperty("user.dir") +File.separator+"output"+File.separator+"report.html");
	    File dest = new File(System.getProperty("user.dir") +File.separator+"output"+File.separator+ date.toString() + ".html");
	    copyFileUsingStream(source, dest);
	   }
	   
	   /**********************************************************************************
	    **Click Method
	    **********************************************************************************/
	   public void waitAndClickElement(WebElement element) throws InterruptedException, IOException {
	    boolean clicked = false;
	    int attempts = 0;
	    while (!clicked && attempts < 10) {
	     try {
	      this.wait.until(ExpectedConditions.elementToBeClickable(element)).click();
	      System.out.println("Successfully clicked on the WebElement: " + "<" + element.toString() + ">");
	      clicked = true;
	     } catch (Exception e) {
	      System.out.println("Unable to wait and click on WebElement, Exception: " + e.getMessage());
	      Assert.fail("Unable to wait and click on the WebElement, using locator: " + "<" + element.toString() + ">");
	     }
	     attempts++;
	    }
	   }

	   /**********************************************************************************
	    **Action methods
	    **********************************************************************************/
	   public void actionMoveAndClickonSubElement(WebElement ParentElement, WebElement SubElement) throws Exception {
	    Actions ob = new Actions(driver);
	    try {
	     //this.wait.until(ExpectedConditions.elementToBeClickable(ParentElement)).isEnabled();
	     ob.moveToElement(new WebDriverWait(driver, 20).until(ExpectedConditions.visibilityOf(ParentElement))).perform();
	     new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(SubElement)).click();


	    } catch (StaleElementReferenceException elementUpdated) {
	     WebElement elementToClick = ParentElement;
	     Boolean elementPresent = wait.until(ExpectedConditions.elementToBeClickable(elementToClick)).isEnabled();
	     if (elementPresent == true) {
	      ob.moveToElement(elementToClick).click().build().perform();

	     }
	    } catch (Exception e) {
	     System.out.println("Unable to Action Move and Click on the WebElement, using locator: " + "<" + ParentElement.toString() + ">");
	     Assert.fail("Unable to Action Move and Click on the WebElement, Exception: " + e.getMessage());
	    }
	   }
	   public void actionMoveAndClick(WebElement element) throws Exception {
	    Actions ob = new Actions(driver);
	    try {
	     this.wait.until(ExpectedConditions.elementToBeClickable(element)).isEnabled();
	     ob.moveToElement(element).click().build().perform();
	     System.out.println("Successfully Action Moved and Clicked on the WebElement, using locator: " + "<" + element.toString() + ">");
	    } catch (StaleElementReferenceException elementUpdated) {
	     WebElement elementToClick = element;
	     Boolean elementPresent = wait.until(ExpectedConditions.elementToBeClickable(elementToClick)).isEnabled();
	     if (elementPresent == true) {
	      ob.moveToElement(elementToClick).click().build().perform();
	      System.out.println("(Stale Exception) - Successfully Action Moved and Clicked on the WebElement, using locator: " + "<" + element.toString() + ">");
	     }
	    } catch (Exception e) {
	     System.out.println("Unable to Action Move and Click on the WebElement, using locator: " + "<" + element.toString() + ">");
	     Assert.fail("Unable to Action Move and Click on the WebElement, Exception: " + e.getMessage());
	    }
	   }


	   /**********************************************************************************
	    **Send keys method
	    **********************************************************************************/
	   public void sendKeysToWebElement(WebElement element, String textToSend) throws Exception {
	    try {
	     this.WaitUntilWebElementIsVisible(element);
	     element.clear();
	     element.sendKeys(textToSend);
	     System.out.println("Successfully Sent the following keys: '" + textToSend + "' to element: " + "<" + element.toString() + ">");
	    } catch (Exception e) {
	     System.out.println("Unable to locate WebElement: " + "<" + element.toString() + "> and send the following keys: " + textToSend);
	     Assert.fail("Unable to send keys to WebElement, Exception: " + e.getMessage());
	    }
	   }

	   /**********************************************************************************
	    **For waiting elements
	    **********************************************************************************/
	   public boolean WaitUntilWebElementIsVisible(WebElement element) {
	    try {
	     this.wait.until(ExpectedConditions.visibilityOf(element));
	     System.out.println("WebElement is visible using locator: " + "<" + element.toString() + ">");
	     return true;
	    } catch (Exception e) {
	     System.out.println("WebElement is NOT visible, using locator: " + "<" + element.toString() + ">");
	     Assert.fail("WebElement is NOT visible, Exception: " + e.getMessage());
	     return false;
	    }
	   }


	   public boolean isElementClickable(WebElement element) {
	    try {
	     this.wait.until(ExpectedConditions.elementToBeClickable(element));
	     System.out.println("WebElement is clickable using locator: " + "<" + element.toString() + ">");
	     return true;
	    } catch (Exception e) {
	     System.out.println("WebElement is NOT clickable using locator: " + "<" + element.toString() + ">");
	     return false;
	    }
	   }

	  
	  
}
