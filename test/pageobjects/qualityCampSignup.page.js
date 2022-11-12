/**
 * page containing specific selectors and methods for a specific page
 */
 class QualityCampSignUpPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#name');
    }

    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to signup using username, password and email
     */
    async signup (username, password, email) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputEmail.setValue(email);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url(`https://qualitycamp.netlify.app/register/`);
    }
}

module.exports = new QualityCampSignUpPage();
