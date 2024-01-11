// this keyword Refer to current context Details
// learn arrow functions = this function
// In browser window options  

const user = {
    username: "Saad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this);

// function chai (){
    // let saad = "Sam"
    // console.log(this.saad);
// }
 
// chai();

// const chai = function(){
    // let saad = "Sam"
    // console.log(this.saad);
// }
// Arrow Functions
const chai =() =>{
    let saad = "Sam"
    console.log(this);
}

// chai();
// if we use curly braces write return 
// {} = return

// const addTwo = (num1, num2) => {
    // return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// if we use parentheses no need to use returned
// const addTwo = (num1, num2) => (num1 + num2)
// if we use Object use parentheses   
const addTwo = (num1, num2) => ({username: "Saad"})


console.log(addTwo(3,4))



const myArray = [1,2,3,4]

// loop
// function
myArray.forEach(function(){})
// Arrow functions
myArray.forEach(() => {})



