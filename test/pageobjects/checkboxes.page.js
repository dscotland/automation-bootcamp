

const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckboxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkbox () {
        return $('input:nth-child(1)');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}

module.exports = new CheckboxPage();
