import{Given, When, Then} from "@cucumber/cucumber";
import{ expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";


Given('the user is on login page', async function () {

    await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
    await pageFixture.page.locator("//span[normalize-space()='Login']").click();
   
  });

When('the user enter valid username and password', async function () {

    await pageFixture.page.getByText('Username').fill("Vaishnavi");
    await pageFixture.page.getByPlaceholder('Password').fill("Vaishnavi@123");  
   
  });


When('the user clicks on the login button', async function () {

    await pageFixture.page.locator("(//span[contains(text(), 'Login')])[2]").click();
    await pageFixture.page.waitForTimeout(2000);
   
  });


Then('the user is logged in succesfully', async function () {

    await pageFixture.page.waitForTimeout(2000);
    let username = await pageFixture.page.locator("(//a/span[@class = 'mdc-button__label']/span)[1]").textContent()
    //console.log(username);
    expect(username).toContain("Vaishnavi")
   
  });
