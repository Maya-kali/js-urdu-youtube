# Project releted to DOM

## project link

[Click here](https://github.com/)

# Solution Code

## project 1

```javascript
console.log("Saad");
const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
##

## project 2


```javascript
const form = document.querySelector("form");
// this use case will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const afterResults = document.querySelector("#afterResults");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```
##
## project 3

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// control events method = two functions + body + , + second parameter + 1000
setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const starOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// valid number, less than 1, more than 100
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a valid number");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber} `);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// print message value low or high
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guested right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayGuess(`Number is TOOO High`);
  }
}
//
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

//
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  starOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    starOver.removeChild(p);

    playGame = true;
  });
}


```
## Project 5
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table> 
    </div>  
    `
});
```

## Project 6
```javascript
// generate a random color

const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6;  i++) {
        color += hex[Math.floor(Math.random() *16)]
        
    }
    return color

}
// console.log(Math.floor(Math.random() * 16))
// console.log(randomColor());
let intervalID
const startChangingColor = function(color) {
    
    // setInterval(changeBGColor, 1000)
    if (!intervalID) {
        intervalID = setInterval(changeBGColor, 1000)
    }

    function changeBGColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function(color) {
    clearInterval(intervalID)
    intervalID = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
```