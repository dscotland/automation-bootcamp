const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class IframePage extends Page {
    /**
     * define selectors using getter methods
     */
    get middleFrame () {
        return $('frame[name="frame-middle"]');
    }

    get topFrame () {
        return $('frame[name="frame-top"]');
    }

    get content () {
        return $('#content');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('nested_frames');
    }
}

module.exports = new IframePage();
