const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LargeDOMPage extends Page {

    /**
     * define selectors using getter methods
    */
    get sibling1_1 () {
        return $('div[id="sibling-1.1"]');
    }

    get sibling5_1 () {
        return $('div[id="sibling-5.1"]');
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
        return super.open('large');
    }

}

module.exports = new LargeDOMPage();
