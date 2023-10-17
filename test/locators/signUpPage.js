class signUpPage{

    get emailField(){
        return $("//android.widget.EditText[@index='2']")
    }

    get passwordField(){
        return $("//android.widget.EditText[@index='3']")
    }

    get confirmPasswordField(){
        return $("//android.widget.EditText[@index='4']")
    }

    get signUpButton(){
        return $('//android.widget.Button[@content-desc="Sign Up"]')
    }

    get termsCheckbox(){
        return $('//android.widget.CheckBox[@index="5"]')
    }

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */

    get toastField(){
        return $('//android.view.View[@bounds="[0,1953][1080,2154]"]')
        //return $('//android.view.View[@content-desc="Sign Up"]')
    }

    get invalidpasswordToast(){
        return $('//android.view.View[@bounds="[0,1821][1080,2154]"]')
    }



/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */
    get commonPoint(){
        return $('//android.view.View[@content-desc="Sign Up"]')
    }

}

module.exports = new signUpPage();