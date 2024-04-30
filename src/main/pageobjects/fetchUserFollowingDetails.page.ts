export default class getUserFollowingDetails {

    public get followingCount() {
        return <any>$("(//a[@href='/MentorWebDev/following']/span)[1]")
    }

    public get followingLink() {
        return <any>$("//a[@href='/MentorWebDev/following']")
    }

}

/*
module.exports = new getUserFollowingDetails()
export default new getUserFollowingDetails()
*/