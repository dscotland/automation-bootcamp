/**
 * page containing specific selectors and methods for a specific page
 */
class SauceLabsLoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get loginMessage () {
        return $('h3[data-test="error"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url(`https://www.saucedemo.com/`);
    }
}

module.exports = new SauceLabsLoginPage();
