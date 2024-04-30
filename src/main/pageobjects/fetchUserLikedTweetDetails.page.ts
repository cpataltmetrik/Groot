export default class getUserLikedTweetDetails {

    public get likedTweetsLink() {
        return <any>$("//a[@href='/MentorWebDev/likes']")
    }

}

/*
module.exports = new getUserLikedTweetDetails()
export default new getUserLikedTweetDetails()
*/