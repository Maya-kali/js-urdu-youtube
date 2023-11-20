// Primitive

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt,  
// String = ""
// Number = 234
// Boolean = true and false 
// Null = full empty
// Undefined = create variable but not put value 
// BigInt = 0.23424
// Symbol = Create unique value 


const score = 100;          // Result type: number
const scoreValue = 100.8    // Result type: number    

const isLoggedIn = false    // Result type: boolean
const outSideTem = null     // Result type: object
let userEmail;              // Result type: undefined

const id = Symbol('123')    // Result type: symbol    
const anOtherId = Symbol('123')

console.log(id === anOtherId);


const bigNumber = 654653264621654621n
// Reference (Non Primitive) 
// allocate reference in memory

// Master in java : Object, browser event 

// Array, Object, Functions

const heros = ["Saad", "Ahmad", "Khan"] // Array

// anything else in curly braces its call Object

let myObj = {       //Object
    name:"Saad1",
    ege: "22",
}

// function(){}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof id);

// ===========================================================================


// Memory
// 2 Types: Stack (Primitive) , Heap (Non Primitive)
//Copy Value                  , // Original value reference 

let myYouTubeName = "SaadAhmadKhan"

let anOtherName = myYouTubeName

anOtherName = "SAK"


let userOne = {
    email: "saad@gmail.com",
    hbl: "saad@hbl.com",
}

let userTwo = userOne

userTwo.email = "saad@google.com"

console.log(userOne.email);
console.log(userTwo.email);


console.log(myYouTubeName);
console.log(anOtherName);
console.log(userTwo);