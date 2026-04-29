import{test,expect,Locator} from '@playwright/test'

test('single select dropdown',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // select option from dropdown
    // using visible test
    // await page.locator("#country").selectOption("China");
    // await page.pause();
    // using value attribute
    // await page.locator("#country").selectOption({value:'france'});
    // await page.pause();
    // using label
    // await page.locator("#country").selectOption({label:'Germany'});
    // await page.pause();
    // using index
    // await page.locator("#country").selectOption({index:3});
    // await page.pause();

    // check number of options in dropdown (count)
    const dropdownOptions:Locator=page.locator("#country>option");
    console.log(`Count : ${await dropdownOptions.count()}`);
    await expect(dropdownOptions).toHaveCount(10);

    // check if an option is present in dropdown
    const dropdownValues=page.locator("#country");
    const optionstext:string[]=await dropdownValues.allTextContents();
    const propertext=optionstext.map(val=>val.trim());
    for(let texts of propertext){
        console.log(texts);
    }
});

test('multi select dropdowns',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   // await page.locator("#colors").selectOption(['Blue','Green']); // using visible text
    //await page.locator("#colors").selectOption(['blue','red']);// using value attribute
    //await page.locator("#colors").selectOption([{label:'Blue'},{label:'Green'},{label:'Yellow'}]); // using label
    //await page.locator("#colors").selectOption([{index:2},{index:4}]);

    const countOfDropdowns=await page.locator('#colors>option').count();
    console.log(countOfDropdowns);
    await page.waitForTimeout(3000);

    const allColors = (await page.locator("#colors>option").allTextContents()).map(text=>text.trim());
    console.log(allColors);
    expect(allColors).toContain("Red");
})

test('sorted dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const animals:Locator=page.locator("#animals>option");
    const animalsText=(await animals.allTextContents()).map(val=>val.trim());
    console.log(animalsText);
    expect(animalsText).toContain('Fox');

    const originalList=[...animalsText];
    const sortedList=[...animalsText].sort();
    console.log(`original list : ${originalList}`);
    console.log(`sorted list : ${sortedList}`);
})

test.only('duplicate dropdowns',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const colorsOptions=(await page.locator('#colors>option').allTextContents()).map(text=>text.trim());
    const mySet=new Set<String>();
    const duplicates=[];

    for(const text of colorsOptions){
        if(mySet.has(text)){
            duplicates.push(text);
        }else{
           mySet.add(text); 
        }
    }
    console.log(duplicates);
})