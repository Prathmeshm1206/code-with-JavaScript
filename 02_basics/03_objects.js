// singleton => made from constructor
Object.create

// to Create symbols

//const mysym = symbol("key1")


// object literals  ==> we can define from keys and values
const JsUser ={
    name: "omkar",
    "Full name" : "Prathmesh mane",
    // [mysym]
    //  : "mykey", //===> not working like symbol 
    age : 18,
    location: "Jaipur",
    isLoggedIn: false,
    email: "omkar@gmail.com",
    lastLogiDays: ["Monday", "Sunday"]

}
console.log(JsUser.age);
//console.log(JsUser[age]);
console.log(JsUser["Full name"]);
//Object.freeze(JsUser)   // cannot update further
JsUser.email = "mane@gmail.com"
console.log(JsUser.email);

JsUser.greeing = function(){
    console.log("Hello js user");
}
JsUser.greeingTwo = function(){
    console.log(`Hello Js User ${this["Full name"]}`); //show all JsUser object properties
}

console.log(JsUser.greeing());  // => undefined  ()=>return funtion