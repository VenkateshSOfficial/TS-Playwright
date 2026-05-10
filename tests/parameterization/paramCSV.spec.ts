/*
pre-requisite : 
npm install csv-parse
*/

import{test,expect} from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'

interface LoginData {
  email: string;
  password: string;
}
const csvPath="./testData/data.csv";
const fileContent=fs.readFileSync(csvPath,'utf-8');
const records:LoginData[]=parse(fileContent,{columns:true,skip_empty_lines:true})


    test.describe(`login with multi data`, () => {
       for(const data of records){
         test(`login mail ${data.email} and ${data.password}`, async ({ page }) => {
            await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
            await page.locator("#userEmail").fill(data.email);
            await page.locator("#userPassword").fill(data.password);
            await page.locator("#login").click();
            const automationLogo = page.locator(".ng-star-inserted h3");
            await expect(automationLogo).toBeVisible();
        })
       }
    })
