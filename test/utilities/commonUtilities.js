class commonUtilities{
    clearField(locator){
        $(locator).clearvalue()
    }

    async loginPageNav(){
        await $('//android.view.View[@content-desc="Login"]').click()
    }

    async allowNotification(){
        await $('//android.widget.Button[@text="Allow"]').click()
    }
}

module.exports = new commonUtilities()