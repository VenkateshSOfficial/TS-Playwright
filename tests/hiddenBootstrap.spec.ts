import{test,expect} from '@playwright/test'

test('bootstarp',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole("textbox",{name:'username'}).fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole("button",{name:'Login'}).click();
    //await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(1000);
    await page.getByText("PIM").click();
    await page.waitForTimeout(1000);
    await page.locator("//label[text()='Job Title']/parent::div/following-sibling::div").click();
    await page.waitForTimeout(4000);
    const totalcount=await page.locator("//div[@role='option']/span").count();
    console.log(totalcount);
})