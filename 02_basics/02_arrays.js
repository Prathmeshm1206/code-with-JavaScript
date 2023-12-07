const marvel_heros= ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

//marvel_heros.push(dc)

// console.log(marvel_heros);
// //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);  flash

const heros = marvel_heros.concat(dc)
console.log(heros);
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//***********************  Spread (concating two strings)*************** */
const allhero = [...marvel_heros, ...dc]
console.log(allhero); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr= another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("hitesh")); // => false
console.log(Array.from("omkar"));     // [ 'o', 'm', 'k', 'a', 'r' ]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
