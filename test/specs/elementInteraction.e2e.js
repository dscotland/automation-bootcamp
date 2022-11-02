const ChallengingDOMPage = require('../pageobjects/challengingDom.page');

describe('My Element Interaction Suite', () => {
    it('Should attempt to get the header text of the Challenging DOM page.', async () => {
        await ChallengingDOMPage.open();
        const headerElement = await ChallengingDOMPage.header;
        const headerText = await headerElement.getText();
        await expect(headerText).toEqual('Challenging DOM');
    });

    it.only('Should attempt to get the width and height of the answer canvas on the Challenging DOM page.', async ()=> {
        await ChallengingDOMPage.open();
        browser.pause(3000); 
        const canvasElement = await ChallengingDOMPage.canvas;
        const canvasWidth = await canvasElement.getAttribute('width');
        const canvasHeight = await canvasElement.getAttribute('height');
        await expect(canvasWidth).toEqual('599');
        await expect(canvasHeight).toEqual('200');
    });

})