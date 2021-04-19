const login = require("../Pages/login");
const sidenav = require("../Pages/sidenav");

Feature('Change the language in Charly Education');

Scenario('1. Change language to Deutche', async ({ I }) => {
    I.amOnPage('/')
    login.signin()
    I.click(sidenav.fields.language_button)
    I.click(sidenav.fields.deutche)
    I.see('Sprache')
})

Scenario('2. Change language to English', async ({ I }) => {
    I.amOnPage('/')
    login.signin()
    I.click(sidenav.fields.language_button)
    I.click(sidenav.fields.deutche)
    I.see('Sprache')
    I.click(sidenav.fields.english)
    I.see('Language')
})
