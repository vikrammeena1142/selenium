import { Builder, By } from "selenium-webdriver";

console.clear();

console.log("======================================");
console.log("🚀 PHASE 4 REVISION");
console.log("📚 CHAPTER 4 - HTML");
console.log("======================================");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try{

console.log("\nSTEP 1");
console.log("Opening HTML Playground");

await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase4/html/index.html");

await driver.sleep(2000);

console.log("✅ Page Loaded");

console.log("\nSTEP 2");
console.log("Reading Heading");

const heading =
await driver.findElement(By.id("heading"));

console.log(
"Heading :",
await heading.getText()
);

console.log(
"Tag Name :",
await heading.getTagName()
);

await driver.sleep(1500);

console.log("\nSTEP 3");
console.log("Reading Username Attributes");

const username =
await driver.findElement(By.id("username"));

console.log(
"id :",
await username.getAttribute("id")
);

console.log(
"name :",
await username.getAttribute("name")
);

console.log(
"type :",
await username.getAttribute("type")
);

console.log(
"placeholder :",
await username.getAttribute("placeholder")
);

console.log(
"value :",
await username.getAttribute("value")
);

await driver.sleep(2000);

console.log("\nSTEP 4");
console.log("Reading Image");

const logo =
await driver.findElement(By.id("logo"));

console.log(
"src :",
await logo.getAttribute("src")
);

console.log(
"alt :",
await logo.getAttribute("alt")
);

await driver.sleep(1500);

console.log("\nSTEP 5");
console.log("Checking Readonly Field");

const readonly =
await driver.findElement(By.id("readonlyBox"));

console.log(
"readonly :",
await readonly.getAttribute("readonly")
);

await driver.sleep(1500);

console.log("\nSTEP 6");
console.log("Checkbox Status");

const checkbox =
await driver.findElement(By.id("remember"));

console.log(
"Selected :",
await checkbox.isSelected()
);

await driver.sleep(1500);

console.log("\nSTEP 7");
console.log("Disabled Button");

const disabled =
await driver.findElement(By.id("disabledBtn"));

console.log(
"Enabled :",
await disabled.isEnabled()
);

await driver.sleep(1500);

console.log("\nSTEP 8");
console.log("Dropdown");

const option =
await driver.findElement(
By.css("option[selected]")
);

console.log(
"Selected Country :",
await option.getText()
);

await driver.sleep(1500);

console.log("\nSTEP 9");
console.log("Reading Link");

const docs =
await driver.findElement(By.id("docs"));

console.log(
"Text :",
await docs.getText()
);

console.log(
"Href :",
await docs.getAttribute("href")
);

await driver.sleep(2000);

console.log("\nSTEP 10");
console.log("Visibility Check");

console.log(
"Heading Visible :",
await heading.isDisplayed()
);

console.log(
"Button Enabled :",
await driver.findElement(By.id("loginBtn"))
    .then(e=>e.isEnabled())
);

await driver.sleep(3000);

}
finally{

console.log("\nClosing Browser");

await driver.quit();

console.log("✅ Browser Closed");

}