import {test} from '@playwright/test'

test('Window Handling', async({browser}) => { 
  const browser1 = await browser.newContext();
  const page1 = await browser1.newPage();
  await page1.goto("https://www.amazon.in/");
  const newPage = browser1.waitForEvent('page');

  await page1.locator('//input[@id="twotabsearchtextbox"]').fill("iPhone 18 pro");
  await page1.locator('//input[@id="nav-search-submit-button"]').click();
  await page1.locator("//span[text()='iPhone 18 Pro (256 GB) - Burgundy']").click();
  const page2 = await newPage;
  await page2.waitForLoadState();
  await page2.locator('//input[@aria-labelledby="size_name_1-announce" and @name="1"]').click();
  await page2.locator('//input[@name="2" and @aria-posinset="7"]').click();
  await page2.locator('//input[@id="buy-now-button"]').click();
  await page2.locator('//input[@id="ap_email_login"]').fill("1234567890");
  await page2.locator('[id="continue-announce"]').click();
  await page2.locator('[id="ap_password"]').fill("Welcome@123");
  await page2.locator('[id="signInSubmit"]').click();
})

test('Myntra', async({browser}) => {
  const browser1 = await browser.newContext();
  const pages1 = await browser1.newPage();
  await pages1.goto("https://www.myntra.com/");
  const pagePromise = browser1.waitForEvent('page');
  await pages1.locator('[class="desktop-searchBar"]').fill("Men Dress wear");
  await pages1.locator('[class="myntraweb-sprite desktop-iconSearch sprites-search"]').click();
  await pages1.locator('//img[@class="img-responsive" and @alt="StyleCast x Revolte Mandarian Collar Neck Shirt With Shorts Co-Ords"]')
              .nth(1)
              .click();
})