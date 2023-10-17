const find = require ('../locators/signUpPage')

class signUpPageMethods{

    async inputEmailId(emailid){
        await find.emailField.click()
        await find.emailField.clearValue()
        await find.emailField.setValue(emailid)
    }

    // async emailIdFieldClick(){
    //     await find.emailField.click()
    // }

    async inputPassword(password){
        await find.passwordField.click()
        await find.passwordField.clearValue()
        await find.passwordField.setValue(password)
    }

    // async passwordFieldClick(){
    //     await find.passwordField.click()
    // }

    async confirmPasswordField(password){
        await find.confirmPasswordField.click()
        await find.confirmPasswordField.clearValue()
        await find.confirmPasswordField.setValue(password)
    }

    // async confirmPasswordClick(password){
    //     await find.confirmPasswordField.click()
    // }

    async signUpButtonClick(){
        await find.signUpButton.click()
    }

    async conditionCheckbox(){
        await find.termsCheckbox.click()
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Validations                                */
    /* -------------------------------------------------------------------------- */

    async emptyFieldsValidation(){
        const actual = await find.toastField.getAttribute('content-desc'); 
        //expect(actual).toEqual('Email id cannot be empty Please enter an Email id and try again');
        expect(actual.includes('Email id cannot be empty')).toBe(true);
    }

    async invalidEmailId(){
        const actual = await find.toastField.getAttribute('content-desc')
        expect(actual.includes('Incorrect email')).toBe(true)
    }

    async invalidPassword(){
        const actual = await find.invalidpasswordToast.getAttribute('content-desc')
        expect(actual.includes('Password must be 8 characters or more and 16 characters or less')).toBe(true)
    }

    async existingAccount(){
        const actual = await find.toastField.getAttribute('content-desc')
        console.log(actual)
        expect(actual.includes('An Account with the given Email exists')).toBe(true)
    }

    async commonPointClick(){
        await find.commonPoint.click()
    }

}

module.exports = new signUpPageMethods()