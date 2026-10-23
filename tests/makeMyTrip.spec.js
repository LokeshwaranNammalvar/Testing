import {test} from '@playwright/test';

test('make my trip', async({browser}) => {
  const context = await browser.newContext({
    permissions : ['geolocation'],
    geolocation : {
            latitude: 13.0827,
            longitude: 80.2707
    }
  });
  const page1 = await context.newPage();
  await page1.goto("https://www.makemytrip.com/");
  try
  {
    await page1.locator('[class="commonModal__close"]').click()
  }
  catch
  {
    console.log("Popup is not displayed");
  }
  await page1.locator('//li[@class="menu_Forex"]').click();
  await page1.locator('//div[@class="sc-be91b02f-1 iWSwUv"]').click();
  await page1.locator('//button[@id="DETECT_LOCATION_CTA"]').click();
  await page1.locator('[class="sc-697366de-1 kVntJI"]').click();
  await page1.getByPlaceholder('Enter Currency name').fill('Australian Dollor');
  await page1.getByTest('Australian Dollar').click();
  await page1.waitForTimeout(3000);
})