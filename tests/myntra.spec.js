import {test} from '@playwright/test'

test('Mytra', async({browser}) => {
  const context = await browser.newContext();
  const myntra = await context.newPage();
  await myntra.goto("https://www.myntra.com/");
  await myntra.locator('//a[@data-reactid="21" and @data-group="men"]').hover();
  await myntra.locator('//a[@class="desktop-categoryLink" and @data-reactid="96"]').click();

  await myntra.waitForTimeout(3000);
}) 