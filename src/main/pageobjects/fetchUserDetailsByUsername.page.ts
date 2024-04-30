export default class getUserDetailsByUsername {

    public get searchBox() {
        return <any>$("//input[@data-testid='SearchBox_Search_Input']")
    }

    public get pressEnter() {
        return <any>browser.keys("\uE007")
    }

    public get redirectToUserAccount() {
        return <any>$("//a[@href='/MentorWebDev']")
    }

    public get accountName() {
        return <any>$("(//div[@dir='auto']/span/span)[5]")
    }

    public get accountUserName() {
        return <any>$("(//div[@dir='ltr']/span)[2]")
    }

}

/*
module.exports = new getUserDetailsByUsername()
export default new getUserDetailsByUsername()
*/