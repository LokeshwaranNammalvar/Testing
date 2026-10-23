import {test} from '@playwright/test';

// test('screenshot', async({page})=>{
//   await page.goto("https://www.amazon.in/");
//   await page.waitForTimeout(2000);
//   await page.screenshot({ path: "screenshot1.png"});
// })

// test('open context', async({context})=>{
//     const page1 = await context.newPage();
//     await page1.goto("https://www.amazon.in/");
//     const page2 = await context.newPage();
//     await page2.goto("https://www.flipkart.com/");
//     const swiggy = await context.newPage();
//     await swiggy.goto("https://www.swiggy.com/");
// })


// test('browser', async({browser})=>{
//   const browsers = await browser.newContext({
//     recordVideo : {
//       dir : 'videos/'
//     }
//   });
//   // const makeMyTrip = await browsers.newPage();
//   // await makeMyTrip.goto("https://www.makemytrip.com/");
//   const instragram = await browsers.newPage();
//   await instragram.goto("https://www.instagram.com/");
//   const facebook = await browsers.newPage();
//   await facebook.goto("https://www.facebook.com/");

//   const browser2 = await browser.newContext({
//     recordVideo : {
//       dir :'video/'
//     }
//   });
//   const flipkart = await browser2.newPage();
//   await flipkart.goto("https://www.flipkart.com/");
// })


test('login page', async({browser})=>{
  const google = await browser.newContext();
  const makeMyTrip = await google.newPage();
  await makeMyTrip.goto("https://www.makemytrip.com/");
  const flipkart = await google.newPage();
  await flipkart.goto("https://www.flipkart.com/");
  const mytra = await google.newPage();
  await mytra.goto("https://www.myntra.com/");

  const browser2 = await browser.newContext();
  const amazon = await browser2.newPage();
  await amazon.goto("https://www.amazon.in/");
})

// test('amazon cart', async({page}) => {
//   await page.goto("https://www.amazon.in/");
//   await page.locator(".nav-cart-icon.nav-sprite").click();
//   await page.waitForTimeout(3000);
// })

// test('makeMyTrip', async({page})=>{
//   await page.goto("https://www.makemytrip.com/");
//   await page.locator(".chNavIcon.appendBottom2.chSprite.chTrains.inactive").click();
//   await page.waitForTimeout(2000);
// })

// test('open browser', async({browser}) => {
//   const browser1 = await browser.newContext();
//   const page1 = await browser1.newPage();
//   await page1.goto("https://www.flipkart.com/");

//   const page2 = await browser1.newPage();
//   await page2.goto("https://www.flipkart.com/");
// })


// test('drop down', async({page}) => {
//   await page.goto("https://demoqa.com/select-menu");
//   await page.locator('//select[@id="oldSelectMenu"]').selectOption("8");
//   await page.waitForTimeout(2000);
//   await page.locator('[id="oldSelectMenu"]').selectOption({label : "Magenta"});
//   await page.waitForTimeout(3000);
//   await page.locator('#oldSelectMenu').selectOption( {index : 6});
//   await page.waitForTimeout(3000);
// })

// test('flipkart', async({page})=> {
//   await page.goto("https://www.flipkart.com/");
//   try
//   {
//     await page.locator('[class="b3wTlE"]').click();
//   }
//   catch
//   {
//     console.log("Popup is not displayed");
//   }

// })

