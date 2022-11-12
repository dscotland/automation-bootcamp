const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingOnePage extends Page {
    /**
     * define selectors using getter methods
     */
    get startButton () {
        return $('#start button');
    }

    get helloWorldHeader() {
        return $('#finish h4');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dynamic_loading/1');
    }
}

module.exports = new DynamicLoadingOnePage();


