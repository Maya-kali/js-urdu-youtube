// we use string, number, null, undefined, boolean
let score = false

// start learning conversion

// console.log(typeof score);
// console.log(typeof (score));

let valueNumber = Number(score)
// console.log( typeof valueNumber);
// console.log( valueNumber);


// "33" => 33   
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = ""

let BooleanLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanLoggedIn);


// 1 => true; 0 => false
// "" => false
// "saad" => true


let someNumber = '33 abc'

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ****************************Operation*********************

let Value = 33
let negValue = -Value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Saad"
let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log( (2 + 4) * 4 % 3);

let num1, num2, num3
num1 = num2 = num3 = 3+2

let gameCounter = 100
gameCounter--;
console.log(gameCounter);


let x = 3
let y = x++ // Postfix

console.log("Postfix: " + y);

let x2 = 3
let y2 = ++x2  // Prefix

console.log("Prefix: " + y2);
