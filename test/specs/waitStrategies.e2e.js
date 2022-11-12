const DynamicLoadingOnePage = require('../pageobjects/dynamicLoadingOne.page');
const DynamicLoadingTwoPage = require('../pageobjects/dynamicLoadingTwo.page');
const SauceLabsLoginPage = require('../pageobjects/sauceLabsLogin.page');


describe.only('Wait Strategies', () => {
    it('Should show how waitForExists() works', async ()=>{
        await browser.url('https://the-internet.herokuapp.com/dynamic_loading/2');
        await $('button').click();
        await $('#finish h4').waitForExist();
        await expect(await $('#finish h4')).toHaveTextContaining('Hello World!');
    });

    
});

describe('Wait Strategies', () => {
    it('should wait for "Hello World" to be displayed', async () => {
        await DynamicLoadingOnePage.open();
        const startButtonElement = await DynamicLoadingOnePage.startButton;
        await startButtonElement.click();
        const helloWorldHeaderElement = await DynamicLoadingOnePage.helloWorldHeader;
        await helloWorldHeaderElement.waitForDisplayed();
        await expect(helloWorldHeaderElement).toHaveText('Hello World!',{wait:1000});
    });
});





