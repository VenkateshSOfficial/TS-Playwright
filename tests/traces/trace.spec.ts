import{test,expect} from '@playwright/test'

test('screenshot',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const logo=page.getByAltText("Tricentis Demo Web Shop1");
    expect(logo).toBeVisible();
})