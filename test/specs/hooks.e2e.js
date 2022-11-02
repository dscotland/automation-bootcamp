const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Hooks', () => {
    //#region hooks
    before(function () {
        console.log('This is the before hook. It runs ONCE before the FIRST test in this describe block.')
        // runs once before the first test in this block
      });
    
      after(function () {
        console.log('This is the after hook. It runs ONCE after the LAST test in this describe block.')
        // runs once after the last test in this block
      });
    
      beforeEach(function () {
        console.log('This is the beforeEach hook. It runs before EACH test in this describe block.')
        // runs before each test in this block
      });
    
      afterEach(function () {
        console.log('This is the afterEach hook. It runs after EACH test in this describe block.')
        // runs after each test in this block
      });
    //#endregion

    //#region tests
    it('should attempt to login with invalid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('invalidUserName', 'invalidPassword');
        await expect(LoginPage.loginError).toBeExisting();
    })

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    //#endregion
});


