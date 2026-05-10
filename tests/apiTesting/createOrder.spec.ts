import { test, expect, request } from '@playwright/test'
import APIUtils from './utilities/apiUtils'

test.describe('E-commerce API', () => {
    // let api: APIUtils   // ← used as type here
    let token: string
    let apiContext:any


    // Runs once before all tests in this describe block
    test.beforeAll(async () => {
        try {
            apiContext = await request.newContext();
            token = await APIUtils.getToken(apiContext);
        } catch (error) {
            console.log(error);
        }
    })

    test('create order', async () => {
        const orderId=await APIUtils.createOrder(apiContext);
        console.log(`Order id : ${orderId}`)
    })
})