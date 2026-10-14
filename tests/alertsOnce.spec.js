import { test } from '@playwright/test'

test("Handling Alerts", async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    page.once('dialog', async (SimpleAlert) => {
    console.log('The Simple Alert Message is : ', SimpleAlert.message());
    await SimpleAlert.accept()
    })

    await page.locator("//button[@onclick='alertbox()']").click()
    await page.locator('(//a[@class="analystic"])[2]').click()
    page.once('dialog', async (ConfirmationAlert) => {
    console.log('The Confirmation Alert message is : ', ConfirmationAlert.message());
    await ConfirmationAlert.dismiss()
    })

    await page.locator("//button[@onclick='confirmbox()']").click()
    await page.locator('(//a[@class="analystic"])[3]').click()
    
    page.once('dialog', async (PromptAlert) => {
    console.log('The Prompt Alert Message is : ', PromptAlert.message())
    await PromptAlert.accept('Batch3Pm')
    })

    await page.locator("//button[@onclick='promptbox()']").click()
})


/*

3 Types of Alerts
--------------------->
1. Simple Alert
2. Confirmation Alert
3. Prompt Alert


Event Listener
1. Once --> Once listens for an event only one time. After the event occurs, the listener is automatically removed.
2. On --> On listens for an event every time it occurs until the page is closed or the listener is removed.

Difference Between Once() and On()
---------------------------------->

Featurepage                         Once()                          On()
Executes                            One time only                   Every time event occurs
Auto Removed                        Yes                             No
Best For                            Single alert/popup              Multiple alerts/popups
Memory Usage                        Lower                           Higher if not removed

*/