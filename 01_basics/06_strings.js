const name = "Saad"
const repoCount = 34

saad = "Saad Ahmad"
ahmad = "Khan"
khan = "Saad Ahmad Khan"

console.log(`My first name is : ${saad} and my second and last name is : ${ahmad}\n so my full name is 
${khan}`);

// console.log(name + repoCount + "Value");  this sentence is outdated, i'm not using this style

// `` back tic 
console.log(`Hello my name is ${name} and count value is ${repoCount}`);

const gameName = new String('saad-ak')

console.log(`This is string: ${gameName}`);
console.log(`This is length: ${gameName.length}`);
console.log(`This is UpperCase: ${gameName.toUpperCase()}`);
console.log(`This is TrimEnd: ${gameName.trimEnd()}`);
console.log(`This is CharAt: ${gameName.charAt(2)}`);
console.log(gameName.indexOf('a'));

const newSting = gameName.substring(0,4)
console.log(newSting);

const anOtherString = gameName.slice(-3,5)
console.log(anOtherString);

const url = "https://saad.com/werwe%20saadkhan"
console.log(url.replace('%20', '-'));
console.log(url.includes('ahmad'))

console.log(gameName.split('_'));