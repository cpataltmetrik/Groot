import { addLogger } from "../utilities/logger"
const chaiExpect: any = require("chai").expect
const apiEnvironmentVariables = require("../../../config/api_env.json")
import LoadPage from  "../pageObjects/loadPage.page"
//'../../../src/main/pageObjects/loadPage.page'
const loadPage = new LoadPage()
const fs = require("fs")
const twitterAPIData = require("../../../test/testData/twitterApi.data.json")
import ApiGetMethodCall from "../../../src/main/utilities/apiGetMethodCall.util"
const apiGetMethodCall = new ApiGetMethodCall()
import axios from "axios"
import LoginTwitter from "../pageObjects/loginTwitter.page"
const loginTwitter: any = new LoginTwitter()
import FetchUserDetailsByUsername from "../pageObjects/fetchUserDetailsByUsername.page"
const fetchUserDetailsByUsername = new FetchUserDetailsByUsername()
import FetchUserFollowersDetails from "../pageObjects/fetchUserFollowersDetails.page"
const fetchUserFollowersDetails = new FetchUserFollowersDetails()
import FetchUserFollowingDetails from "../pageObjects/fetchUserFollowingDetails.page"
const fetchUserFollowingDetails = new FetchUserFollowingDetails()
import FetchUserLikedTweetDetails from "../pageObjects/fetchUserLikedTweetDetails.page"
const fetchUserLikedTweetDetails = new FetchUserLikedTweetDetails()
const axiosApiEnvironmentVariables = require("../../../config/axiosApiEnv.json")
const practiceWebsiteApisData = require("../../../test/testData/practiceWebsiteApis.data.json")
import APICalls from '../helper/http-method-config'

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
    practiceWebsiteApisData,
    APICalls
}