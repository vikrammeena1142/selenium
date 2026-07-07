import { Builder,By } from "selenium-webdriver"; 

console.log("🚀 Starting...");

const Builder1 = await new Builder()

const chrome = await Builder1.forBrowser("chrome")

const driver = await chrome.build();

console.log("🌐 Opening practice page...");

driver.get("https://the-internet.herokuapp.com/login");

console.log("🔍 Searching for username input...");

const username = await driver.findElement(By.id("username"));

console.log("✅ Element found!",username);

await username.sendKeys("Vikram Meenaa");

await driver.sleep(2000);

await username.clear();

await driver.sleep(2000);

await username.sendKeys("Selenium Student");



await driver.sleep(5000);

driver.quit();

console.log("🎉 Finished.");



