const { setDefaultTimeout, AfterAll, Given, When, Then } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const VehicleInsurance = require('../pageObjects/insurance.po')

const driver = new Builder().forBrowser('firefox').build();
const vInsurance = new VehicleInsurance(driver);
const globaltimeout = 5 * 10000;
setDefaultTimeout(globaltimeout)

AfterAll(async function () {
    await driver.quit();
});

Given('I am on the Tricentis insurance app', async function () {
    await vInsurance.url();
});

When('I filled in all form steps', async function () {
    await vInsurance.EnterVehicleData();
    await vInsurance.EnterInsurantData();
    await vInsurance.EnterProductData();
    await vInsurance.SelectPriceOption();
    await vInsurance.FillQuote();
});

When('press Send', async function () {
    await vInsurance.SendQuote();
});

Then('will be displayed a message containing {string}', async function (messageStr) {
    await vInsurance.ValidateMessage(messageStr);
});
