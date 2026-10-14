import { test } from '@playwright/test';

test('Handling Single Dropdown', async ({ page }) =>{
    await page.goto('https://letcode.in/dropdowns/');

    // Single Dropdown
    const singleDropdown = page.locator("//select[@id='fruits']");
    await singleDropdown.selectOption({ index: 4 });
    const selectedElement = await singleDropdown.locator('option:checked').textContent();
    console.log('The Selected Value in the Fruits Dropdown is:', selectedElement);
});

test('Handling Multiple Dropdown', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns/');
    
    // Multiple Dropdown
    const multipleDropdown = page.locator("//select[@id='superheros']");
    await multipleDropdown.selectOption([{ value: 'bt' },{ index: 7 },{ label: 'Spider-Man' }]);
    const selectedValues = await multipleDropdown.locator('option:checked').allTextContents();
    console.log('The Selected Values in the Superheroes Dropdown are:', selectedValues);
});

test('Validating Text', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns/');

    const textValidate = await page.locator("//label[@for='fruits']").textContent();
    console.log('The Value of the Text is : ', textValidate);
    await page.waitForTimeout(6000);
});

//3 Types of locating the elements from the dropDown
    // 1. selectByValue ---> Value
    // 2. selectByIndex ---> Index
    // 3. selectByVisibleText ---> Label
