// Preimitive 

// 7 types : String, number, boolean, null, undefined, Symbol, BigInt

                                                 
//JavaScript is dynamically typied, which means that data types of variables are 
//determined by the value they hold at runtime 
//and can change throughout the program as we assign different values to them

const score = false 
const scorevalue = 100.3 
const isLogged = false 
const outside = null    // type => object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigNumber = 3454563456453456345n

// Reference (Non primitive) ==> Return types has object

// Array, Object, Functions  ==> Function return type -> function-object 

const heros = ["shakitman", "nagraj", "doga"]
let myObj={
    name: "hitesh",
    age: 22,
}

// Function

const muFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);



// ****************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "omkarmanecom"  //myYoutubename stored in stack

let anothername = myYoutubename    // copy of myYoutubename is given to anothername in stack
anothername ="chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={                    //stored in heap
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne   //referencing to the userOne data into heap

userTwo.email="omakr@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//output: 
// omakr@google.com
// omakr@google.com