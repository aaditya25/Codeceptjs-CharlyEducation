const login = require("../Pages/login");
const workspace = require("../Pages/workspace");

Feature('UI Tests on Workspace');

Scenario(`1. Navigate to Workspace`, async ({ I }) => {
    //here goes all the tests
    I.amOnPage('/')
    login.signin()
    I.click(workspace.fields.workspace_button)

    //Assertion using URL
    I.seeInCurrentUrl('/material')
})


Scenario('2. Sort documents', async ({ I }) => {
    //here goes all the tests
    I.amOnPage('/')
    login.signin()
    I.click(workspace.fields.workspace_button)
    I.click(workspace.fields.dropdown_menu)
    I.click(workspace.fields.creation_date)

    //Assertion using text
    I.see('Creation date')

    //Tests continued
    I.click(workspace.fields.dropdown_menu)
    I.click(workspace.fields.a_z)

    //Assertion using text
    I.see('A - Z')
});

Scenario('3. Try uploading incorrect document format through workspace', async ({ I }) => {
    //here goes all the tests
    I.amOnPage('/')
    login.signin()
    I.click(workspace.fields.workspace_button)
    I.click(workspace.fields.uploadpdf)
    I.attachFile(workspace.fields.upload_file, 'null.jpg')

    //Assertion using text
    I.see('Please load a PDF file.')
});

Scenario('4. Upload PDF document through workspace', async ({ I }) => {
    //here goes all the tests
    I.amOnPage('/')
    login.signin()
    I.click(workspace.fields.workspace_button)
    I.click(workspace.fields.uploadpdf)
    I.attachFile(workspace.fields.upload_file, 'testfile.pdf')

    //Assertion using text
    I.see(workspace.fields.upload_succeed)

    //Tests continued
    I.click(workspace.fields.confirm_upload)

    //Assertion using URL
    I.seeInCurrentUrl('/learnview')
});

Scenario('5. Create a Flashcards deck', async ({ I }) => {
    I.amOnPage('/')
    //here goes all the tests
    login.signin()
    I.click(workspace.fields.workspace_button)
    I.click(workspace.fields.flashcards)

    //Assertion using elements
    I.seeElement(workspace.fields.name_deck)

    //Tests continued
    I.fillField(workspace.fields.name_deck, 'Test 1')
    I.click(workspace.fields.submit)

    //Assertion using elements
    I.seeElement(workspace.fields.deck_title)

    //Tests continued
    I.fillField(workspace.fields.sideA, 'side a')
    I.fillField(workspace.fields.sideB, 'side b')
    I.click(workspace.fields.save)

    //Assertion using Text
    I.seeElement(workspace.fields.count)
});