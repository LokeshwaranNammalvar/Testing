import {test} from '@playwright/test';

test('open website' , async({page})=>{
  await page.goto('https://www.makemytrip.com/');
  await page.goto('https://www.flipkart.com/');
  await page.goto('https://www.redbus.in/');
  await page.goBack();
  await page.goForward();
  await page.reload();
  let url = await page.url();
  console.log(url);
  let title = await page.title();
  console.log(title);
  console.log(await page.title());
  await page.screenshot({path : "sreenshot1.png"});
  await page.goto('https://www.irctc.co.in/nget/train-search')
  await page.waitForTimeout(3000);
  await page.screenshot({path : "screenshot2.png"});
})


test('learning', async({page})=>{
  await page.goto("https://www.myntra.com/");
  await page.locator("//input[@class='desktop-searchBar']").fill('Dress For Men');
  await page.locator("//a[@data-reactid='1040']").click();
  await page.locator('img[title="VASTRAMAY Bandhani Printed Mandarin Collar Straight Kurta"]').click();
  await page.locator("//p[@class='size-buttons-unified-size' and text()='S']").click();
  await page.waitForTimeout(3000);
})

test.only('flipkart', async({page}) => {
  await page.goto("https://www.flipkart.com/");
  try{
    await page.locator("//span[@class='b3wTlE']").click();
  }
  catch{
    console.log("Popup is displayed");
  }
  await page.getByPlaceholder("Search for Products, Brands and More").first().fill("iphone 17");
  await page.getByRole('button', {name: 'Search for Products, Brands and More'}).click();
  await page.locator('//div[@data-id="MOBHQV9YAZYYWY8A"]').click();
  // await page.getByTestId("MOBHQV9YAZYYWY8A").click();
})