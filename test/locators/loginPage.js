class loginPage{

    get loginNavButton(){
        return $('//android.view.View[@content-desc="Login"]')
    }

    get emailIdField(){
        return $('//android.widget.EditText[@index="3"]')
    }

    get passwordField(){
        return $('//android.widget.EditText[@index="4"]')
    }

    get loginButton(){
        return $('//android.widget.Button[@content-desc="Sign In"]')
    }

    get textWish(){
        return $('//android.view.View[@content-desc="Good Evening, Aravind S Panicker"]')
    }


    /* -------------------------------------------------------------------------- */
    /*                                 Validations                                */
    /* -------------------------------------------------------------------------- */
    get toastMsg(){
        return $('//android.view.View[@bounds="[0,1197][1080,2154]"]')
    }

    get toastMsgFullScreen(){
        return $('//android.view.View[@bounds="[0,1953][1080,2154]"]')
    }
}

module.exports = new loginPage()