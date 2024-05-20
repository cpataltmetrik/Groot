import postReviewQuestion from "../../src/main/pageobjects/postReviewQuestion.page";
const postReviewQuestions = new postReviewQuestion();
// const ASSERT_CHAI = require("chai").assert;
import { assert } from "chai";

describe("Post a Review Question on Amazon Product and validate the Same ", async () => {
    it("Post a Review Question on Amazon Product and validate the Same ", async () => {
        postReviewQuestions.open();
        postReviewQuestions.SearchProduct("mobiles");
        assert.exists(await postReviewQuestions.selectMobile);
        await postReviewQuestions.selectMobile.waitTillInterval(5000);
        const handles: Array<string> = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        postReviewQuestions.ValidatePostQuestionButton();
        await postReviewQuestions.searchInputField.setValue(
            "Is this product available in blue color?",
        );
        assert.exists(await postReviewQuestions.postQuestion);
        await postReviewQuestions.PopUpValidateFunction();
        await postReviewQuestions.emailField.waitForDisplayed();
        await postReviewQuestions.LoginFunctionality(
            "opportun.team09@gmail.com",
            "Opportun123",
        );
        assert.exists(await postReviewQuestions.validateQuestionReceived);
    });
});