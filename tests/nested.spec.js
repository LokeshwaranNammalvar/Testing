import {test, expect} from '@playwright/test'

test('upload', async ({page})=>{
  await page.goto("https://demoqa.com/upload-download");
  await page.locator('//input[@label="Select a File"]').setInputFiles('D:\\playwright notes\\PLAYWRIGHT.txt');
  await page.waitForTimeout(3000);

  await expect(page.locator('//input[@label="Select a File"]')).toHaveValue("C:\\fakepath\\PLAYWRIGHT.txt");
})

test('download', async({page})=>{
  await page.goto("https://demoqa.com/upload-download");
  const downloadPromise = page.waitForEvent('download');
  await page.locator('[id="downloadButton"]').click();
  const download = await downloadPromise;
  console.log(await download.suggestedFilename());
  await download.saveAs(
    `downloads/${await download.suggestedFilename()}`
  );
  await download.saveAs('download/report.pdf');
  const failure = await download.failure();
  console.log(failure);
})