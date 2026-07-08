import { Builder, By } from "selenium-webdriver";

console.clear();

console.log("==========================================");
console.log("🚀 PHASE 4 REVISION");
console.log("📚 CHAPTER 5 - CSS SELECTORS");
console.log("==========================================");

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try{

await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase4/css/index.html");

await driver.sleep(2000);

console.log("\nSTEP 1");
console.log("Tag Selector");

const heading =
await driver.findElement(
By.css("h1")
);

console.log(
await heading.getText()
);

await driver.sleep(1500);

console.log("\nSTEP 2");
console.log("ID Selector");

const username =
await driver.findElement(
By.css("#username")
);

await username.sendKeys("John");

console.log("Username Typed");

await driver.sleep(1500);

console.log("\nSTEP 3");
console.log("Class Selector");

const course =
await driver.findElement(
By.css(".course")
);

console.log(
await course.getText()
);

await driver.sleep(1500);

console.log("\nSTEP 4");
console.log("Multiple Classes");

const login =
await driver.findElement(
By.css(".btn.success")
);

console.log(
await login.getText()
);

await driver.sleep(1500);

console.log("\nSTEP 5");
console.log("Attribute Selector");

const password =
await driver.findElement(
By.css("[name='password']")
);

await password.sendKeys("123456");

console.log("Password Typed");

await driver.sleep(1500);

console.log("\nSTEP 6");
console.log("Starts With");

console.log(
await driver.findElement(
By.css("[id^='user']")
).getAttribute("id")
);

await driver.sleep(1500);

console.log("\nSTEP 7");
console.log("Ends With");

console.log(
await driver.findElement(
By.css("[id$='Btn']")
).getAttribute("id")
);

await driver.sleep(1500);

console.log("\nSTEP 8");
console.log("Contains");

console.log(
await driver.findElement(
By.css("[class*='success']")
).getText()
);

await driver.sleep(1500);

console.log("\nSTEP 9");
console.log("Descendant Selector");

const input =
await driver.findElement(
By.css(".primary input")
);

console.log(
input.getAttribute("id")
);

await driver.sleep(1500);

console.log("\nSTEP 10");
console.log("Direct Child");

const card =
await driver.findElement(
By.css(".primary > h2")
);

console.log(
await card.getText()
);

await driver.sleep(1500);

console.log("\nSTEP 11");
console.log("Group Selector");

const elements =
await driver.findElements(
By.css("h2,button")
);

console.log(
"Total :",
elements.length
);

for(const element of elements){

console.log(
await element.getTagName(),
":",
await element.getText()
);

}

await driver.sleep(3000);

}
finally{

await driver.quit();

console.log("\nBrowser Closed");

}