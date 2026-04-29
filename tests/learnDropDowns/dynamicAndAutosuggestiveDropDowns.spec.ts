import {test,expect} from '@playwright/test'

test('learn autosuggest dropdown',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
    await page.getByPlaceholder("Type to Select").fill("ind");
    const allCountries=page.locator("//li[@role='presentation']/a");
    await allCountries.first().waitFor({ state: 'visible' });
    for(let i=0;i<await allCountries.count();i++){
        const text=await allCountries.nth(i).innerText();
        if(text==="India"){
            await allCountries.nth(i).click();
            await page.waitForTimeout(3000);
        }
        console.log(text);
    }
})