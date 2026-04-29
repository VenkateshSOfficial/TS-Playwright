import{test,expect,Locator} from '@playwright/test'

test('learn xpath axes',async ({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    
    // 1.self axes
    const germanyCell:Locator=page.locator("//td[text()='Germany']/self::td");
    const text=await germanyCell.textContent();
    console.log(text);
    await expect(germanyCell).toHaveText("Germany");
    expect(text).toBe('Germany');

    // 2.parent axes
    const parentLocate:Locator=page.locator("//td[text()='Germany']/parent::tr");
    console.log("********************************");
    for(let locate of await parentLocate.allTextContents()){
        console.log(locate);
    }
    await expect(parentLocate).toContainText("Maria Anders");

    // 3. child axes
    console.log("********************************");
    const thirdRow:Locator=page.locator("//table[@id='customers']//tr[3]/child::td");
    for(let val of await thirdRow.allTextContents()){
        console.log(val);
    }

})