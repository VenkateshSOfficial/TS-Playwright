import { test, expect, request } from '@playwright/test'

const loginPayload = {
    userEmail: "venkatesh230691@gmail.com",
    userPassword: "CENA@wwe2014"
}
let token: string;
test.beforeAll(`execute beofre all tests`, async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
        },
    )
    expect(loginResponse.ok()).toBeTruthy();
    const statusCode = loginResponse.status();
    expect(statusCode).toBe(200);
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(`Token : ${token}`);
})

test(`basic test`, async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token)
    await page.goto("https://rahulshettyacademy.com/client");
    const logo = page.locator(".ng-star-inserted h3");
    await expect(logo).toBeVisible();

    const allProducts:string[]=await page.locator(".card-body b").allInnerTexts();
    for(const product of allProducts){
        console.log(product);
    }
})