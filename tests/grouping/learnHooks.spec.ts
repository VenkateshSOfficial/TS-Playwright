import { test, expect } from '@playwright/test'


test.beforeEach('run before each test',async()=>{
    console.log('running before every test');
})

test.beforeAll('run before all',async()=>{
    console.log('running before all');
})

test.afterEach('run after each test',async()=>{
    console.log('running after every test');
})
test.afterAll('run after all',async ()=>{
    console.log('running after all');
})

test('test 1',async()=>{
    console.log("this is test 1");
})

test('test 2',async()=>{
    console.log("this is test 2");
})