import { Builder, By, Key, until } from "selenium-webdriver";
import { Select } from "selenium-webdriver/lib/select.js";
import path from "path";

console.clear();

console.log("======================================================");
console.log("🚀 SELENIUM AUTOMATION PLAYGROUND");
console.log("📚 MASTER AUTOMATION SCRIPT");
console.log("======================================================");

//======================================================
// Utility Functions
//======================================================

function logStep(step, title) {
    console.log("\n======================================================");
    console.log(`STEP ${step}`);
    console.log(title);
    console.log("======================================================");
}

function success(message) {
    console.log(`✅ ${message}`);
}

function fail(message) {
    console.log(`❌ ${message}`);
}

function info(message) {
    console.log(`📌 ${message}`);
}

async function wait(seconds) {
    console.log(`⏳ Waiting ${seconds} second(s)...`);

    for (let i = seconds; i >= 1; i--) {
        process.stdout.write(`\r⏳ ${i} second(s) remaining...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log("\n");
}

//======================================================
// Browser Setup
//======================================================

logStep(1, "Launching Chrome");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try {

    //--------------------------------------------------
    // Open Playground
    //--------------------------------------------------

    logStep(2, "Opening Automation Playground");

    await driver.get(
        "file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase-5/index.html"
    );

    await driver.manage().window().maximize();

    success("Automation Playground Opened");

    await wait(2);

    //--------------------------------------------------
    // LOGIN
    //--------------------------------------------------

    logStep(3, "LOGIN AUTOMATION");

    info("Finding Username");

    const username =
        await driver.findElement(
            By.id("login-username")
        );

    success("Username Found");

    info("Typing Username");

    await username.sendKeys("admin");

    success("Username Entered");

    await wait(1);

    //------------------------------------

    info("Finding Password");

    const password =
        await driver.findElement(
            By.id("login-password")
        );

    success("Password Found");

    info("Typing Password");

    await password.sendKeys("admin123");

    success("Password Entered");

    await wait(1);

    //------------------------------------

    info("Finding Login Button");

    const loginButton =
        await driver.findElement(
            By.id("login-btn")
        );

    success("Login Button Found");

    info("Clicking Login");

    await loginButton.click();

    success("Login Clicked");

    //------------------------------------

    info("Waiting for Success Message");

    const loginSuccess =
        await driver.wait(

            until.elementLocated(
                By.id("login-success")
            ),

            5000

        );

    await driver.wait(

        until.elementIsVisible(
            loginSuccess
        ),

        5000

    );

    success("Success Message Appeared");

    //------------------------------------

    const loginText =
        await loginSuccess.getText();

    console.log("\nApplication Message");

    console.log(loginText);

    //------------------------------------

    if (loginText.includes("Login successful")) {

        success("LOGIN TEST PASSED");

    } else {

        fail("LOGIN TEST FAILED");

    }

    await wait(2);

    //--------------------------------------------------
    // Registration Starts Here
    //--------------------------------------------------

    logStep(4, "REGISTRATION FORM");

    const fullName =
        await driver.findElement(
            By.id("reg-fullname")
        );

    const email =
        await driver.findElement(
            By.id("reg-email")
        );

    const regPassword =
        await driver.findElement(
            By.id("reg-password")
        );

    const age =
        await driver.findElement(
            By.id("reg-age")
        );

    const bio =
        await driver.findElement(
            By.id("reg-bio")
        );

    success("All Registration Fields Found");

    //------------------------------------

    info("Filling Form");

    await fullName.sendKeys("John Doe");

    await email.sendKeys("john@test.com");

    await regPassword.sendKeys("Password123");

    await age.sendKeys("25");

    await bio.sendKeys(
        "Learning Selenium from scratch."
    );

    success("Form Filled");

    await wait(2);

    console.log("\nReading Entered Values\n");

    console.log(
        "Full Name :",
        await fullName.getAttribute("value")
    );

    console.log(
        "Email :",
        await email.getAttribute("value")
    );

    console.log(
        "Password :",
        await regPassword.getAttribute("value")
    );

    console.log(
        "Age :",
        await age.getAttribute("value")
    );

    console.log(
        "Bio :",
        await bio.getAttribute("value")
    );

    await wait(2);

    console.log("\n🟢 PART 1 COMPLETED");

        //--------------------------------------------------
    // DROPDOWNS
    //--------------------------------------------------

    logStep(5, "DROPDOWN AUTOMATION");

    info("Finding Country Dropdown");

    const countryElement =
        await driver.findElement(
            By.id("reg-country")
        );

    const country =
        new Select(countryElement);

    success("Country Dropdown Found");

    //------------------------------------

    info("Selecting Country");

    await country.selectByVisibleText("India");

    success("India Selected");

    await wait(2);

    //------------------------------------

    const selectedCountry =
        await country.getFirstSelectedOption();

    console.log(
        "Selected Country :",
        await selectedCountry.getText()
    );

    //------------------------------------

    info("Printing All Countries");

    const countries =
        await country.getOptions();

    console.log(
        "Total Countries :",
        countries.length
    );

    for (const option of countries) {

        console.log(
            "🌍",
            await option.getText()
        );

    }

    await wait(2);

    //--------------------------------------------------
    // Department Dropdown
    //--------------------------------------------------

    info("Finding Department Dropdown");

    const departmentElement =
        await driver.findElement(
            By.id("reg-department")
        );

    const department =
        new Select(departmentElement);

    success("Department Dropdown Found");

    //------------------------------------

    await department.selectByValue("QA");

    success("QA Department Selected");

    //------------------------------------

    const selectedDepartment =
        await department.getFirstSelectedOption();

    console.log(
        "Department :",
        await selectedDepartment.getText()
    );

    await wait(2);

    //--------------------------------------------------
    // RADIO BUTTON
    //--------------------------------------------------

    logStep(6, "RADIO BUTTON AUTOMATION");

    const male =
        await driver.findElement(
            By.id("gender-male")
        );

    success("Male Radio Button Found");

    info("Selecting Male");

    await male.click();

    success("Male Selected");

    console.log(
        "Selected :",
        await male.isSelected()
    );

    await wait(2);

    //--------------------------------------------------
    // CHECKBOXES
    //--------------------------------------------------

    logStep(7, "CHECKBOX AUTOMATION");

    const selenium =
        await driver.findElement(
            By.id("skill-selenium")
        );

    const playwright =
        await driver.findElement(
            By.id("skill-playwright")
        );

    const api =
        await driver.findElement(
            By.id("skill-api")
        );

    success("Checkboxes Found");

    //------------------------------------

    info("Selecting Selenium");

    await selenium.click();

    console.log(
        "Selenium :",
        await selenium.isSelected()
    );

    //------------------------------------

    info("Selecting Playwright");

    await playwright.click();

    console.log(
        "Playwright :",
        await playwright.isSelected()
    );

    //------------------------------------

    info("Selecting API Testing");

    await api.click();

    console.log(
        "API Testing :",
        await api.isSelected()
    );

    await wait(2);

    //--------------------------------------------------
    // Registration Submit
    //--------------------------------------------------

    logStep(8, "REGISTRATION SUBMIT");

    const submit =
        await driver.findElement(
            By.id("reg-submit-btn")
        );

    success("Submit Button Found");

    info("Submitting Registration");

    await submit.click();

    //------------------------------------

    const registrationSuccess =
        await driver.wait(

            until.elementLocated(
                By.id("reg-success")
            ),

            5000

        );

    await driver.wait(

        until.elementIsVisible(
            registrationSuccess
        ),

        5000

    );

    success("Registration Submitted");

    console.log(
        await registrationSuccess.getText()
    );

    await wait(3);

    console.log("\n🟢 PART 2 COMPLETED");



    //--------------------------------------------------
// TABLE AUTOMATION
//--------------------------------------------------

logStep(9, "EMPLOYEE TABLE");

const rows =
    await driver.findElements(
        By.css("#employee-table tbody tr")
    );

success(`Total Employees : ${rows.length}`);

for (let i = 0; i < rows.length; i++) {

    console.log(
        `Employee ${i + 1} :`,
        await rows[i].getText()
    );

}

await wait(2);

//--------------------------------------------------
// SIMPLE ALERT
//--------------------------------------------------

logStep(10, "SIMPLE ALERT");

await driver.findElement(
    By.id("js-alert-btn")
).click();

const alert1 =
    await driver.switchTo().alert();

console.log(
    "Alert Text :",
    await alert1.getText()
);

await alert1.accept();

success("Simple Alert Accepted");

await wait(2);

//--------------------------------------------------
// CONFIRM ALERT
//--------------------------------------------------

logStep(11, "CONFIRM ALERT");

await driver.findElement(
    By.id("js-confirm-btn")
).click();

const confirmAlert =
    await driver.switchTo().alert();

console.log(
    "Confirm Text :",
    await confirmAlert.getText()
);

await confirmAlert.accept();

success("Confirm Accepted");

await wait(2);

//--------------------------------------------------
// PROMPT ALERT
//--------------------------------------------------

logStep(12, "PROMPT ALERT");

await driver.findElement(
    By.id("js-prompt-btn")
).click();

const promptAlert =
    await driver.switchTo().alert();

console.log(
    "Prompt Text :",
    await promptAlert.getText()
);

await promptAlert.sendKeys("Selenium");

await promptAlert.accept();

success("Prompt Submitted");

await wait(2);

//--------------------------------------------------
// IFRAME
//--------------------------------------------------

logStep(13, "IFRAME");

await driver.switchTo().frame(
    await driver.findElement(
        By.id("playground-iframe")
    )
);

success("Switched Into Frame");

const frameInput =
    await driver.findElement(
        By.id("iframe-input")
    );

await frameInput.sendKeys(
    "Hello From Selenium"
);

await driver.findElement(
    By.id("iframe-btn")
).click();

console.log(
    await driver.findElement(
        By.id("iframe-result")
    ).getText()
);

await driver.switchTo().defaultContent();

success("Returned To Main Page");

await wait(2);

//--------------------------------------------------
// NEW WINDOW
//--------------------------------------------------

logStep(14, "WINDOW HANDLES");

const parentWindow =
    await driver.getWindowHandle();

await driver.findElement(
    By.id("new-window-btn")
).click();

await driver.sleep(2000);

const handles =
    await driver.getAllWindowHandles();

console.log(
    "Total Windows :",
    handles.length
);

for (const handle of handles) {

    if (handle !== parentWindow) {

        await driver.switchTo().window(handle);

        console.log(
            "New Window Title :",
            await driver.getTitle()
        );

        await wait(2);

        await driver.close();

    }

}

await driver.switchTo().window(parentWindow);

success("Returned To Parent Window");

await wait(2);

//--------------------------------------------------
// FILE UPLOAD
//--------------------------------------------------

logStep(15, "FILE UPLOAD");

const upload =
    await driver.findElement(
        By.id("file-upload")
    );

const filePath =
    path.resolve(
        "./upload/sample.pdf"
    );

await upload.sendKeys(filePath);

success("File Selected");

await driver.findElement(
    By.id("upload-btn")
).click();

await wait(2);

console.log(
    await driver.findElement(
        By.id("upload-success")
    ).getText()
);

//--------------------------------------------------
// DYNAMIC CONTENT
//--------------------------------------------------

logStep(16, "DYNAMIC CONTENT");

await driver.findElement(
    By.id("load-dynamic-btn")
).click();

await driver.wait(

    async () => {

        const text =
            await driver.findElement(
                By.id("dynamicContent")
            ).getText();

        return text.includes("Dynamic");

    },

    5000

);

console.log(
    await driver.findElement(
        By.id("dynamicContent")
    ).getText()
);

await wait(2);

//--------------------------------------------------
// HIDDEN ELEMENT
//--------------------------------------------------

logStep(17, "HIDDEN ELEMENT");

await driver.findElement(
    By.id("reveal-hidden-btn")
).click();

const hidden =
    await driver.findElement(
        By.id("hidden-box")
    );

console.log(
    await hidden.getText()
);

await wait(2);

//--------------------------------------------------
// SPINNER
//--------------------------------------------------

logStep(18, "SPINNER");

await driver.findElement(
    By.id("show-spinner-btn")
).click();

await driver.wait(

    until.elementLocated(
        By.id("spinner-done")
    ),

    5000

);

await driver.wait(

    until.elementIsVisible(

        await driver.findElement(
            By.id("spinner-done")
        )

    ),

    5000

);

console.log(
    await driver.findElement(
        By.id("spinner-done")
    ).getText()
);

success("Loading Completed");

await wait(2);

console.log("\n🎉 ALL TESTS COMPLETED SUCCESSFULLY");

}
catch (error) {

    console.log(error);

}
finally {

    console.log("\n");
    console.log("Script Stopped Here (Part 1)");

    // Keep browser open while learning

    // await driver.quit();

}