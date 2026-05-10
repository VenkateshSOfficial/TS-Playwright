import { expect, request } from '@playwright/test'

export default class APIUtils {

    private apiContext: any;

    constructor(apiContext: any) {
        this.apiContext = apiContext;
    }
    static async getToken(apiContext: any) {
        const loginPayload = {
            userEmail: "venkatesh230691@gmail.com",
            userPassword: "CENA@wwe2014"
        }
        const loginResponse = await apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: loginPayload
            }
        )
        expect(loginResponse.ok()).toBeTruthy()
        expect(loginResponse.status()).toBe(200)

        const loginResponseJson = await loginResponse.json()
        const token = loginResponseJson.token
        console.log(`Token: ${token}`)
        return token;
    }

    static async createOrder(apiContext: any) {

        const createOrderPayload = {
            orders: [
                {
                    country: "India",
                    productOrderedId: "6960eae1c941646b7a8b3ed3"
                }
            ]
        }

        const orderResponse = await apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: createOrderPayload,
                headers: {
                    'Authorization': await this.getToken(apiContext),
                    'Content-Type': 'application/json'
                }
            }
        )

        expect(orderResponse.ok()).toBeTruthy() // ← catches auth/API errors early

        const orderResponseJson = await orderResponse.json()
        console.log(orderResponseJson)

        const orderId = orderResponseJson.orders[0]
        return orderId;
    }
}