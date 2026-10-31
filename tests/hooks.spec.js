import {test} from '@playwright/test'

test.beforeEach(async ({page})=> {
  console.log("Web page started");
  await page.goto('')
})