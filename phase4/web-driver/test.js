import { Builder } from "selenium-webdriver";

/*=========================================================
                PHASE 4 REVISION
              CHAPTER 1 - WEBDRIVER
==========================================================*/

console.clear();

console.log("=================================================");
console.log("🚀 PHASE 4 REVISION");
console.log("📚 Chapter 1 - WebDriver");
console.log("=================================================");

console.log("\nSTEP 1");
console.log("Creating WebDriver...");

/*
Builder
↓

Creates Driver Configuration
*/

const driver = await new Builder()

    /*
    Browser Selection
    */

    .forBrowser("chrome")

    /*
    Start Browser Session
    */

    .build();

console.log("✅ Browser Session Created");

await driver.sleep(1500);

console.log("\nSTEP 2");
console.log("Opening Local Application...");

/*
Replace this with your own path
*/

await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase4/web-driver/index.html");

console.log("✅ Application Opened");

await driver.sleep(2000);

console.log("\nSTEP 3");
console.log("Reading Page Title...");

const title = await driver.getTitle();

console.log("📄 Title :", title);

await driver.sleep(1500);

console.log("\nSTEP 4");
console.log("Reading Current URL...");

const url = await driver.getCurrentUrl();

console.log("🌍 URL :", url);

await driver.sleep(1500);

console.log("\nSTEP 5");
console.log("Opening Google...");

await driver.get("https://google.com");

console.log("✅ Google Opened");

await driver.sleep(2000);

console.log("\nSTEP 6");
console.log("Going Back...");

await driver.navigate().back();

console.log("✅ Returned");

await driver.sleep(2000);

console.log("\nSTEP 7");
console.log("Going Forward...");

await driver.navigate().forward();

console.log("✅ Forward Completed");

await driver.sleep(2000);

console.log("\nSTEP 8");
console.log("Refreshing Page...");

await driver.navigate().refresh();

console.log("✅ Refresh Completed");

await driver.sleep(2000);

console.log("\nSTEP 9");
console.log("Getting Window Size...");

const size = await driver.manage().window().getRect();

console.log(size);

await driver.sleep(1500);

console.log("\nSTEP 10");
console.log("Maximizing Browser...");

await driver.manage().window().maximize();

console.log("✅ Browser Maximized");

await driver.sleep(2000);

console.log("\nSTEP 11");
console.log("Minimizing Browser...");

await driver.manage().window().minimize();

console.log("✅ Browser Minimized");

await driver.sleep(2000);

console.log("\nSTEP 12");
console.log("Maximizing Again...");

await driver.manage().window().maximize();

await driver.sleep(2000);

console.log("\nSTEP 13");
console.log("Current Window Handle");

const handle = await driver.getWindowHandle();

console.log(handle);

await driver.sleep(1500);

console.log("\nSTEP 14");
console.log("Closing Browser Session...");

await driver.quit();

console.log("=================================================");
console.log("✅ Browser Closed Successfully");
console.log("🎉 Chapter Completed");
console.log("=================================================");