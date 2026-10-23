# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learning.spec.js >> flipkart
- Location: tests\learning.spec.js:31:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('//div[@data-id="MOBHQV9YAZYYWY8A"]')
    - locator resolved to <div data-id="MOBHQV9YAZYYWY8A">…</div>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | 
  3  | test('open website' , async({page})=>{
  4  |   await page.goto('https://www.makemytrip.com/');
  5  |   await page.goto('https://www.flipkart.com/');
  6  |   await page.goto('https://www.redbus.in/');
  7  |   await page.goBack();
  8  |   await page.goForward();
  9  |   await page.reload();
  10 |   let url = await page.url();
  11 |   console.log(url);
  12 |   let title = await page.title();
  13 |   console.log(title);
  14 |   console.log(await page.title());
  15 |   await page.screenshot({path : "sreenshot1.png"});
  16 |   await page.goto('https://www.irctc.co.in/nget/train-search')
  17 |   await page.waitForTimeout(3000);
  18 |   await page.screenshot({path : "screenshot2.png"});
  19 | })
  20 | 
  21 | 
  22 | test('learning', async({page})=>{
  23 |   await page.goto("https://www.myntra.com/");
  24 |   await page.locator("//input[@class='desktop-searchBar']").fill('Dress For Men');
  25 |   await page.locator("//a[@data-reactid='1040']").click();
  26 |   await page.locator('img[title="VASTRAMAY Bandhani Printed Mandarin Collar Straight Kurta"]').click();
  27 |   await page.locator("//p[@class='size-buttons-unified-size' and text()='S']").click();
  28 |   await page.waitForTimeout(3000);
  29 | })
  30 | 
  31 | test.only('flipkart', async({page}) => {
  32 |   await page.goto("https://www.flipkart.com/");
  33 |   try{
  34 |     await page.locator("//span[@class='b3wTlE']").click();
  35 |   }
  36 |   catch{
  37 |     console.log("Popup is displayed");
  38 |   }
  39 |   await page.getByPlaceholder("Search for Products, Brands and More").first().fill("iphone 17");
  40 |   await page.getByRole('button', {name: 'Search for Products, Brands and More'}).click();
> 41 |   await page.locator('//div[@data-id="MOBHQV9YAZYYWY8A"]').click();
     |                                                            ^ Error: locator.click: Test timeout of 60000ms exceeded.
  42 |   // await page.getByTestId("MOBHQV9YAZYYWY8A").click();
  43 |   await page.waitForTimeout(3000);
  44 | })
```