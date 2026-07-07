import { Builder, By, until } from "selenium-webdriver";

console.clear();

console.log("====================================");
console.log("🚀 PHASE 4 REVISION");
console.log("📚 CHAPTER 8 - SYNCHRONIZATION");
console.log("====================================");

const driver = await new Builder()

.forBrowser("chrome")

.build();

try{

await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase4/synchronization/index.html");

await driver.sleep(2000);

console.log("\nSTEP 1");
console.log("Click Load Button");

const loadButton=

await driver.findElement(By.id("loadBtn"));

await loadButton.click();

console.log("Clicked");

await driver.sleep(1000);

console.log("\nSTEP 2");
console.log("Trying Without Wait");

try{

await driver.findElement(By.id("username"));

console.log("Found");

}catch(error){

console.log("❌ Username Not Found Yet");

}

await driver.sleep(2000);

console.log("\nSTEP 3");
console.log("Using Explicit Wait");

const username=

await driver.wait(

until.elementLocated(

By.id("username")

),

5000

);

console.log("✅ Username Located");

await driver.wait(

until.elementIsVisible(

username

),

5000

);

console.log("✅ Username Visible");

await username.sendKeys("John");

await driver.sleep(1500);

console.log("\nSTEP 4");
console.log("Finding Password");

const password=

await driver.findElement(By.id("password"));

await password.sendKeys("123456");

console.log("Password Typed");

await driver.sleep(1500);

console.log("\nSTEP 5");
console.log("Waiting For Login Button");

const login=

await driver.wait(

until.elementLocated(

By.id("loginBtn")

),

5000

);

await driver.wait(

until.elementIsEnabled(login),

5000

);

console.log("Login Button Ready");

await login.click();

await driver.sleep(2000);

console.log("\nSTEP 6");
console.log("Waiting For Title");

await driver.wait(

until.titleContains(

"Synchronization"

),

5000

);

console.log(

await driver.getTitle()

);

await driver.sleep(2000);

}
finally{

await driver.quit();

console.log("\nBrowser Closed");

}