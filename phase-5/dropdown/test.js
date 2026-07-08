import { Builder, By } from "selenium-webdriver";
import { Select } from "selenium-webdriver/lib/select.js";

console.clear();

console.log("=========================================");
console.log("🚀 PHASE 5");
console.log("📚 CHAPTER 3 - DROPDOWNS");
console.log("=========================================");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try {

    console.log("\nSTEP 1");
    console.log("Opening Dropdown Playground...");

    await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase-5/dropdown/index.html");

    await driver.sleep(2000);

    console.log("✅ Page Opened");

    // =========================================

    console.log("\nSTEP 2");
    console.log("Finding Dropdown...");

    const countryElement =
        await driver.findElement(By.id("country"));

    const country =
        new Select(countryElement);

    console.log("✅ Dropdown Found");

    await driver.sleep(1500);

    // =========================================

    console.log("\nSTEP 3");
    console.log("Selecting by Visible Text...");

    await country.selectByVisibleText("India");

    console.log("✅ India Selected");

    await driver.sleep(2000);

    // =========================================

    console.log("\nSTEP 4");
    console.log("Reading Selected Option...");

    const selected =
        await country.getFirstSelectedOption();

    console.log(
        "Selected :",
        await selected.getText()
    );

    await driver.sleep(1500);

    // =========================================

    console.log("\nSTEP 5");
    console.log("Reading All Options...");

    const options =
        await country.getOptions();

    console.log(
        "Total Options :",
        options.length
    );

    for (const option of options) {

        console.log(
            "🌍",
            await option.getText()
        );

    }

    await driver.sleep(2000);

    // =========================================

    console.log("\nSTEP 6");
    console.log("Selecting by Value...");

    await country.selectByValue("uk");

    console.log("✅ United Kingdom Selected");

    await driver.sleep(2000);

    // =========================================

    console.log("\nSTEP 7");
    console.log("Selecting by Index...");

    await country.selectByIndex(4);

    console.log("✅ Canada Selected");

    await driver.sleep(2000);

    // =========================================

    console.log("\nSTEP 8");
    console.log("Submitting Form...");

    const submit =
        await driver.findElement(By.id("submitBtn"));

    await submit.click();

    await driver.sleep(2000);

    // =========================================

    console.log("\nSTEP 9");
    console.log("Reading Result...");

    const result =
        await driver.findElement(By.id("result"));

    console.log(
        await result.getText()
    );

    await driver.sleep(3000);

}
finally {

    console.log("\nClosing Browser...");

    await driver.quit();

    console.log("✅ Browser Closed");

}