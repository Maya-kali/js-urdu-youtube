const userEmail = []

if (userEmail) {
    console.log("Got user email: " + userEmail);
} else {
    console.log("No user email");
}

// false values 

// false = false, 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy values

// "0", 'false, " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 12

console.log(val1);


// Ternary Operator

const iceTEaPrice = 200

iceTEaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;