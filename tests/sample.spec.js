import {test} from '@playwright/test';

test('learning locators', async({page}) => {
  await page.goto("https://www.flipkart.com/");
  try
  {
    await page.locator('//span[@class="b3wTlE"]').click();
  }
  catch
  {
    console.log("popup is not displayed");
  }
  await page.waitForTimeout(3000);
})


test('JS ALERTS', async({page}) => {
  await page.goto("https://vinothqaacademy.com/alert-and-popup/");
  await page.locator('//button[@name="alertbox"]').click();
  await page.waitForTimeout(2000);
  page.on('dialog',async dialog => {
    await page.waitForTimeout(2000);
    console.log(dialog.message());
    await dialog.accept();
  })
  await page.waitForTimeout(2000);
})

test('popup', async({page}) => {
  await page.goto("https://vinothqaacademy.com/alert-and-popup/");
  
  page.on('dialog', async dialog => {
    await page.waitForTimeout(2000);
    console.log(dialog.message());
    await dialog.accept("Hello");
  })
  await page.locator('[name="confirmalertbox"]').click();
  await page.waitForTimeout(3000);
})