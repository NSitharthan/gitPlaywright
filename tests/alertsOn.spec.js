import { test } from '@playwright/test'

test('Handling Multiple Alerts', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Alerts.html')

    page.on('dialog', async (MultipleAlertsHandling) => {
    console.log('The Message for the Alerts : ', MultipleAlertsHandling.message());
    await MultipleAlertsHandling.accept('Multiple Alerts Handled');
});

    await page.locator("//button[@onclick='alertbox()']").click();
    await page.locator('(//a[@class="analystic"])[2]').click();
    await page.locator("//button[@onclick='confirmbox()']").click();
    await page.locator('(//a[@class="analystic"])[3]').click();
    await page.locator("//button[@onclick='promptbox()']").click();

});