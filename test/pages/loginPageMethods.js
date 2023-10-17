const find = require('../locators/loginPage')

class loginPageMethods{

    async inputEmail(email){
        await find.emailIdField.click()
        await find.emailIdField.clearValue()
        await find.emailIdField.setValue(email)
    }

    async inputPassword(password){
        await find.passwordField.click()
        await find.passwordField.clearValue()
        await find.passwordField.setValue(password)
    }

    async clickLogin(){
        await find.loginButton.click()
    }

    async invalidEmail(){
        const actual = await find.toastMsg.getAttribute('content-desc')
        expect(actual.includes('Please check entered Email')).toBe(true)
    }

    async unregisteredEmail(){
        const actual = await find.toastMsgFullScreen.getAttribute('content-desc')
        expect(actual.includes('Try Registration')).toBe(true)
    }

    async emptyFields(){
        const actual = await find.toastMsgFullScreen.getAttribute('content-desc')
        expect(actual.includes('Email and Password cannot be Empty')).toBe(true)
    }

    async emptyPasswordField(){
        const actual = await find.toastMsg.getAttribute('content-desc')
        expect(actual.includes('Password cannot be empty')).toBe(true)
    }

    async verifyLogin(){
        await find.textWish.waitForDisplayed({ timeout: 15000 })
        const actual = await find.textWish.getAttribute('content-desc')
        expect(actual).toEqual('Good Evening, Aravind S Panicker')
    }
}

module.exports = new loginPageMethods();