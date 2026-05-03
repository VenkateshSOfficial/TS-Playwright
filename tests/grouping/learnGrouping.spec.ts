import { test, expect } from '@playwright/test'


test.describe('group1', async () => {
    test('test 1', async () => {
        console.log("this is test 1");
    })

    test('test 2', async () => {
        console.log("this is test 2");
    })
})
test.describe('group2', async () => {
    test('test 3', async () => {
        console.log("this is test 3");
    })

    test('test 4', async () => {
        console.log("this is test 4");
    })
})


