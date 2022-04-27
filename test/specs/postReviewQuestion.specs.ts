import * as config from "config";
import { addLogger } from '../../src/main/utilities/logger'
import postReviewQuestion from "../../src/main/pageobjects/postReviewQuestion.page"
const postReviewQuestions=new postReviewQuestion();
const ASSERT_CHAI = require("chai").assert;


describe("Post a Review Question on Amazon Product and validate the Same ",async()=>
{ 
    it("Post a Review Question on Amazon Product and validate the Same ",async()=>
    {
       postReviewQuestions.open();
       postReviewQuestions.searchProduct("mobiles");
       //ASSERT_CHAI.exists(await postReviewQuestions.selectMobile);
       browser.pause(5000)
       await postReviewQuestions.selectMobile.waitTillInterval(5000)
       let handles:any=await browser.getWindowHandles();
       await browser.switchToWindow(handles[1])
       postReviewQuestions.validatePostQuestionButton();

       await postReviewQuestions.searchInputField.setValue("Is this product available in blue color?")
       ASSERT_CHAI.exists(await postReviewQuestions.postQuestion);
       await postReviewQuestions.popUpValidateFunction();
       await postReviewQuestions.emailField.waitForDisplayed();
       await postReviewQuestions.loginFunctionality("opportun.team09@gmail.com","Opportun123");
       ASSERT_CHAI.exists(await postReviewQuestions.validateQuestionReceived)
       console.log(await postReviewQuestions.validateQuestionReceived.getText()+"=====================================")



      

    })
})