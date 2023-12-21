// Globle scope
// var c = 300
let a = 300

if (true) {
// block scope
  let a = 10;
  const b = 20;
  
}

// scope {}


console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "saadAhmad"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one() 
if(true){
    const username = "saadAhmad"
    if(username === "saadAhmad"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);
// ++++++++++++++++++++++ interesting ++++++++++++++++

addone(5)
function addone(num){
    return num + 1;
}
// console.log(addone(5))

addTwo(5)
const addTwo = function(num){
    return num + 2
}