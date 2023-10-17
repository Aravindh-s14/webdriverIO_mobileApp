const signUpPageMethods = require('../pages/signUpPageMethods')
const commonUtilities = require('../utilities/commonUtilities')

describe("Sign Up Page test cases",()=>{

    before(()=>{
        commonUtilities.allowNotification()
    })

    it('SU_TC_01 : Whether user is able to sign in with no email id and password', async()=>{
        await browser.pause(5000)
        await signUpPageMethods.signUpButtonClick()
        await signUpPageMethods.emptyFieldsValidation()
    })

    it('SU_TC_02: Whether the user is able to login with invalid email address', async()=>{
        await signUpPageMethods.inputEmailId('test.com')
        await signUpPageMethods.inputPassword('Password@123')
        await signUpPageMethods.confirmPasswordField('Password@123')
        await signUpPageMethods.commonPointClick()
        await signUpPageMethods.signUpButtonClick()
        await signUpPageMethods.invalidEmailId()
    })

    it('SU_TC_03: Whether the user is abel to register with password less than required',async()=>{
        await signUpPageMethods.inputEmailId('test@gmail.com')
        await signUpPageMethods.inputPassword('pa')
        await signUpPageMethods.confirmPasswordField('pa')
        await signUpPageMethods.commonPointClick()
        await signUpPageMethods.signUpButtonClick()
        await signUpPageMethods.invalidPassword()
    })

    it('SU_TC_04: Whether the user is able to create account with an already existing email id', async()=>{
        await signUpPageMethods.inputEmailId('reacharavindh.s14@gmail.com')
        await signUpPageMethods.inputPassword('Password@123')
        await signUpPageMethods.confirmPasswordField('Password@123')
        await signUpPageMethods.commonPointClick()
        await signUpPageMethods.conditionCheckbox()
        await signUpPageMethods.signUpButtonClick()
        await signUpPageMethods.existingAccount()
    })
})