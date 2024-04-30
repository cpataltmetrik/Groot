module.exports = {
  // Generate randome Email
  randomEmail: function generateEmail() {
    var allchars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var emailLength = 15;
    var emailStr = "";

    for (var i = 0; i < emailLength; i++) {
      emailStr += allchars[Math.floor(Math.random() * allchars.length)];
    }
    emailStr = emailStr + "@wdio.com";
    return emailStr;
  },

  generateFileNameWithTimeStamp: function () {
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    let fileName: String;
    fileName = "screenshot_" + currentTimeInSeconds + ".png";
    return fileName;
  },

  /**
   * Description: This function will generate the UTC timestamp in rerun file name.
   * @returns It will return the fileName with UTC timestamp
   */

  generateRerunFileNameWithTimeStamp: function () {
    const currentTime = Math.floor(Date.now());
    let fileName: String;
    fileName = "UTC Time -" + currentTime;

    return fileName;
  },
};
