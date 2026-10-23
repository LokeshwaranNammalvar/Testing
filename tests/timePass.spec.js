import {test} from '@playwright/test'

test('locators' , async({browser}) => {
  const browser1 =await browser.newContext({
    recordVideo : {
      dir : 'videos/'
    }
  });
  const page1 = await browser1.newPage();
  await page1.goto("");
  await page1.video.saveAs('videos/googlt-test.webm')
})
4
test("drop down", async({page}) => {
  await page.goto("https://demoqa.com/select-menu");
  await page.locator('(//div[@class="css-1xc3v61-indicatorContainer" and @aria-hidden="true"])[1]').click();
  await page.getByText('Group 1, option 1').click();
  await page.waitForTimeout(3000);
})

test('js alert', async({page}) => {
  await page.goto("https://demoqa.com/alerts");
  page.on('dialog', async dialog => {
    console.log(dialog.type());
    console.log(dialog.message());
    await page.waitForTimeout(3000);
    await dialog.accept();
  })
  await page.locator('[id="confirmButton"]').click();
})

test('iFrame', async({page}) => {
  await page.goto("https://vinothqaacademy.com/iframe/");
  await page.frameLocator('.iframe-container iframe')
            .locator('[id="nameInput"]')
            .fill('loke');
  
  await page.frameLocator('.iframe-container iframe')
            .locator('[id="roleInput"]')
            .fill("Playwright");
})


test('Flipkart Search', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    // Search input
    await page.getByPlaceholder(
        'Search for Products, Brands and More'
    ).first().fill('iPhone 16');

    // Search button
    await page.getByRole('button', {
        name: 'Search for Products, Brands and More'
    }).click();

});