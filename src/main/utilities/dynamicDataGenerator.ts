const { faker } = require('@faker-js/faker');

export default class dynamicDataGenerator{

    public static getRandomName(gender){
        return faker.name.firstName(gender);
    }
    public static getRandomMail(firstName,secondName,provider){
        const random = Math.floor(Math.random() *100000);
        secondName = secondName+random;
        let email = ""
        while(!email.includes(secondName)){
            email = faker.internet.email(firstName,secondName,provider).replace(/[^a-zA-Z0-9@.]/g, "")
        }
        return email;
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
    public static getUserName(){
        return faker.internet.userName()
    }
    public static randomData({
        firstName = "",
        secondName = "at",
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