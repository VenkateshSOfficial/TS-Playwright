import{test,expect,Locator} from '@playwright/test'

test('learn xpath',async ({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    // demo shop logo xpaths
    // //div[@class='header-logo']
    // //img[@alt='Tricentis Demo Web Shop']

    // xpath for he search stor button
    //input[@value='Search store']

    const logo:Locator=page.locator("//div[@class='header-logo']");
    await expect(logo).toBeVisible();

    // xpath with contains()
    const loogo:Locator=page.locator("//div[contains(@class,'logo')]");
    await expect(loogo).toBeVisible();

    const pcs:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    const pcCount:number=await pcs.count();
    console.log(`Count : ${pcCount}`);

    const productTitles:string[]=await pcs.allTextContents();
    for(let title of productTitles){
        console.log(title);
    }

    console.log("***********************************************");
    // starts-with()

const comps:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
for(let comp of await comps.allTextContents()){
    console.log(comp);
}

console.log("***********************************************");
// https://testautomationpractice.blogspot.com/

const socialMedias:Locator=page.locator("//div[@class='column follow-us']/ul/li");
//div[@class='column follow-us']/ul/li[position(3)]
//div[@class='column follow-us']/ul/li[last()]
for(let sm of await socialMedias.allTextContents()){
    if(sm==="Google+")
    console.log(sm);
}
})