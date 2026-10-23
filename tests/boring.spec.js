import {test, expect} from '@playwright/test'

test('Make My Trip', async({browser}) => {
  const browser1 = await browser.newContext({
    //permission is used to decline the location access.
    permissions : []
  });
  const makemytrip = await browser1.newPage();

  const popup = makemytrip.locator('[data-cy="outsideModal"]');
  await makemytrip.addLocatorHandler(popup, async () => {
    await popup.locator('[data-cy="closeModal"]').click();
  });

  await makemytrip.goto("https://www.makemytrip.com/");

  const title = await makemytrip.title();
  console.log(title);

  //used to select the journey starting location 
  await makemytrip.locator('[data-cy="menu_Holidays"]').click();
  await makemytrip.locator('[data-testid="fromCity"]').click();
  await makemytrip.locator('//input[@placeholder="Enter City"]').fill('Chennai');
  await makemytrip.locator('//div[@class="searchedCity"]').click();

  // used to select the destination location
  await makemytrip.locator('//div[@class="hdsw_inputBox selectHtlCity   grow-1"]').click();
  await makemytrip.locator('//input[@class="dest-search-input removeBoxShadow"]').fill('Goa');
  await makemytrip.locator("//div[text()='Goa']").click();

  //used to select the date
  await makemytrip.locator('//div[@aria-label="Thu Oct 29 2026"]/child::div').click();

  //used to select the people count
  await makemytrip.locator('//div[@data-testid="adult-increment-counter"]').click();
  await makemytrip.locator('[data-testid="child-increment-counter"]').click();
  await makemytrip.locator('[class="addButton addRoom-enabled"]').click();
  await makemytrip.locator('[data-testid="adult-decrement-counter"]').click();
  // await makemytrip.locator('//button[@class="applyBtn applyBtn-enabled"]').click();
  await makemytrip.getByRole('button', { name: 'APPLY' }).click();
  // await makemytrip.getByRole('button', {name : "APPLY"}).click();
  // await makemytrip.locator('//button[@class="applyBtn applyBtn-enabled"]/preceding-sibling::button').click();

  //filter(stay, hotel, mode of travel)
  await makemytrip.locator('//div[@class="filter-input-container "]').click();
  await makemytrip.locator('//div[@class="rc-slider-handle rc-slider-handle-2"]').press('ArrowLeft');
  await makemytrip.locator("//label[text()='Without Flights']").click();
  await makemytrip.locator("//label[text()='4']").click();
  await makemytrip.locator('//button[@class="action"]').click();

  //click search button
  await makemytrip.locator('//button[@id="search_button"]').click();

  // await expect(browser).toHaveTitle("MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday");
})