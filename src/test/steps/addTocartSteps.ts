import{Given, When, Then} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";

When('the user go to the {string} category', async function (string) {

    await pageFixture.page.locator("//span/span[contains(text(),'"+string+"')]").click()

  });


When('the user add the {string} book to the cart', async function (string) {
      
     const bookName = await pageFixture.page.locator("//a/strong[normalize-space()='"+string+"']")
     await bookName.locator("//parent::a//parent::div//following-sibling::app-addtocart/button").click()
    
  });


Then('the user should see the {string} in the cart', async function (string) {

     await pageFixture.page.locator("#mat-badge-content-0").click()
     await pageFixture.page.waitForTimeout(2000)
     const cartItem = await pageFixture.page.locator("//td/a").allTextContents()
     //console.log(cartItem)
     expect(cartItem).toContainEqual(string)
     
  });