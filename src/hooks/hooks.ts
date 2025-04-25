import{Before, BeforeAll, After, AfterAll} from "@cucumber/cucumber";
import{ chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;
let page: Page

BeforeAll(async function(){

    browser = await chromium.launch({headless: false});
})

Before(async function(){

    context = await browser.newContext();
    page = await context.newPage()
    pageFixture.page = page;

})

After(async function(){
    await page.close()
})

AfterAll(async function(){
    await browser.close()
})