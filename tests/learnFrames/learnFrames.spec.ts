import {test,expect} from '@playwright/test'

/*
page.frame() vs page.frameLocator()
page.frame() ---> we can specifiy only with the url
page.frameLocator() ---> we can specify using the normal locators and continue with the inner elements 
*/
test('frames approach 1',async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    // total number of frames in webpage
    const frames=page.frames();
    console.log(`Total frames : ${frames.length}`);

    // approach 1 ---page.frame()---------
    const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    if(frame){
        await frame.locator("//input[@name='mytext1']").fill('hello');
        console.log(await frame.locator("//input[@name='mytext1']").inputValue());

        await frame.fill("//input[@name='mytext1']","hello how are you !!");
        console.log(await frame.locator("//input[@name='mytext1']").inputValue());
    }
    else{
        console.log("frame not available");
    }
})

test('frames approach 2',async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    // total number of frames in webpage
    const frames=page.frames();
    console.log(`Total frames : ${frames.length}`);

    // approach 1 ---page.frame()---------
    const inputBox=page.frameLocator("frame[src='frame_3.html']").locator("input[name='mytext3']");
    await inputBox.fill("MS Dhoni");
    console.log(await inputBox.inputValue());
    await page.pause();
})

test.only("inner frames",async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    if(frame3){
        await frame3.locator("input[name='mytext3']").fill("welcome");
        const childFrames=frame3.childFrames();
        console.log(`child frames : ${childFrames.length}`);
        childFrames[0]
    }else{
        console.log("frame not found");
    }
})