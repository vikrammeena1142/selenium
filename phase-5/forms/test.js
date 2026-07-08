import { Builder, By } from "selenium-webdriver";

console.clear();

console.log("==================================================");
console.log("🚀 PHASE 5");
console.log("📚 CHAPTER 2 - FORM AUTOMATION");
console.log("==================================================");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try {

    // ==========================================
    console.log("\nSTEP 1");
    console.log("Opening Registration Form...");

    await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase-5/forms/index.html");

    await driver.sleep(2000);

    console.log("✅ Registration Form Opened");

    // ==========================================
    console.log("\nSTEP 2");
    console.log("Finding Form Fields...");

    const firstName =
        await driver.findElement(By.id("firstName"));

    const lastName =
        await driver.findElement(By.id("lastName"));

    const email =
        await driver.findElement(By.id("email"));

    const age =
        await driver.findElement(By.id("age"));

    const address =
        await driver.findElement(By.id("address"));

    console.log("✅ All Fields Found");

    await driver.sleep(1500);

    // ==========================================
    console.log("\nSTEP 3");
    console.log("Filling Registration Form...");

    await firstName.sendKeys("John");
    console.log("✅ First Name Entered");

    await lastName.sendKeys("Doe");
    console.log("✅ Last Name Entered");

    await email.sendKeys("john@example.com");
    console.log("✅ Email Entered");

    await age.sendKeys("25");
    console.log("✅ Age Entered");

    await address.sendKeys("New York, USA");
    console.log("✅ Address Entered");

    await driver.sleep(2000);

    // ==========================================
    console.log("\nSTEP 4");
    console.log("Reading Entered Values...");

    console.log(
        "First Name:",
        await firstName.getAttribute("value")
    );

    console.log(
        "Last Name:",
        await lastName.getAttribute("value")
    );

    console.log(
        "Email:",
        await email.getAttribute("value")
    );

    console.log(
        "Age:",
        await age.getAttribute("value")
    );

    console.log(
        "Address:",
        await address.getAttribute("value")
    );

    await driver.sleep(2000);

    // ==========================================
    console.log("\nSTEP 5");
    console.log("Submitting Form...");

    const submit =
        await driver.findElement(By.id("submitBtn"));

    await submit.click();

    console.log("✅ Form Submitted");

    await driver.sleep(2000);

    // ==========================================
    console.log("\nSTEP 6");
    console.log("Reading Result...");

    const result =
        await driver.findElement(By.id("result"));

    const actualResult =
        await result.getText();

    console.log(actualResult);

    await driver.sleep(2000);

    // ==========================================
    console.log("\nSTEP 7");
    console.log("Verifying Registration...");

    if (actualResult.includes("Registration Successful")) {

        console.log("✅ TEST PASSED");

    } else {

        console.log("❌ TEST FAILED");

    }

    await driver.sleep(3000);

}
finally {

    console.log("\nClosing Browser...");

    await driver.quit();

    console.log("✅ Browser Closed");

}