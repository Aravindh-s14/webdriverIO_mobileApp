const find = require('../pages/loginPageMethods')
const commonUtilities = require('../utilities/commonUtilities')

describe('Login Page Testcases', () => {
    
    before(()=>{
        commonUtilities.allowNotification()
        commonUtilities.loginPageNav()
    })

    it('LP_TC_01: Whether the user is able to empty email and password fields',async()=>{
        await find.clickLogin()
        await find.emptyFields()
    })

    it('LP_TC_02: Whether the user is able to empty email and password fields',async()=>{
        await find.inputEmail('test@gmail.com')
        await find.clickLogin()
        await find.emptyPasswordField()
    })

    it('LP_TC_03: Whether the user is able to login with invalid email id',async()=>{
        await find.inputEmail('ttttttt')
        await find.inputPassword('Password@123')
        await find.clickLogin()
        await find.invalidEmail()
    })

    it('LP_TC_04: Whether the user is able to login with unregistered emailid',async()=>{
        await find.inputEmail('testttt@gmail.com')
        await find.inputPassword('Password@123')
        await find.clickLogin()
        await find.unregisteredEmail()
    })

    it('LP_TC_05: Whether the user is able to successfully login using valid credentials',async()=>{
        await find.inputEmail('reacharavindh.s14@gmail.com')
        await find.inputPassword('Password@123')
        await find.clickLogin()
        await find.verifyLogin()
    })
    
});