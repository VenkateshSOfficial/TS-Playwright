import{test,expect,Locator} from '@playwright/test'

test('dynamic tables',async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const dynamictable=page.locator(".table.table-striped tbody");
    await expect(dynamictable).toBeVisible();

    const rows=dynamictable.locator("tr");
    console.log(await rows.count());
    const eachRow:Locator[]=await rows.all();
    console.log(`Rows : ${eachRow.length}`);

    for(const row of eachRow){
        const processName:string=await row.locator("td").nth(0).innerText();
        if(processName==='Chrome'){
          //const cpuLoad=await row.locator('td:has-text("%")').innerText();
            const cpuLoad=await row.locator('td',{hasText:'%'}).innerText();
            console.log(`cpu load : ${cpuLoad}`);
            break;
        }
    }
})