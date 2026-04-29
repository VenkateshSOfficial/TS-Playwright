/*

These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured). 

*/

import{test,expect,Locator} from '@playwright/test'

test('learn getByAltText() method--> for image valdiations',async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    /* 
    page.getByAltText() to locate an element, usually image using alt attribute
    <img alt="nopCommerce demo store" src="https://demo.nopcommerce.com/Themes/DefaultClean/Content/images/logo.png">
    */
    const logo:Locator=page.getByAltText('nopCommerce demo store'); // returns Locator which is also a fixture
    await expect(logo).toBeVisible();
})

test('learn getBytext() method --> for text validations',async ({page})=>{
    /*
    page.getByText() to locate by text content. 
           (or)
    locate by visible text (non interactive elements)
    */
   await page.goto('https://demo.nopcommerce.com/');
   const welcomeText:Locator=page.getByText('Welcome to our store'); // will accept substring as well
   await expect(welcomeText).toBeVisible();
})

test('learn getByRole() method --> interactable elements',async({page})=>{
    /*
    getByRole() for all the interactive elements
    text box, radio buttons, dropdowns etc which all are interactive
    implicit defined role for elements (tagname and role name are same)
    explicit defined role elements (tagname and role name are different)
    */
    await page.goto('https://demo.nopcommerce.com/');
    const register:Locator=page.getByRole("link",{name:'Register'});
    await register.click();
    //await page.pause();
    const registerSuccess:Locator=page.getByText('Register');
    //const registeringSucess:Locator=page.getByRole('heading',{name:'Register'});
    await expect(registerSuccess).toBeVisible();
    //await expect(registeringSucess).toBeVisible();
})

test('learn getByLabel() --> for forms',async ({page})=>{
    /*
    used for handling forms
    */
    await page.goto('https://demo.nopcommerce.com/');
    const register:Locator=page.getByRole("link",{name:'Register'});
    await register.click();
    const registerSuccess:Locator=page.getByText('Register');
    const firstName:Locator=page.getByLabel('First name:');
    await expect(registerSuccess).toBeVisible();
    await firstName.fill('MS');
})

test.only('learn getByPlaceholder() --> having placeholder',async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    await page.getByPlaceholder('Search store').fill("apple mac pro");
    //await page.pause();
})

test('learn getByTitle() -> app having title attribute',async({page})=>{
   const title:Locator=page.getByTitle('title'); 
   await expect(title).toHaveText('home');
})