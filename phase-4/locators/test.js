import { Builder, By } from "selenium-webdriver";

console.clear();

console.log("==================================================");
console.log("🚀 PHASE 4 REVISION");
console.log("📚 CHAPTER 2 - LOCATORS");
console.log("==================================================");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try {

    console.log("\nSTEP 1");
    console.log("Opening Locator Playground...");

    await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase4/locators/index.html#");

    await driver.sleep(5000);

    console.log("✅ Page Loaded");

    console.log("\nSTEP 2");
    console.log("Finding Username using ID");

    const username =
        await driver.findElement(By.id("username"));

    console.log("✅ Username Found");

    await username.sendKeys("john_doe");

    console.log("✅ Username Typed");

  
    await driver.sleep(5000);

    console.log("\nSTEP 3");
    console.log("Finding Password using NAME");

    const password =
        await driver.findElement(By.name("password"));

    await password.sendKeys("Password123");

    console.log("✅ Password Typed");

  
    await driver.sleep(5000);

    console.log("\nSTEP 4");
    console.log("Finding Login using CLASS");

    const loginButton =
        await driver.findElement(By.className("primary"));

    console.log("Button Text :",
        await loginButton.getText());

    await driver.sleep(5000);

    console.log("\nSTEP 5");
    console.log("Finding Heading using TAG");

    const heading =
        await driver.findElement(By.tagName("h1"));

    console.log(
        await heading.getText()
    );


    await driver.sleep(5000);

    console.log("\nSTEP 6");
    console.log("Finding Forgot Password using LINK TEXT");

    const forgot =
        await driver.findElement(
            By.linkText("Forgot Password")
        );

    console.log(
        await forgot.getText()
    );

    await driver.sleep(5000);

    console.log("\nSTEP 7");
    console.log("Finding Create Account using PARTIAL LINK");

    const create =
        await driver.findElement(
            By.partialLinkText("Create")
        );

    console.log(
        await create.getText()
    );

    await driver.sleep(5000);

    console.log("\nSTEP 8");
    console.log("Finding Login Button using CSS");

    const cssButton =
        await driver.findElement(
            By.css("#loginBtn")
        );

    console.log(
        await cssButton.getText()
    );

    await driver.sleep(5000);

    console.log("\nSTEP 9");
    console.log("Finding Login Button using XPath");

    const xpathButton =
        await driver.findElement(
            By.xpath("//button[@id='loginBtn']")
        );

    console.log(
        await xpathButton.getText()
    );

    await driver.sleep(5000);

    console.log("\nSTEP 10");
    console.log("Checking Checkbox");

    const remember =
        await driver.findElement(By.id("remember"));

    console.log(
        "Selected Before :",
        await remember.isSelected()
    );

    await remember.click();

    console.log(
        "Selected After :",
        await remember.isSelected()
    );

    await driver.sleep(5000);

    console.log("\nSTEP 11");
    console.log("Reading Placeholder");

    console.log(
        await username.getAttribute("placeholder")
    );

    await driver.sleep(5000);

    console.log("\nSTEP 12");
    console.log("Checking Visibility");

    console.log(
        await username.isDisplayed()
    );

    console.log(
        await username.isEnabled()
    );

    await driver.sleep(5000);

    console.log("\nSTEP 13");
    console.log("Clearing Username");

    await username.clear();

    await driver.sleep(5000);

    console.log("\nSTEP 14");
    console.log("Finding All List Items");

    const courses =
        await driver.findElements(
            By.tagName("li")
        );

    console.log(
        "Total Courses :",
        courses.length
    );

    for(const course of courses){

        console.log(
            "📘",
            await course.getText()
        );

    }

    await driver.sleep(5000);

}
finally{

    console.log("\nClosing Browser...");

    await driver.quit();

    console.log("✅ Browser Closed");

}