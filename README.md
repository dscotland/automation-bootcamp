# UI Automation Bootcamp Automation Suite

## Running it locally

### `npm install`

Installs the dependencies and creates the node modules folder.<br />

### Executing tests

`npm run *script-name-here*` - runs the tests specified for this script in the package.json file <br />

## Adding a new suite

Once you've added your test spec to the relevant folder (/test/specs), update the `scripts` object in your `package.json` file to include the command you'll be using to execute your test.<br/>

Eg: If I create a test for `Buttons` at the following path `./test/specs/buttons.e2e.js `. I could then add `"button-test": "npx wdio run wdio.conf.js --spec ./test/specs/buttons.e2e.js"` to the scripts object of my package.json file.<br/>