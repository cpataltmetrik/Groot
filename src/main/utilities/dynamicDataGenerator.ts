var faker = require("faker");

export default class dynamicDataGenerator{

    public static getRandomName(gender){
        return faker.name.findName(gender);
    }
    public static getRandomMail(firstName,secondName,provider){
        return faker.internet.email(firstName,secondName,provider);
    }
    public static getRandomPassword(passwordLength){
        return faker.internet.password(passwordLength);
    }
    public static getRandomPhoneNumber(format){
        return faker.phone.phoneNumber(format);
    }
    public static getRandomCard(){
        return faker.helpers.createCard();
    }
    public static randomData({
        firstName = "groot",
        secondName = "altimetrik",
        provider="gmail.com",
        passwordLength = 8,
        gender ="male",
        format = "91########"
    }){
        const testdata = {
           email : dynamicDataGenerator.getRandomMail(firstName,secondName,provider),
           password : dynamicDataGenerator.getRandomPassword(passwordLength),
           name : dynamicDataGenerator.getRandomName(gender),
           phoneNumber : dynamicDataGenerator.getRandomPhoneNumber(format)
        }
        return testdata
    }

}