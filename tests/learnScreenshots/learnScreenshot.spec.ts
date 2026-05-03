import{test,expect} from '@playwright/test'

test('screenshot',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const timestamp=Date.now();
    // regular screenshot
   // await page.screenshot({path:"./screenshots/"+timestamp+"sample.png"});
    // full page
    //await page.screenshot({path:"./screenshots/"+timestamp+"sample.png",fullPage:true});

    //const element=page.getByAltText("Tricentis Demo Web Shop");
    //await element.screenshot({path:"./screenshots/"+timestamp+"element.png"});

    

})