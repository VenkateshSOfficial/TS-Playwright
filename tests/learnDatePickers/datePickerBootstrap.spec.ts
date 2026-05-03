import { test,expect,Page } from "@playwright/test";

async function datePickerBootstrap(targetDate:string,targetMonth:string,targetYear:string,page:Page,isFuture:boolean){
    while(true){
        const dateAndYear=await page.locator("//div[@data-testid='searchbox-datepicker-calendar']/div/div/h3").innerText();
        const month=dateAndYear.split(" ")[0].trim();
        const year=dateAndYear.split(" ")[1].trim();

        if(month===targetMonth && year===targetYear){
            break;
        }
        if(isFuture){
            page.locator("button[aria-label='Next month']").click();
        }
    }
    const dates=await page.locator("//div[@data-testid='searchbox-datepicker-calendar']/div/child::div[1]/table/tbody/tr/td").all();
    for(let date of dates){
        if(await date.innerText()===targetDate){
            await date.click();
            break;
        }
    }
    await page.pause();
}
test('practice date',async({page})=>{
    await page.goto("https://www.booking.com/");
    await page.locator("//*[@xmlns='http://www.w3.org/2000/svg']").first().click();
    await page.getByTestId("searchbox-dates-container").click();
    await datePickerBootstrap("23","June","2029",page,true);
})