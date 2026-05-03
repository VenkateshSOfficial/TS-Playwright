import { test, expect } from '@playwright/test'

// simple alert, conformation alert, prompt alert

test('simple dialog', async ({ page }) => {
    // by default dialogs are auto dismissed my js
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#alertBtn").click();
    await page.waitForTimeout(3000);
})

test('simple dialog practice', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // registering a dialog handler
    page.on('dialog', (dialog) => {
        console.log(`Dialog type : ${dialog.type()}`);
        console.log(`Dialog text:${dialog.message()}`);
        dialog.accept();
    });
    await page.locator("#alertBtn").click(); // opens dialog
})

test('confirmation dialog practice', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', (dialog) => {
        console.log(`Dialog type : ${dialog.type()}`);
        console.log(`Dialog text:${dialog.message()}`);
        //dialog.accept(); // close dialog by accepting
        dialog.dismiss(); // close dialog by dismissing
    })
    await page.locator("#confirmBtn").click();
    console.log(await page.locator("#demo").innerText());
})

test.only('prompt alert practice', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',(dialog)=>{
        console.log(`Dialog type : ${dialog.type()}`);
        console.log(`Dialog text : ${dialog.message()}`);
        console.log(`Dialog default value : ${dialog.defaultValue()}`);
        dialog.accept("Kaushik"); // input can be modified only duirng the accept
    })
    await page.locator("#promptBtn").click();
    const result=await page.locator("#demo").innerText();
    await expect(page.locator("#demo")).toHaveText("Hello Kaushik! How are you today?");
    await page.pause();
})