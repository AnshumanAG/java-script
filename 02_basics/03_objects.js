// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "anshuman",
    [mySym]: "myNewkey1", // correct way of using symbols
    "full name": "anshuman agarwal",
    age: 18,
    email: "anshuma@gmail.com",
    location: "alwar",
    isLoggedIn: false,
    lastLoginDays: ["saturday", "monday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); // same same but at a string time this is correct
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "anshuman@youtube.com" // for overwrite
// Object.freeze(JsUser)
JsUser.email = "anshuman@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());