// if
// run in side code if we use true
// not run if we use false
// if(true){
// 
// }
// if(false){
    // 
// }

const isUserLoggedIn = true;
const temperature = 41

if(temperature === 50){
    console.log("Temperature is less than 50");
} else{
    console.log("Temperature is greater than 50");
}
console.log("temperature is greater than 50");
// true statements
// 3 !=2 true
// 2 == "2"
// 2 === "2"
// 2 != 3
// <, >, <=, >=, ==, !=, ===, !==,

// const score = 200
// if(score > 100){
    // const power = "fly"
    // console.log(`User power: ${power}`);
// }


// shorthand notation

const balance = 1000;
// if(balance > 500) console.log("test");

// if(balance < 500){
    // console.log("less than 500");
// }else if(balance < 750 ){
    // console.log("less than 750");
// } else if(balance < 900){
    // console.log("less than 900");
// }else {
    // console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}