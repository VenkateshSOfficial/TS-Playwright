import{test,expect} from '@playwright/test'
import { isUtf8 } from 'buffer';

import fs from 'fs';

// reading data from json

const jsonPath="./testData.json"
const loginData=JSON.parse(fs.readFileSync(jsonPath,'utf-8'))

for (const {email, password} of loginData) {
    test.describe(`login with multi data`, () => {
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