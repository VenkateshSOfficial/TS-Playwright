import {test, expect, chromium} from '@playwright/test';

test('pop ups',async()=>{
   const browser=await chromium.launch(); 
   const context=await browser.newContext();
   const firstPage=await context.newPage();
   await firstPage.goto("https://testautomationpractice.blogspot.com/");

   const [popup1,popup2]=await Promise.all([
    firstPage.waitForEvent('popup'),
    firstPage.locator("#PopUp").click()
   ])

   const allPopupWindows=context.pages();
   const count=allPopupWindows.length
   console.log(`pop up count : ${count}`);
   console.log(`1st popup title : ${await allPopupWindows[0].title()}`);
   console.log(`1st popup title : ${await allPopupWindows[1].title()}`);
   console.log(`1st popup title : ${await allPopupWindows[2].title()}`);
   
})