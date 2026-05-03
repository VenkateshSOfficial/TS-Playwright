import{test} from '@playwright/test'

//test.describe.configure({mode:'serial'})
//test.describe.configure({mode:'parallel'})

test.describe('group1',()=>{
    test('test1',async ({page})=>{
        console.log("this is test 1");
    })
    test('test2',async ({page})=>{
        console.log("this is test 2");
    })
    test('test3',async ({page})=>{
        console.log("this is test 3");
    })
    test('test4',async ({page})=>{
        console.log("this is test 4");
    })
    test('test5',async ({page})=>{
        console.log("this is test 5");
    })
})