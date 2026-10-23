import {test} from '@playwright/test'

test('open browser', async({page}) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').fill('Lokesh');
  await page.locator('#userEmail').fill('lokesh@gmail.com')
  await page.waitForTimeout(3000);
})

test('browser', async({browser}) => {
  const google = await browser.newContext();
  const flipkart = await google.newPage();
  await flipkart.goto("https://www.flipkart.com/");
  const amazon = await google.newPage();
  await amazon.goto("https://www.amazon.in/");
  const redBus = await google.newPage();
  await redBus.goto("https://www.redbus.in/");
})


test('browser learning', async({browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.flipkart.com/');

  const page2 = await context.newPage();
  await page2.goto("https://www.flipkart.com/");
})