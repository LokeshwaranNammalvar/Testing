import {test} from '@playwright/test';

test('mouse action', async({page}) => {
  await page.goto("https://demoqa.com/buttons");
  await page.mouse.move(500, 300);
  await page.waitForTimeout(3000);

  await page.locator('//button[@id="T6LJv"]').click({button : 'left'});
  await page.waitForTimeout(3000);
  await page.locator('[id="doubleClickBtn"]').dblclick();
  await page.waitForTimeout(3000);
})
 
test('drag and drop', async({page}) => {
  await page.goto("https://demoqa.com/dragabble");
  await page.locator('[id="draggableExample-tab-axisRestriction"]').click();
  const source = await page.locator('[id="restrictedX"]');
  const target = await page.locator('[id="restrictedY"]');

  await source.dragTo(target);
  await page.waitForTimeout(3000);
  await page.goto('https://demoqa.com/droppable');
  let starting = await page.locator('[id="draggable"]');
  let targets = await page.locator('//div[@id="droppable" and @class="drop-box ui-droppable ui-state-highlight"]');
  await starting.dragTo(targets);
})

test('amazon', async({page})=> {
  await page.goto("https://www.amazon.in/");
  await page.locator('[id="twotabsearchtextbox"]').fill('iPhone 16');
  await page.locator('[id="twotabsearchtextbox"]').press('Control+A');
  await page.locator('[id="twotabsearchtextbox"]').press('Backspace');
  await page.waitForTimeout(3000);
})