import {test, expect} from '@playwright/test'

test('learn assertions', async({page}) => {
  await page.goto("https://www.amazon.in/");
  const title = await page.title();
  console.log(title);

  await page.locator('[id="twotabsearchtextbox"]').fill("iPhone 16");

  await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
  await expect(page.locator('[id="twotabsearchtextbox"]')).toHaveValue("iPhone 17");
  await expect(page).toHaveURL('https://www.amazon.in/');
})