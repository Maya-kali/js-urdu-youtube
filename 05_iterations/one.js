// for

// for (let index = 0; index < array.length; index++) {
// const element = array[index];
//
// }

// {} = block scope in for loop statement
//let index = 0; // not executed ,
// index < array.length == condition checking

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    console.log(" 5 is best number");
  }
  //console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value ${i} `);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + ' * '+ j + ' = ' + i*j);
}
}

let myArray = ["Flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}

// console.log(element);
