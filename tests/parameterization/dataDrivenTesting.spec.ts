import { test, expect } from '@playwright/test'

const serachItems = ['laptop', 'Gift card', 'smartphone', 'monitor']

//using loop (for of loop)

/*for(const item of serachItems){
    test(`login test ${item}`,async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator('#small-searchterms').fill(item);
    await page.locator("input[value='Search']").click();
    expect.soft(page.locator(".product-item h2 a").nth(0)).toContainText(item,{ignoreCase:true});
})
}*/

// using foreach function
test.describe(`searchingGroup`, () => {
    serachItems.forEach((item) => {
        test(`login test ${item}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/");
            await page.locator('#small-searchterms').fill(item);
            await page.locator("input[value='Search']").click();
            expect.soft(page.locator(".product-item h2 a").nth(0)).toContainText(item, { ignoreCase: true });
        })
    })

})

