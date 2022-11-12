const ChallengingDOMPage = require('../pageobjects/challengingDom.page');
const CheckboxPage = require('../pageobjects/checkboxes.page');
const LargeDOMPage = require('../pageobjects/largeDom.page');
const InputsPage = require('../pageobjects/inputs.page');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


describe('My Iframe Example', () => {
    it('Should show how Iframes work', async () => {
        await browser.url('https://the-internet.herokuapp.com/iframe'); //going to the page
        const iframeElement = await $('#mce_0_ifr');
        await browser.switchToFrame(iframeElement);
        const paragraphElement = await $('p');
        await expect(paragraphElement).toHaveTextContaining('Your content goes here.');
    });
})


describe('My scrollIntoView() Example', () => {
    it('Should show the functionality of scrollIntoView()', async () => {
        await LargeDOMPage.open();
        await $('#header-1').scrollIntoView();
        await browser.debug();
    });
})

describe('My isSelected() Example', () => {
    it('Should show the functionality of isSelected()', async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes');
        console.log(await $('input:nth-child(1)').isSelected()); //expect this to return false
        console.log(await $('input:nth-child(3)').isSelected()); //expect this to return true
    })
})

describe('My isDisplayed() Example', () => {
    it('Should show the functionality of isDisplayed()', async () => {
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/');
        console.log(await $(`button[class='added-manually']`).isDisplayed()); //expect this to return false
        await $('button[onClick="addElement()"]').click();
        console.log(await $(`button[class='added-manually']`).isDisplayed()); //expect this to return true
    })
})

describe('My setValue() Example', () => {
    it('Should show the functionality of setValue()', async () => {
        await InputsPage.open();
        await InputsPage.setNumber(1998);
        await browser.debug();
    });
})

describe('My $$ Example', () => {
    it('Should show the functionality of the $$', async () => {
        await browser.url('https://the-internet.herokuapp.com/');
        const elementList = await $$('li>a');
        for(const element of elementList){
            const text = await element.getText();
            console.log(text);
        }
    })
});

describe('My Element Interaction Example', () => {
    it('Should show the usage of isDisplayed, getText and setValue', async () => {
        await LoginPage.open();
        const usernameElement = await LoginPage.usernameText;
        const passwordElement = await LoginPage.passwordText;
        const username = await usernameElement.getText();
        const password = await passwordElement.getText();
        //await LoginPage.login(username,password);
        await LoginPage.inputUsername.setValue(username);
        await LoginPage.inputPassword.setValue(password);
        await LoginPage.btnSubmit.click();
        console.log(await SecurePage.flashAlert.isDisplayed());
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
})



describe('My Element Interaction Suite', () => {
    it('Should attempt to get the header text of the Challenging DOM page.', async () => {
        await ChallengingDOMPage.open();
        const headerElement = await ChallengingDOMPage.header;
        const headerText = await headerElement.getText();
        await expect(headerText).toEqual('Challenging DOM');
    });

    it('Should attempt to get the width and height of the answer canvas on the Challenging DOM page.', async ()=> {
        await ChallengingDOMPage.open();
        const canvasElement = await $('canvas');
        const canvasWidth = await canvasElement.getAttribute('width');
        const canvasHeight = await canvasElement.getAttribute('height');
        await expect(canvasWidth).toEqual('599');
        await expect(canvasHeight).toEqual('200');
    });

    it('Should get the value that is set in the input field', async ()=> {
        await InputsPage.open();
        const randomNumber = Math.floor(Math.random() * 100);
        const inputField = InputsPage.inputField;
        await inputField.setValue(randomNumber);
        const inputFieldValue = await inputField.getValue();
        await expect(Number(inputFieldValue)).toEqual(randomNumber);
    });

    it('Should check if a checkbox is clickable and selected', async ()=> {
        await CheckboxPage.open();
        const checkboxElement = CheckboxPage.checkbox;
        await expect(checkboxElement).toBeClickable();
        await checkboxElement.click();
        await expect(checkboxElement).toBeSelected();
    });

    it('Should check if an element is in the viewport', async ()=> {
        await LargeDOMPage.open();
        const element = LargeDOMPage.sibling1_1;
        await expect(element).toBeDisplayedInViewport();
    });

})