import{test,expect,Locator} from '@playwright/test'

test('extract  text',async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const productnames:Locator=page.locator(".product-title");
    console.log(await productnames.nth(1).innerText());
    console.log(await productnames.nth(1).textContent());

    // difference between innerText() and textContent()
    console.log("=============================================");
    for(let i=0;i<await productnames.count();i++){
        console.log(`using innerText() : ${await productnames.nth(i).innerText()}`);
        const text=await productnames.nth(i).textContent();
        console.log(`using textContent() : ${text?.trim()}`);
    }

    // difference between allInnerText() and allTextContent()
    console.log("=============================================");
    const allNames:string[]=await productnames.allInnerTexts();
    console.log(allNames);

    const allNamesProducts:string[]=await productnames.allTextContents();
    const trimmedNames:string[]=allNamesProducts.map(text=>text.trim());
    console.log("=============================================");
    console.log(trimmedNames);
    console.log("=============================================");
    for(const name of trimmedNames){
        console.log(name);
    }
})