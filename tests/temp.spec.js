import {test} from '@playwright/test'

test('amazon', async({browser}) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  await page1.goto("https://www.amazon.in/");
  const promisePage = context.waitForEvent('page');
  await page1.locator('[id="twotabsearchtextbox"]').fill('iPhone 18 pro');
  await page1.locator('[id="nav-search-submit-button"]').click();
  await page1.locator("//span[text()='iPhone 18 Pro (256 GB) - Burgundy']").click();
  const page2 = await promisePage;
  await page2.waitForLoadState();
  await page2.locator('//input[@aria-labelledby="size_name_1-announce" and  @name="1"]').click();
  await page2.getByRole('radio').nth(1).click();
  await page2.waitForTimeout(3000);
  await page2.locator('[id="buy-now-button"]').click();
})