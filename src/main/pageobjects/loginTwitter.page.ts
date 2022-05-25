export default class LoginTwitter {
    public get username() {
        return <any>$("//input[@autocomplete='username']")
    }

    public get password() {
        return <any>$("//input[@autocomplete='current-password']")
    }

    public get nextButton() {
        return <any>$("//span[text()='Next']")
    }

    public get loginButton() {
        return <any>$("//span[text()='Log in']")
    }
}

/*
module.exports = new LoginTwitter()
export default new LoginTwitter()
*/