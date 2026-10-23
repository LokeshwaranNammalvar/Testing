import {test} from '@playwright/test';

test('JS alert', async({page}) => {
  await page.goto("https://demoqa.com/alerts");
  
  page.on('dialog', async laptop => {
    await page.waitForTimeout(2000);
    await laptop.accept();

    const type = await laptop.type();
    console.log(type);

    const msg = await laptop.message();
    console.log(msg);
  })

  await page.locator('//button[@id="alertButton"]').click();
  await page.waitForTimeout(2000);
})

test('JS alert confirm', async ({page}) => {
  await page.goto('https://demoqa.com/alerts');

  page.on('dialog', async dialog => {
    await page.waitForTimeout(3000);

    await dialog.dismiss();

    const title = await dialog.type();
    console.log(title);

    const msg = await dialog.message();
    console.log(msg);
  })

  await page.locator('[id="confirmButton"]').click();
  await page.waitForTimeout(3000);
})

test('JS alert prompt', async({page}) => {
  await page.goto("https://demoqa.com/alerts");
  
  page.on('dialog', async popup => {
    await page.waitForTimeout(3000);

    await popup.accept("Hello welcome to JS");

    const title = await popup.type();
    console.log(title);

    const msg = await popup.message();
    console.log(msg);
  })

  await page.locator('//button[@id="promtButton"]').click();
  await page.waitForTimeout(3000);
})

test('General Popup', async ({page}) => {
  await page.goto("https://www.flipkart.com/");
  await page.waitForTimeout(3000);

  try
  {
    await page.locator('//span[@class="b3wTlE"]').click();
  }
  catch
  {
    console.log("Popup is not displayed");
  }
})