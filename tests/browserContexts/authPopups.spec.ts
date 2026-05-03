import{test,expect} from '@playwright/test'

test('auth pop ups',async ({context})=>{
    const page=await context.newPage();
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();
})