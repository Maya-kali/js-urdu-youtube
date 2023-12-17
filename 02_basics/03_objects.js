// literal will not make singleton


// constructors = singleton constructor
// Object.create

// Object Literals


const mysymbol = Symbol("key1")

const jsUser = {
    name: "Shaktiman",
    age: 30,
    "full Name:": "Shaktiman",
    [mysymbol]: "mysymbol1",
    hobbies: ["Sports", "Cooking", "Gaming"],
    location: "karachi",
    email: "shaktiman@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Sun", "Mon", "Tue", "Wed", "Thu",]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name:"]);
// console.log(jsUser[mysymbol]);
// 
jsUser.email = "shaktiman@gmail1.com"
// Object.freeze(jsUser)
jsUser.email = "saad@gmail.com"
// console.log(jsUser);
// console.log(jsUser.email);


jsUser.greating = function(){
    console.log("Hello world");
}
jsUser.greatingTwo = function(){
    console.log(`Hello world, ${this.name}`);
}
console.log(jsUser.greating());
console.log(jsUser.greatingTwo());