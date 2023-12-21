const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['ironman', 'flesh', 'batman']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marge two arrays marvel_heros and dc_heros 
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// this easy way to create a single array
const all_new_heros = [...marvel_heros, ...dc_heros] // ...means that spreading   
console.log(all_new_heros);

console.log(Array.isArray("Saad"))
console.log(Array.from("Saad")) // full array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // convert variable to array
