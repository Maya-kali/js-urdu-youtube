    // The array object, as with arrays in other programming languages, 
    // enables storing a collection of multiple items under a single variable name, and has numbers for
    // performance common array operations.
    // () Perenthesis
    // [] Square Brackets
    // {} Curly Brackets    

    // in brackets called elements, and elements are in brackets strings, numbers and mixed. 
    const myArr = [0, 1, 2, 3, 4, 5,]
    const myHeros = ["Shaktiman", "naagraj"]

    const myArr2 = new Array(1, 2, 3, 4)
    // result arrays use brackets and 0
    // console.log(myArr[1]);

    // Array Methods

    // myArr.push(6)
    // myArr.push(7)
    // myArr.pop() // remove last elements from the array

    myArr.unshift(9) // add first element to the array
    myArr.shift() // remove first element from the array

    // console.log(myArr.includes(3));
    // console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// 
// console.log(myArr);
// console.log(typeof newArr);

// slice and splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log("Slice:", myn1);
console.log("B", myArr);

const myn20 = myArr.splice(1, 3)
console.log("Splice:", myn20); 
console.log("C", myArr);