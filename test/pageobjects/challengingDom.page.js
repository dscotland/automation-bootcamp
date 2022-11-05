const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChallengingDOMPage extends Page {

    /**
     * define selectors using getter methods
    */
    get header () {
        return $('h3');
    }

    get canvas () {
        return $('#canvas');
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
        return super.open('challenging_dom');
    }

}

module.exports = new ChallengingDOMPage();
