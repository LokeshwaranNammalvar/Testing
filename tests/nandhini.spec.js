import {test} from '@playwright/test'

test('Locators', async({page}) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').fill("Playwright");
  await page.locator('#userEmail').fill('playwright@gmail.com');
  await page.locator('#currentAddress').fill('Porur,Chennai');
  await page.locator('#permanentAddress').fill("Chennai");
  await page.locator('.btn.btn-primary').click();
  await page.waitForTimeout(3000);
})

test('amazon', async({page}) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('//input[@id="twotabsearchtextbox"]').fill('Iphone 18 pro');
  await page.locator('//input[@id="nav-search-submit-button"]').click();
  await page.waitForTimeout(3000);
})

test('Bus', async({page}) => {
  await page.goto("https://www.redbus.in/");
  await page.locator('//img[@class="lobImg___93430c" and @alt="Online Train Tickets Booking"]').click();
  await page.waitForTimeout(3000);
})