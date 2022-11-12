const IframePage = require('../pageobjects/iframe.page');

describe('Iframes Suite', () => {
    it('should switch to the middle iframe', async () => {
        await IframePage.open();
        const topFrameElement = await IframePage.topFrame;
        await browser.switchToFrame(topFrameElement);

        const middleIframeElement = await IframePage.middleFrame;
        await browser.switchToFrame(middleIframeElement);

        const contentElement = IframePage.content;
        await expect(contentElement).toHaveText('MIDDLE')
    });
});


