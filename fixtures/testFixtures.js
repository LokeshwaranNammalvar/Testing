import {test as base } from '@playwright/test';


export const test = base.extend({
    loginPage : async (({page},use)=>{

    // const loginPage = new LoginPage(page);
    // await use(loginPage);
    await use(new LoginPage(page));

    })
    // product

      

})