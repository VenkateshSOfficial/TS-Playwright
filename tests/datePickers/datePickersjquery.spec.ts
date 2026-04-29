import { test, expect, Page } from '@playwright/test'

async function datepicker(defaultDate: string, month: string, year: string, page: Page, isFuture: boolean) {
    while (true) {
        const currentMonth = await page.locator(".ui-datepicker-month").innerText();
        const currentYear = await page.locator(".ui-datepicker-year").innerText();
        // current date match --> break
        if (currentMonth === month && currentYear === year) {
            break;
        }

        if (isFuture) {
            await page.locator("a[data-handler='next']").click();
        } else {
            await page.locator("a[data-handler='prev']").click();
        }

    }
    const allDates = await page.locator(".ui-datepicker-calendar td").all();

    for (const date of allDates) {
        if (await date.innerText() === defaultDate) {
            await date.click();
            break;

        }
    }
    await page.pause();

}

test('date picker with input tag (jquery picker)', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#datepicker").fill("06/23/1991");
    await page.pause();
})
test('jquery logic future', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const year = "2030";
    const month = "March";
    const defaultDate = "20";
    await page.locator("#datepicker").click();

    while (true) {
        const currentMonth = await page.locator(".ui-datepicker-month").innerText();
        const currentYear = await page.locator(".ui-datepicker-year").innerText();
        // current date match --> break
        if (currentMonth === month && currentYear === year) {
            break;
        }
        // future date
        await page.locator("a[data-handler='next']").click();
    }
    const allDates = await page.locator(".ui-datepicker-calendar td").all();

    for (const date of allDates) {
        if (await date.innerText() === defaultDate) {
            await date.click();
            break;

        }
    }

    await page.pause();

})

test('jquery logic past', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const year = "1991";
    const month = "June";
    const defaultDate = "23";
    await page.locator("#datepicker").click();

    while (true) {
        const currentMonth = await page.locator(".ui-datepicker-month").innerText();
        const currentYear = await page.locator(".ui-datepicker-year").innerText();
        // current date match --> break
        if (currentMonth === month && currentYear === year) {
            break;
        }
        // future date
        await page.locator("a[data-handler='prev']").click();
    }
    const allDates = await page.locator(".ui-datepicker-calendar td").all();

    for (const date of allDates) {
        if (await date.innerText() === defaultDate) {
            await date.click();
            break;

        }
    }

    await page.pause();
})


test.only("function logic implementation", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#datepicker").click();
    await datepicker("23","June","1980",page,false);
})