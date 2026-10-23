import {test} from '@playwright/test';

test('Window handling', async({page})=>{
  await page.goto("https://www.flipkart.com/search?q=iphone+17&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_6_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=iphone+17%7CMobiles&requestId=e22eb304-43a5-4724-8baa-cb11cf661f9f&as-backfill=on");
  const newPagePromise = page.waitForEvent('page');
  await page.locator('[alt="Apple iPhone 17 (White, 256 GB)"]').click();
  const newPage = await newPagePromise;
  await newPage.waitForLoadState();
  console.log(await newPage.title());
})

test('drag and drop', async({page}) => {
  await page.goto("https://demoqa.com/dragabble");
  await page.locator('[id="draggableExample-tab-axisRestriction"]').click();
  const source = await page.locator('//div[@id="restrictedX"]');
  const drop = await page.locator('[id="restrictedY"]');
  await source.dragTo(drop);
})

test('pagess', async({browser}) => {
  const browser1 = await browser.newContext();
  const amazon = await browser1.newPage();
  await amazon.goto("https://www.amazon.in/");
  await amazon.locator('[id="twotabsearchtextbox"]').fill('iPhone 16');
  await amazon.locator('[id="nav-search-submit-button"]').click();
  await amazon.locator('[aria-label="iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White"]').click();

})