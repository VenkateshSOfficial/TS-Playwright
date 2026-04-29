import { test, expect } from "@playwright/test";

test("first basic program", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  let pageTitle=await page.title();
  console.log(`Title : ${pageTitle}`);
  await expect(page).toHaveTitle("Let's Shop");
});