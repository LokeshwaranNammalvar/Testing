import {test} from '@playwright/test';

test('select drop down', async({page}) => {
  await page.goto("https://demoqa.com/select-menu");
  await page.waitForTimeout(3000);
  await page.locator('//select[@id="oldSelectMenu"]').selectOption('4');
  await page.waitForTimeout(3000);
  await page.locator('[id="oldSelectMenu"]').selectOption('8');
  await page.waitForTimeout(3000);

  await page.locator('[id="oldSelectMenu"]').selectOption( {label : 'Blue'} );
  await page.waitForTimeout(3000);

  await page.locator('[id="oldSelectMenu"]').selectOption( {index : 7} );
  await page.waitForTimeout(3000);

  // multiple selection drop down for values
  await page.locator('[id="oldSelectMenu"]').selectOption(['8', '10', '4']);

  // multiple selection drop down for visible words
  await page.locator('[id="oldSelectMenu"]').selectOption([ {lable :'Green'}, {label : 'Blue'}]);

  // multiple selection drop down for index values
  await page.locator('[id="oldSelectMenu"]').selectOption([ {index : 8} , {index : 4} , {index : 7}]);
})

test('general drop down', async({page}) => {
  await page.goto("https://demoqa.com/select-menu");
  await page.waitForTimeout(3000);
  await page.locator('(//div[@class="css-1xc3v61-indicatorContainer"])[1]').click();
  await page.waitForTimeout(3000);
  await page.getByText('Group 1, option 2').click();
  await page.waitForTimeout(3000);

  // general drop down multi selection 
  await page.locator('[id="react-select-3-input"]').click();
  
  await page.getByText('Mrs.', {exact : true}).click();
  await page.getByText('Mr.', {exact : true}).click();
  await page.getByText('Prof.', {exact : true}).click();
  await page.waitForTimeout(3000);


})