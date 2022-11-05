const LoginPage = require('../pageobjects/login.page');

describe('Assertions', function () {

  describe('Assertion Options Examples', function () {

      describe('Number Options - These options can be applied in addition to the command options when numbers are being asserted.', function () {
          it('Equals Option', async function () {
            LoginPage.open();
            const footerElement = $('#page-footer');
            await expect(footerElement).toHaveChildren({eq:1});
            //await expect(footerElement).toHaveChildren(1);
          });
      
          it('Less than or Equals Option', async function () {
            LoginPage.open();
            const bodyElement = $('body');
            await expect(bodyElement).toHaveChildren({lte:4});
          });
      
          it('Greater than or Equals Option', async function () {
            LoginPage.open();
            const bodyElement = $('body');
            await expect(bodyElement).toHaveChildren({gte:3});
          });
      });


      describe('String Options - These options can be applied in addition to the command options when strings are being asserted.', function () {
        it('Ignore Case', async function () {
          LoginPage.open();
          const headingElement = $('h2');
          await expect(headingElement).toHaveText('LoGiN pAge',{ignoreCase:true});
        });
    
        it('Containing', async function () {
          LoginPage.open();
          const headingElement = $('h2');
          await expect(headingElement).toHaveText('Login',{containing:true});
          //await expect(headingElement).toHaveText('Page',{containing:true});
        //await expect(headingElement).toHaveText('Something else',{containing:true});
        });
    });

  });


  describe('Assertion Matchers Examples', function() {

    describe('Browser Matchers', function() {
      it('toHaveUrl and toHaveUrlContaining', async function () {
        LoginPage.open();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login');
        //await expect(browser).toHaveUrlContaining('login');
      });
  
      it('toHaveTitle and toHaveTitleContaining', async function () {
        LoginPage.open();
        await expect(browser).toHaveTitle('The Internet');
        //await expect(browser).toHaveTitleContaining('The');
        //await expect(browser).toHaveTitleContaining('Internet');
      });

    });


    describe('Element Matchers', function() {

      it('toExist, toBeExisting, toBePresent', async function () {
        LoginPage.open();
        const inputUsername = LoginPage.inputUsername;

        await expect(inputUsername).toExist();
        //await expect(inputUsername).toBeExisting();
        //await expect(inputUsername).toBePresent();
      });
  
      it('toBeFocused', async function () {
        LoginPage.open();
        const inputUsername = LoginPage.inputUsername;
        inputUsername.click();
        await expect(inputUsername).toBeFocused();
      });

      it('toHaveAttribute , toHaveAttr , toHaveAttributeContaining, toHaveAttrContaining', async function () {
        LoginPage.open();
        const inputUsername = LoginPage.inputUsername;
        await expect(inputUsername).toHaveAttribute('name');
        //await expect(inputUsername).toHaveAttr('name');
        //await expect(inputUsername).toHaveAttributeContaining('type','text');
        //await expect(inputUsername).toHaveAttrContaining('type','text');
      });
      
    });

  });

});