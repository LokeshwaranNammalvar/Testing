import {test, expect} from '@playwright/test';

test('Assertion', async({page}) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator("//h2[text()='Test login']").click();
  await expect(page.locator("//h2[text()='Test login']"))
                    .toHaveText('Test login');
})