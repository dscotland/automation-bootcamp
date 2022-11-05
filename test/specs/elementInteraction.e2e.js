const ChallengingDOMPage = require('../pageobjects/challengingDom.page');
const CheckboxPage = require('../pageobjects/checkboxes.page');
const LargeDOMPage = require('../pageobjects/largeDom.page');
const InputsPage = require('../pageobjects/inputs.page');

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

    it('Should check if a checkbox is clickable', async ()=> {
        await CheckboxPage.open();
        const checkboxElement = CheckboxPage.checkbox;
        await expect(checkboxElement).toBeClickable();
    });

    it('Should check if an element is in the viewport', async ()=> {
        await LargeDOMPage.open();
        const element = LargeDOMPage.sibling1_1;
        await expect(element).toBeDisplayedInViewport();
    });

})