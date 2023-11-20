
//+++++++++++++++++++++++++++++Number++++++++++++++++++++++++
const score = 400

// console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherNumber = 23.8966
const otherNumber1 = 123.8966
const otherNumber2 = 1123.8966

// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber1.toPrecision(3));
// console.log(otherNumber2.toPrecision(3));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++Maths+++++++++++++++++++++++++++


console.log(Math); // Object

// console.log(Math.abs(-4)); //negative into positive if we use Math.abs(-4)
// console.log(Math.round(4.3)); //Round value Math.round(4.3) = 4 (4.6) = 5
// console.log(Math.ceil(4.3)); //Top value Math.ceil(4.3) = 5
// console.log(Math.floor(4.3)); //Low value Math.flow(4.3) = 4
// console.log(Math.min(4,3,6,8)); //Take Minimum value Math.min(4,3,6,8) = 3
// console.log(Math.max(4,3,6,8)); //Take Maximum value Math.max(4,3,6,8) = 8
console.log(Math.random()); //It take value between 0 or 1 Math.random() 0.556556, 0.5645656, .0985488
console.log(Math.random()*10 + 1); //It take value between 1 or 9 Math.random() 1.556556, 5.5645656, 8.0985488
console.log((Math.random()*10) + 1); //It take value between 0 or 1 Math.random() 0.556556, 0.5645656, .0985488
console.log(Math.floor(Math.random()*10) + 1); //It take value between 0 or 1 Math.random() 0.556556, 0.5645656, .0985488

const min = 10
const max = 20

// console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1) + min));
