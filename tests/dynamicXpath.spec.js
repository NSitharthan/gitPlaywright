import { test } from '@playwright/test';

test('Validating Login Functionality', async ({ page }) => {

    await page.goto('https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles');

    //Username
    const userName = page.locator('//input[@name="username"]');
    await userName.fill('Admin');
    
    // //Password
    // const password = page.locator('//input[@placeholder="Password"]');
    // await password.fill('admin123');

    // //Click Login
    // const loginButton = page.locator('//button[@type="submit"]');
    // await loginButton.click();

    // //Click Admin
    // const adminPage = page.locator('//a[@class="oxd-main-menu-item active"]')
    // await adminPage.click();

    // //Admin username

    // //Print Page Title
    // const pageTitle = await page.title();
    // console.log('Page title:', pageTitle);

    // await page.waitForTimeout(100000);
});

/*

import { test, expect } from '@playwright/test';

test('Validating Login Functionality', async ({ page }) => {
  await page.goto('[demowebshop.tricentis.com](https://demowebshop.tricentis.com/login)');

  const pageTitle = await page.title();
  console.log('The Page Title is:', pageTitle);

  const userName = page.locator('//input[@id="Email"]');
  await userName.fill('Admin');
  await expect(userName).toHaveValue('Admin');

  const password = page.locator('//input[@id="Password"]');
  await password.fill('admin123');

  const loginButton = page.locator('//input[@type="submit" and @value="Log in"]');
  await loginButton.click();
});


test('Validating Login Functionality', async ({ page }) => {

    // const password = await page.locator('//input[@placeholder="Password"]');
    // await password.fill('admin123');
    // const loginButton = await page.locator('//button[@type="submit"]');
    // await loginButton.click();

    await page.locator('//div[@id="msdd"]').click()
    await page.getByText('Arabic').click()
    await page.getByText('French').click()
    await page.getByText('German').click()
    const elementXpath = page.locator('//select[@id="country"]')
    const gettingAttribute = await elementXpath.getAttribute('class')
    console.log(gettingAttribute)

})

*/