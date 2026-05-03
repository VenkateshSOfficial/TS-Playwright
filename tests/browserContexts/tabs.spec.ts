import {test, expect, chromium} from '@playwright/test';

test("handle tabs",async ()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const defaultPage=await context.newPage();
    await defaultPage.goto("https://testautomationpractice.blogspot.com/");
    const [childPage]=await Promise.all([
    context.waitForEvent('page'),
    defaultPage.getByRole('button',{name:'New Tab'}).click()
    ])

    // working in parallel with the 2 tabs
    // approach 1
    // get the total pages

    const pages=context.pages();
    console.log(`total pages : ${pages.length}`);

    console.log(`Title of 1st page : ${await pages[0].title()}`)
    console.log(`Title of 2nd page : ${await pages[1].title()}`)

    console.log("*****************************************************");
    // approach 2

    console.log(`Title of 1st page : ${await defaultPage.title()}`)
    console.log(`Title of 2nd page : ${await childPage.title()}`)
})