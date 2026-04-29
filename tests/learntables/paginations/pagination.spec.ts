import { test, expect } from '@playwright/test'

test('pagination', async ({ page }) => {

    /*const rows=await page.locator("#example tbody tr").all();
        for(let row of rows){
            const rowtext=await row.innerText();
        
        }*/
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
    let hasMorePages = true;
    while (hasMorePages) {
        const nextbutton = page.locator("button[aria-label='Next']");
        if (! await nextbutton.isEnabled()) {
            console.log("no pages");
            hasMorePages = false;
        } else {
            await nextbutton.click();
            await page.waitForTimeout(1000);
        }
    }
})

test('filter the rows and check rows count',async ({page})=>{
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
    const dropdown=page.locator("select.dt-input");
    await dropdown.selectOption({value:'50'});
    await page.waitForTimeout(3000);
    const rows=await page.locator(".display.dataTable tbody tr").all();
    expect(rows.length).toBe(50);
})

test.only('specific data in table',async({page})=>{
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
    let hasMorePages = true;

    while(hasMorePages){
        const nextbutton = page.locator("button[aria-label='Next']");
        if (! await nextbutton.isEnabled()) {
            console.log("no pages");
            hasMorePages = false;
        } else {
            const table=page.locator(".display.dataTable tbody");
            const rows=table.locator("tr");
            const cells=await rows.locator("td").allInnerTexts();
            const name=cells[0];
            const age=cells[3];
            if(name!=="Olivia Liang"){
                await nextbutton.click();
                await page.waitForTimeout(1000);
            }else{
                console.log(`name : ${name}, age : ${age}`)
            }
        }
    }
})