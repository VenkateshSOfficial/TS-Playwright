import { test, expect } from '@playwright/test'

let webContext: any;

test.beforeAll(`login`, async ({ browser }) => {
    webContext = await browser.newContext();           // ← webContext is a BrowserContext
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("venkatesh230691@gmail.com");
    await page.locator("#userPassword").fill("CENA@wwe2014");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await webContext.storageState({ path: 'state.json' });  // ← save state after login
})

test(`execute`, async ({ browser }) => {
    const newContext = await browser.newContext({ storageState: 'state.json' });  // ← browser.newContext, not webContext.newContext
    const page = await newContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    // your test steps here
    await page.waitForLoadState();
})