import { test, expect } from '@playwright/test'

test('pagination', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    let hasNextPage = true;

    while (hasNextPage) {
        const nextPageButton = page.locator("a[aria-label='Next']");
        if (! await nextPageButton.isEnabled()) {
            hasNextPage = false;
            console.log("no more page");
        } else {
            const rows = page.locator("table.table.table-bordered tbody tr");
            const rowsCount = await rows.count();
            let found = false;

            for (let i = 0; i < rowsCount; i++) {
                const cells = rows.nth(i).locator("td");
                const productName = await cells.nth(0).innerText();
                const price = await cells.nth(1).innerText();
                const discountPrice = await cells.nth(2).innerText();

                if (productName === "Carrot") {
                    console.log(`Product name: ${productName}`)
                    console.log(`Price: ${price}`)
                    console.log(`Product name: ${discountPrice}`)
                    found = true;
                    break;
                }

            }
            if (found) break;
            await nextPageButton.click();
            await page.waitForTimeout(3000);

        }
    }
})