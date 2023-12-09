// singleton => made from constructor
Object.create

// to Create symbols

const mysym = symbol("key1")


// object literals  ==> we can define from keys and values
const JsUser ={
    name: "omkar",
    "Full name" : "Prathmesh mane",
    [mysym]
     : "mykey", //===> not working like symbol 
    age : 18,
    location: "Jaipur",
    isLoggedIn: false,
    email: "omkar@gmail.com",
    lastLogiDays: ["Monday", "Sunday"]

}
console.log(JsUser.age);
//console.log(JsUser[age]);
console.log(JsUser["Full name"]);
console.log(JsUser[mysym]);


