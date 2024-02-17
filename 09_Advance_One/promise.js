// webrequest fetch('http://localhost.com')
// response = .then()
// error = .catch
// good = .finally()
// pormise = object
// async await can not handle directly


// Bluebird liberary
// Performance Native

// how to create promesis
const promise1 = new Promise(function (resolve, reject) {
  // Do an async task
  // DB call, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete.");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@gmail.com"})

    }, 1000)
}).then(function (user) {
    console.log(user);
});


const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Saad", password: "123"})
        }else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

// const username = not use

promise4
.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username);
}).catch(function (error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})



const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "JavaScript", password: "123"})
        }else {
            reject("ERROR: JS went wrong")
        }
    }, 1000) 
})

async function consumePromise5(){
    try {
        const response = await promise5
console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
consumePromise5()

// async function getAllUsers(){
    // try {
        // const response = await fetch('http://jsonplaceholder.typicode.com/users')
// 
        // const data = await response.json()
        // console.log(data);
    // } catch (error) {
        // console.log("E: ", error);
    // }
// }

// getAllUsers()

fetch('http://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error)=> console.log(error));