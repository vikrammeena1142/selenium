import { Builder, By } from "selenium-webdriver";

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

await driver.get("file:///C:/Users/satna/OneDrive/Desktop/Selenium/Locator.html");

console.log("Page Opened");

/*--------------------------------------------------
ID
--------------------------------------------------*/
 await driver.sleep(5000);
const username =
    await driver.findElement(By.id("username"));

await username.sendKeys("Satnamtttyrtyrty");

console.log("Found Username using ID");


/*--------------------------------------------------
NAME
--------------------------------------------------*/

const password =
    await driver.findElement(By.name("pass"));

await password.sendKeys("123456668768");

console.log("Found Password using Name:");


/*--------------------------------------------------
CLASS NAME
--------------------------------------------------*/

const registerButton =
    await driver.findElement(By.className("btn"));

console.log(
    "First Button Found Using ClassName"
);


/*--------------------------------------------------
TAG NAME
--------------------------------------------------*/

const heading =
    await driver.findElement(By.tagName("h1"));

console.log(
    "Heading Text:",
    await heading.getText()
);


/*--------------------------------------------------
LINK TEXT
--------------------------------------------------*/

const forgotPassword =
    await driver.findElement(
        By.linkText("Forgot Password")
    );

console.log(
    "Found Forgot Password Link"
);


/*--------------------------------------------------
PARTIAL LINK TEXT
--------------------------------------------------*/

const createAccount =
    await driver.findElement(
        By.partialLinkText("Create")
    );

console.log(
    "Found Create Account Link"
);


/*--------------------------------------------------
CSS SELECTOR
--------------------------------------------------*/

const loginButton =
    await driver.findElement(
        By.css("#loginBtn")
    );

console.log(
    "Found Login Button using CSS"
);


/*--------------------------------------------------
XPATH
--------------------------------------------------*/

const loginButtonXPath =
    await driver.findElement(
        By.xpath("//button[@id='loginBtn']")
    );

console.log(
    "Found Login Button using XPath"
);

await driver.sleep(5000);

await driver.quit();