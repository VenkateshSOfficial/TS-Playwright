import { test, expect } from '@playwright/test'

const testData: string[][] = [
    ["venkatesh230691@gmail.com", "CENA@wwe2014"],
    ["venkatesh240691@gmail.com", "Godisgreat@2026"]
]

for (const [email, password] of testData) {
    test.describe(``, () => {
        test(`login mail ${email} and ${password}`, async ({ page }) => {
            await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
            await page.locator("#userEmail").fill(email);
            await page.locator("#userPassword").fill(password);
            await page.locator("#login").click();
            const automationLogo = page.locator(".ng-star-inserted h3");
            await expect(automationLogo).toBeVisible();
        })
    })
}
