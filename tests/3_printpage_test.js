const login = require("../Pages/login");
const printpage = require("../Pages/printpage");

Feature('UI tests on Print dashboard');

Scenario('1. Navigate to print dashbaord', ({ I }) => {
    //here goes all the tests
    I.amOnPage('/')
    login.signin()
    I.click(printpage.fields.print)

    //Assertion using url
    I.seeInCurrentUrl('/printdashboard')
});

Scenario('2. Select a pdf document through print dashboard', ({ I }) => {
    //here goes all the tests
    I.amOnPage('/')
    login.signin()
    I.click(printpage.fields.print)
    I.click(printpage.fields.openpdf)
    I.click(printpage.fields.selectpdf)

    //Assertion using url
    I.seeInCurrentUrl('/learnview')
});
