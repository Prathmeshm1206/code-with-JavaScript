// let score = null  //=> 0
let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)  //converting string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" =>NaN (type number)
// true => true; false=> 0


let isLogged = 1 //=>true ""=> false "hello"=>true

let booleanIsLoggedIn = Boolean(isLogged)
console.log(booleanIsLoggedIn);  


// converting number to string
let someNumber = 33
let stringNumber = String(someNumber) // string=>converts dataType
console.log(stringNumber);
console.log(typeof stringNumber);