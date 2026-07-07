import { Builder, By } from "selenium-webdriver";

console.clear();

console.log("==========================================");
console.log("🚀 PHASE 4 REVISION");
console.log("📚 CHAPTER 6 - XPATH");
console.log("==========================================");

const driver = await new Builder()
.forBrowser("chrome")
.build();

try{

await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase4/xpath/index.html");

await driver.sleep(2000);

console.log("\nSTEP 1");
console.log("Tag XPath");

console.log(
await driver.findElement(
By.xpath("//h1")
).getText()
);

await driver.sleep(1500);

console.log("\nSTEP 2");
console.log("Attribute XPath");

const username =
await driver.findElement(
By.xpath("//input[@id='user_001']")
);

await username.sendKeys("John");

console.log("Username Typed");

await driver.sleep(1500);

console.log("\nSTEP 3");
console.log("Multiple Attributes");

const password =
await driver.findElement(
By.xpath("//input[@id='pass_001' and @type='password']")
);

await password.sendKeys("123456");

console.log("Password Typed");

await driver.sleep(1500);

console.log("\nSTEP 4");
console.log("Text()");

console.log(
await driver.findElement(
By.xpath("//button[text()='Login']")
).getText()
);

await driver.sleep(1500);

console.log("\nSTEP 5");
console.log("contains()");

console.log(
await driver.findElement(
By.xpath("//input[contains(@id,'user')]")
).getAttribute("id")
);

await driver.sleep(1500);

console.log("\nSTEP 6");
console.log("starts-with()");

console.log(
await driver.findElement(
By.xpath("//input[starts-with(@id,'pass')]")
).getAttribute("id")
);

await driver.sleep(1500);

console.log("\nSTEP 7");
console.log("Parent");

console.log(
await driver.findElement(
By.xpath("//input[@id='user_001']/..")
).getAttribute("class")
);

await driver.sleep(1500);

console.log("\nSTEP 8");
console.log("Ancestor");

console.log(
await driver.findElement(
By.xpath("//input[@id='user_001']/ancestor::form")
).getAttribute("id")
);

await driver.sleep(1500);

console.log("\nSTEP 9");
console.log("Descendant");

const button =
await driver.findElement(
By.xpath("//form/descendant::button")
);

console.log(
await button.getText()
);

await driver.sleep(1500);

console.log("\nSTEP 10");
console.log("Following Sibling");

console.log(
await driver.findElement(
By.xpath("//label[text()='Username']/following-sibling::input")
).getAttribute("id")
);

await driver.sleep(1500);

console.log("\nSTEP 11");
console.log("Preceding Sibling");

console.log(
await driver.findElement(
By.xpath("//input[@id='pass_001']/preceding-sibling::label")
).getText()
);

await driver.sleep(1500);

console.log("\nSTEP 12");
console.log("last()");

console.log(
await driver.findElement(
By.xpath("(//li)[last()]")
).getText()
);

await driver.sleep(1500);

console.log("\nSTEP 13");
console.log("position()");

console.log(
await driver.findElement(
By.xpath("(//li)[position()=2]")
).getText()
);

await driver.sleep(1500);

console.log("\nSTEP 14");
console.log("normalize-space()");

console.log(
await driver.findElement(
By.xpath("//button[normalize-space()='Login']")
).getText()
);

await driver.sleep(3000);

}
finally{

await driver.quit();

console.log("\nBrowser Closed");

}