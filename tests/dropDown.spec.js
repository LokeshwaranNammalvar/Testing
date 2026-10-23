import {test} from '@playwright/test'

test('Select Drop Down', async({page}) => {
  await page.goto("https://demoqa.com/select-menu");
  await page.locator('//select[@id="oldSelectMenu"]').selectOption('4');
  await page.waitForTimeout(2000);
  await page.locator('//select[@id="oldSelectMenu"]').selectOption({label : 'Indigo'});
  await page.waitForTimeout(3000);
  await page.locator('//select[@id="oldSelectMenu"]').selectOption({index : 6});
  await page.waitForTimeout(3000);
})

test('General drop down', async({page}) => {
  await page.goto("https://demoqa.com/select-menu");
  await page.locator('[id="react-select-2-input"]').click();
  await page.getByText('Group 1, option 1', {exact : true}).click();
  await page.waitForTimeout(3000);
})
