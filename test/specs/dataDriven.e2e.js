const LoginPage = require('../pageobjects/login.page');
const SauceLabsLoginPage = require('../pageobjects/sauceLabsLogin.page');
const QualityCampSignup = require('../pageobjects/qualityCampSignup.page');
const loginData = require('../data/loginData');
const sauceLabsLoginData = require('../data/sauceLabsLoginData');
const { faker } = require('@faker-js/faker');

describe('SauceLabs Login', () => {
    for(const record of sauceLabsLoginData){
        it(`should attempt to login the ${record.username}`, async () => {
            await SauceLabsLoginPage.open(); //opening the page 
            await SauceLabsLoginPage.login(record.username, record.password); //attempting to login with username and password
            if(record.username === "invalid_user" || record.username === "locked_out_user"){ //checking if user is invalid or locked out.
                await expect(browser).toHaveUrl(record.expectedUrl); //if user is invalid or locked out im checking to see that they're at the correct url
                await expect(SauceLabsLoginPage.loginMessage).toHaveTextContaining(record.message); //if user is invalid or locked out im checking to see that they receive the correct error message
            } else {
                await expect(browser).toHaveUrl(record.expectedUrl); //user isn't invalid or locked out. so i'm checking to see that they're at the correct url
            }
        });
    }
})

describe('My Login application', () => {
    for(const record of loginData){
        it(`should attempt to login ${record.username}`, async () => {
            await LoginPage.open();
            await LoginPage.login(record.username, record.password);
            await expect($('#flash')).toHaveTextContaining(record.message);  
        });
    }
});


describe.only('Faker Powered Signup', () => {
    it('should attempt to signup using values provided by faker', async () => {
        await QualityCampSignup.open();
        const fullName = faker.name.fullName();
        const firstName = fullName.split(" ")[0];
        const lastName = fullName.split(" ")[1];
        console.log(lastName);
        await QualityCampSignup.signup(fullName,faker.internet.password(),faker.internet.email(firstName,lastName,'gmail.com'));
        await browser.debug();
        await expect(browser).toHaveUrl('https://qualitycamp.netlify.app/myaccount/');
    });
})












