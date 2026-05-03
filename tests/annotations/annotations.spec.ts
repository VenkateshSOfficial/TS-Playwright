/*
only
skip
fail
fixme
slow
*/

import {test,expect} from '@playwright/test'

test('test1',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const pageTitle=await page.title();
    console.log(`Title : ${pageTitle}`);
    await expect(page).toHaveTitle(pageTitle);
})

test('test2',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/");
    const pageTitle=await page.title();
    console.log(`Title : ${pageTitle}`);
    await expect(page).toHaveTitle(pageTitle);
})

test('test3',async({page,browserName})=>{
    test.skip(browserName==='chromium',"skip if browswr is chromium")
    await page.goto("https://rahulshettyacademy.com/");
    const pageTitle=await page.title();
    console.log(`Title : ${pageTitle}`);
    await expect(page).toHaveTitle(pageTitle);
})
test.fail('test4',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/");
    const pageTitle=await page.title();
    console.log(`Title : ${pageTitle}`);
    await expect(page).toHaveTitle(pageTitle);
})