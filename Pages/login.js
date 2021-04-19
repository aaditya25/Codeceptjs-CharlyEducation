const { I } = inject();

module.exports = {

    fields: {
        email: '//*[@id="email"]',
        password: '#password',
        submit: '.submitButton',
        error: 'Email or password is incorrect.',
        success: 'Hey Aditya',
    },
    //Below function is called whenever user tries to sign in into the account
    async signin() {

        I.fillField(this.fields.email, 'aditya@pluspeter.com')  
        I.fillField(this.fields.password, 'aditya123') 
        I.click(this.fields.submit)
    }
}