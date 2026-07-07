import { Builder, By } from "selenium-webdriver";

console.clear();

console.log("==================================");
console.log("🚀 PHASE 4");
console.log("📚 CHAPTER 7 - ACTIONS");
console.log("==================================");

const driver = await new Builder()
.forBrowser("chrome")
.build();

try{

await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/phase4/action/index.html");

await driver.sleep(2000);

console.log("\nSTEP 1");
console.log("Finding Hover Box");

const hoverBox =
await driver.findElement(
By.id("hoverBox")
);

console.log("Hovering...");

await driver
.actions()
.move({
origin:hoverBox
})
.perform();

await driver.sleep(2000);

console.log(
await driver.findElement(
By.id("hoverMessage")
).getText()
);

console.log("\nSTEP 2");

const doubleButton =
await driver.findElement(
By.id("doubleBtn")
);

console.log("Double Clicking");

await driver
.actions()
.doubleClick(doubleButton)
.perform();

await driver.sleep(1500);

console.log("\nSTEP 3");

const rightButton =
await driver.findElement(
By.id("rightBtn")
);

console.log("Right Clicking");

await driver
.actions()
.contextClick(rightButton)
.perform();

await driver.sleep(1500);

console.log("\nSTEP 4");

const drag =
await driver.findElement(
By.id("dragBox")
);

const drop =
await driver.findElement(
By.id("dropBox")
);

console.log("Dragging");

await driver
.actions()
.dragAndDrop(
drag,
drop
)
.perform();

await driver.sleep(3000);

}
finally{

await driver.quit();

console.log("Browser Closed");

}