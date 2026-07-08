import { Builder, By } from "selenium-webdriver";

console.clear();

console.log("=================================================");
console.log("🚀 PHASE 5");
console.log("📚 CHAPTER 1 - LOGIN AUTOMATION");
console.log("=================================================");

// Create Browser Session
const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try {

    // =====================================================
    console.log("\nSTEP 1");
    console.log("Opening Login Application...");

    await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase-5/login/index.html");

    await driver.sleep(2000);

    console.log("✅ Login Page Opened");

    // =====================================================
    console.log("\nSTEP 2");
    console.log("Finding Username Field...");

    const username =
        await driver.findElement(By.id("username"));

    console.log("✅ Username Field Found");

    console.log("Typing Username...");

    await username.sendKeys("admin");

    console.log("✅ Username Entered");

    await driver.sleep(1500);

    // =====================================================
    console.log("\nSTEP 3");
    console.log("Finding Password Field...");

    const password =
        await driver.findElement(By.id("password"));

    console.log("✅ Password Field Found");

    console.log("Typing Password...");

    await password.sendKeys("123456");

    console.log("✅ Password Entered");

    await driver.sleep(1500);

    // =====================================================
    console.log("\nSTEP 4");
    console.log("Finding Login Button...");

    const loginButton =
        await driver.findElement(By.id("loginBtn"));

    console.log("✅ Login Button Found");

    console.log("Clicking Login Button...");

    await loginButton.click();

    console.log("✅ Login Button Clicked");

    await driver.sleep(2000);

    // =====================================================
    console.log("\nSTEP 5");
    console.log("Reading Login Message...");

    const message =
        await driver.findElement(By.id("message"));

    const actualMessage =
        await message.getText();

    console.log("Application Message:");
    console.log(actualMessage);

    await driver.sleep(1500);

    // =====================================================
    console.log("\nSTEP 6");
    console.log("Verifying Login Result...");

    const expectedMessage = "Login Successful";

    if (actualMessage === expectedMessage) {

        console.log("✅ TEST PASSED");
        console.log("Login Successful");

    } else {

        console.log("❌ TEST FAILED");
        console.log("Expected :", expectedMessage);
        console.log("Actual   :", actualMessage);

    }

    await driver.sleep(3000);

}
finally {

    console.log("\nClosing Browser...");

    await driver.quit();

    console.log("✅ Browser Closed");

}