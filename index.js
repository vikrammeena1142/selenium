import { Builder } from "selenium-webdriver";

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

console.log("Opening Google...");
await driver.get("https://www.google.com");
await driver.sleep(2000);

console.log("Opening Wikipedia...");
await driver.get("https://www.wikipedia.org");
await driver.sleep(2000);

console.log("Going Back...");
await driver.navigate().back();
await driver.sleep(2000);

console.log("Going Forward...");
await driver.navigate().forward();
await driver.sleep(2000);

console.log("Refreshing...");
await driver.navigate().refresh();
await driver.sleep(2000);

console.log("Closing...");
await driver.quit();
