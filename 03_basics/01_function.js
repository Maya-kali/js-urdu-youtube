
// function = function keyword,
// Name = sayMyName
// syntax = (){}
function sayMyName(){
console.log("S");
console.log("A");
console.log("A");
console.log("D");
}
// sayMyName()

// sayMyName()
// function name = reference 
// Parenthesis = execution
// run time like sayMyName in side the parenthesis is called arguments

// basic function
// inside the parenthesis is called parameters
// function addTwoNumbers(number1, number2){
    // console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    console.log("Saad") // it will print
    return result
    console.log("Saad") // it will not print
}
// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)


// store in variable

const result = addTwoNumbers(3, 5)
// console.log("Result: " , result);

function logInUserMessage (username = "Sam"){
    if// (username === undefined)
    (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} Just Logged in`
}

// console.log(logInUserMessage("Saad"))
// console.log(logInUserMessage())

// ... = rest operators and spread operators
function calculateCartPrice(val1, val2, ...num1){
    return num1 
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

// Object function

const user = {
    username: "Saad",
    prices: 199
}
function handleObject(anyObject){
    console.log(`User Name is ${anyObject.username} and price is 
    ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// Array function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));