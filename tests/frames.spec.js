import { test } from '@playwright/test';

test('Handling Frames', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Frames.html');

  const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]');

  await singleFrame.locator('//input[@type="text"]').fill('Handled SingleFrame');

  await page.locator('(//a[@class="analytic"])[2]').click();

  const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]');

  const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]');

  await innerFrame.locator('//input[@type="text"]').fill('Handled Nested Frame');

  await page.waitForTimeout(50000)
  
})