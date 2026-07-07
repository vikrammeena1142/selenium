import { Builder, By } from "selenium-webdriver";

console.log("🚀 Starting...");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

console.log("🌐 Opening practice page...");

await driver.get("https://the-internet.herokuapp.com/login");

console.log("🔍 Searching for username input...");

const username = await driver.findElement(By.id("username"));

console.log("✅ Element found!",username);

await driver.sleep(10000);

await driver.quit();

console.log("🎉 Finished.");