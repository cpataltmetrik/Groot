import { addLogger } from "../utilities/logger"
const chaiExpect: any = require("chai").expect
const apiEnvironmentVariables = require("../../../config/api_env.json")
import LoadPage from "../../../src/main/pageobjects/loadPage.page"
const loadPage = new LoadPage()
const fs = require("fs")
const twitterAPIData = require("../../../test/testData/twitterApi.data.json")
import ApiGetMethodCall from "../../../src/main/utilities/apiGetMethodCall.util"
const apiGetMethodCall = new ApiGetMethodCall()
import axios from "axios"
import LoginTwitter from "../../../src/main/pageobjects/loginTwitter.page"
const loginTwitter: any = new LoginTwitter()
import FetchUserDetailsByUsername from "./fetchUserDetailsByUsername.page"
const fetchUserDetailsByUsername = new FetchUserDetailsByUsername()
import FetchUserFollowersDetails from "../../../src/main/pageobjects/fetchUserFollowersDetails.page"
const fetchUserFollowersDetails = new FetchUserFollowersDetails()
import FetchUserFollowingDetails from "../../../src/main/pageobjects/fetchUserFollowingDetails.page"
const fetchUserFollowingDetails = new FetchUserFollowingDetails()
import FetchUserLikedTweetDetails from "../../../src/main/pageobjects/fetchUserLikedTweetDetails.page"
const fetchUserLikedTweetDetails = new FetchUserLikedTweetDetails()
const axiosApiEnvironmentVariables = require("../../../config/axiosApiEnv.json")
const practiceWebsiteApisData = require("../../../test/testData/practiceWebsiteApis.data.json")

export {
    addLogger,
    chaiExpect,
    apiEnvironmentVariables,
    loadPage,
    fs,
    twitterAPIData,
    apiGetMethodCall,
    axios,
    fetchUserDetailsByUsername,
    fetchUserFollowersDetails,
    fetchUserFollowingDetails,
    fetchUserLikedTweetDetails,
    loginTwitter,
    axiosApiEnvironmentVariables,
    practiceWebsiteApisData
}