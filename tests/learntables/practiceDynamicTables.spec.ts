import{test,expect} from '@playwright/test'

test('practice dynamic tables',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dynamictable=page.locator("//table[@id='taskTable']/tbody");
    const rows=dynamictable.locator("//tr");
    const eachRow=await rows.all();
    console.log(eachRow.length);

    for(let row of eachRow){
        const name=await row.locator("//td").nth(0).innerText();
        if(name==='System'){
            const systemValue=await row.locator("//td",{hasText:'%'}).innerText();
            console.log(`system : ${systemValue}`);
            break;
        }
    }
})