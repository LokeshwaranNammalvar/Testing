// import {test} from '@playwright/test'

// test('amazon add to cart', async({page}) => {
//   await page.goto("https://www.amazon.in/");
//   await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone 16");
//   await page.locator('//input[@id="nav-search-submit-button"]').click();
//   await page.locator('//span[@id="a-autoid-3"]').click();
//   await page.waitForTimeout(3000);
  
// })







import {test} from '../fixtures/testFixtures';


test('login',async ({loginPage}) => {
  loginPage.login
})









