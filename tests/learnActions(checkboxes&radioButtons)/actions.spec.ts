import{test,expect,Locator} from '@playwright/test'

test('learn text input actions',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const nametext:Locator=page.getByRole('textbox',{name:'name'});
    await expect(nametext).toBeVisible();
    await expect(nametext).toBeEnabled();
    await nametext.fill("Dhoni");
    console.log("The input text : " + await nametext.inputValue());
    await page.pause();
    const maxlength:string | null=await nametext.getAttribute('maxlength');
    expect(maxlength).toBe("15");
});

test('radio buttons',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const nametext:Locator=page.getByRole('radio');
    //const nametext:Locator=page.locator("input[name='gender']");
    for(let i=0;i<await nametext.count();i++){
        await expect(nametext.nth(i)).toBeVisible();
        await expect(nametext.nth(i)).toBeEnabled();
        await nametext.nth(i).check();
        await expect(nametext.nth(i)).toBeChecked();
        await page.pause();
    }
})

test.only('checkboxes',async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");
     //const checkBoxes=page.locator("//label[text()='Days:']/following-sibling::div//input[@type='checkbox']");

     const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     const checkBoxes=days.map(index=>page.getByLabel(index));
     //expect(checkBoxes.length).toBe(7);

     for(let checkBox of checkBoxes){
        while(!await checkBox.isChecked()){
            await checkBox.check();
            await expect(checkBox).toBeChecked();
        }
     }

    //  for(let i=0;i<await checkBoxes.count();i++){
    //     if(!(await checkBoxes.nth(i).isChecked())){
    //         await checkBoxes.nth(i).check();
    //         await page.pause();
    //         expect(await checkBoxes.nth(i).isChecked());
    //     }
    //  }
})