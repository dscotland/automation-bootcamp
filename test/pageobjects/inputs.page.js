

const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class InputsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputField () {
        return $('input');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('inputs');
    }
}

module.exports = new InputsPage();
