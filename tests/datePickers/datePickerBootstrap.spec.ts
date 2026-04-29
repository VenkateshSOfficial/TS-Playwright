import { test,expect } from "@playwright/test";

test('',async({page})=>{
    await page.goto("https://www.booking.com/");
    await page.getByTestId("searchbox-dates-container").click();

   
})