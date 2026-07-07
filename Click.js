import { Builder, By } from "selenium-webdriver";

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

console.log("Opening Login Page...");
await driver.sleep(2000);
await driver.get("https://the-internet.herokuapp.com/login");

console.log("Finding Username...");
await driver.sleep(2000);
const username =
    await driver.findElement(By.id("username"));
    console.log("Typing Username...");
    await driver.sleep(2000);
await username.sendKeys("tomsmith");
await driver.sleep(2000);
console.log("Finding Password...");
const password =
    await driver.findElement(By.id("password"));
    console.log("Typing Password...");
    await driver.sleep(2000);
await password.sendKeys("SuperSecretPassword!");
await driver.sleep(2000);
console.log("Finding Login Button...");
const loginButton =
    await driver.findElement(By.css("button"));
    console.log("Clicking Login...");
    await driver.sleep(2000);
await loginButton.click();

console.log("Waiting...");
await driver.sleep(5000);

console.log("Closing Browser...");
await driver.quit();