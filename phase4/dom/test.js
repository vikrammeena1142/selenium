import { Builder, By } from "selenium-webdriver";

console.clear();

console.log("========================================");
console.log("🚀 PHASE 4 REVISION");
console.log("📚 CHAPTER 3 - DOM");
console.log("========================================");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try{

console.log("\nSTEP 1");
console.log("Opening DOM Playground");

await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase4/dom/index.html");

await driver.sleep(2000);

console.log("✅ Page Loaded");

console.log("\nSTEP 2");
console.log("Finding Login Card");

const card =
await driver.findElement(
By.id("loginCard")
);

console.log("✅ Login Card Found");

await driver.sleep(1500);

console.log("\nSTEP 3");
console.log("Finding Login Form");

const form =
await driver.findElement(
By.id("loginForm")
);

console.log("✅ Form Found");

await driver.sleep(1500);

console.log("\nSTEP 4");
console.log("Searching Username INSIDE Form");

const username =
await form.findElement(
By.id("username")
);

await username.sendKeys("john");

console.log("✅ Username Typed");

await driver.sleep(1500);

console.log("\nSTEP 5");
console.log("Searching Password INSIDE Form");

const password =
await form.findElement(
By.id("password")
);

await password.sendKeys("123456");

console.log("✅ Password Typed");

await driver.sleep(1500);

console.log("\nSTEP 6");
console.log("Finding Button INSIDE Form");

const button =
await form.findElement(
By.id("loginBtn")
);

console.log(
"Button Text :",
await button.getText()
);

await driver.sleep(1500);

console.log("\nSTEP 7");
console.log("Finding Footer");

const footer =
await driver.findElement(
By.className("footer")
);

console.log(
await footer.getText()
);

await driver.sleep(1500);

console.log("\nSTEP 8");
console.log("Finding All Labels");

const labels =
await form.findElements(
By.tagName("label")
);

console.log(
"Labels Found :",
labels.length
);

for(const label of labels){

console.log(
await label.getText()
);

}

await driver.sleep(3000);

}
finally{

console.log("\nClosing Browser");

await driver.quit();

console.log("✅ Browser Closed");

}