import{test,expect, chromium, firefox} from '@playwright/test'

// browser --> context ---> pages
// ---> new tab , window , popups
test.only('own browser',async ()=>{
    // creation of own browser
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();
    console.log(`total pages : ${context.pages().length}`);
    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page2.goto("https://www.google.com/");
})
test('context fixture',async ({context})=>{
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
})

test('browser fixture',async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
})