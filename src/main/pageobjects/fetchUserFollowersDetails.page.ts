export default class getUserFollowersDetails {

    public get followersCount() {
        return <any>$("(//a[@href='/MentorWebDev/followers']/span)[1]")
    }

    public get followersLink() {
        return <any>$("//a[@href='/MentorWebDev/followers']")
    }

}

/*
module.exports = new getUserFollowersDetails()
export default new getUserFollowersDetails()
*/