import{test,expect,Locator} from '@playwright/test'

test('static table',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator=page.locator("//table[@name='BookTable']/tbody");
    await expect(table).toBeVisible();

    // count number of rows
    const tableRows=table.locator("//tr");
    await expect(tableRows).toHaveCount(7);
    const rowsCount=await tableRows.count();
    expect(rowsCount).toBe(7);
    console.log(rowsCount);

    // count number of columns

    const tableColumns=table.locator("//tr[2]/td");
    await expect(tableColumns).toHaveCount(4);
    const columsnCount=await tableColumns.count();
    expect(columsnCount).toBe(4);
    console.log(columsnCount);

    // read data from 2nd row

    const secondRowCells=tableRows.nth(2).locator("//td");
    const secondRowCellsText=await secondRowCells.allInnerTexts();
    console.log(`Second row data : ${secondRowCellsText}`);
    expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

    // extract the data from the table (excluding header)

    console.log("printing all data..........");

    const allRowData=await tableRows.all();

    for(const row of allRowData.slice(1)){
        const cols=await row.locator("//td").allInnerTexts();
        console.log(cols.join('\t'));
    }

    for(let rowsContent of allRowData.slice(1)){
        const cells=await rowsContent.locator("//td").allInnerTexts();
        const authors=cells[1];
        const books=cells[0];
        if(authors==="Mukesh"){
            console.log(`author name : ${authors}, book name : ${books}`);
        }

    }
})
