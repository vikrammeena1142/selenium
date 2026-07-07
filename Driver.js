import { Builder } from "selenium-webdriver";

console.log("Creating Driver...");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

console.log("Driver Type:");
console.log(typeof driver);

console.log("Driver Constructor:");
console.log(driver.constructor.name);
console.log("Opening Google...");
await driver.get("https://google.com");
 await driver.sleep(2000);
console.log("Opening Wikipedia...");
await driver.get("https://wikipedia.org");
 await driver.sleep(2000);
 console.log("Navigating back...");
 await driver.navigate().back();
  await driver.sleep(2000);
 console.log("Refreshing page...");
 await driver.navigate().refresh();
  await driver.sleep(2000);
  console.log("Closing Browser...");

await driver.quit();