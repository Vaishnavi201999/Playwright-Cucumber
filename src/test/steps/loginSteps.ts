import{Given, When, Then} from "@cucumber/cucumber";
import{chromium, Browser, Page, expect, BrowserContext} from "@playwright/test"

let browser: Browser;
let context: BrowserContext;
let page: Page;

Given('the user is on login page', async function () {

    browser = await chromium.launch({headless: false});
    context = await browser.newContext()
    page = await context.newPage();
    await page.goto('https://bookcart.azurewebsites.net/');
    await page.locator("//span[normalize-space()='Login']").click();
   
  });

When('the user enter valid username and password', async function () {

    await page.getByText('Username').fill("Vaishnavi");
    await page.getByPlaceholder('Password').fill("Vaishnavi@123");  
   
  });


When('the user clicks on the login button', async function () {

    await page.locator("(//span[contains(text(), 'Login')])[2]").click();
    await page.waitForTimeout(2000);
   
  });


Then('the user is logged in succesfully', async function () {

    await page.waitForTimeout(2000);
    let username = await page.locator("(//a/span[@class = 'mdc-button__label']/span)[1]").textContent()
    console.log(username);
    expect(username).toContain("Vaishnavi")
    await browser.close();
   
  });
