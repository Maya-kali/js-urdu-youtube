// for of loops

// ["","",""]
// [{},{}]

const arr = [1,2,3,4,5,6,7,8,9]

// loop
// broder way = object
for (const num of arr) {
    console.log(num);
}

const greatings = "hello world!"
for (const great of greatings) {
    // console.log(`Each char is ${great}`);
}

// Maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const [key, Value] of map) {
    console.log(key, ":- " + Value);
}

const myObect = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, Value] of myObect) {
    // console.log(key);
// }