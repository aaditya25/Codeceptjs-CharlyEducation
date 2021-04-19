const login = require("../Pages/login");

Feature('Tests for User login form');

Scenario('1. Login using Valid user', ({ I }) => {
    //here goes all the tests
    I.amOnPage('/')
    I.fillField(login.fields.email, 'aditya@pluspeter.com')  //Xpath
    I.fillField(login.fields.password, 'aditya123') //CSS
    I.click(login.fields.submit)

    //Assertion
    I.see(login.fields.success)
});

Scenario('2. Login using InValid user', ({ I }) => {
    //here goes all the tests
    I.amOnPage('/')
    I.fillField(login.fields.email, 'aadi@gmail.com')  //Xpath
    I.fillField(login.fields.password, 'aditya123') //CSS
    I.click(login.fields.submit)

    //Assertion
    I.see(login.fields.error) 
});

