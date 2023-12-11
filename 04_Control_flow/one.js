// if

// const isUserlogged = true
// const temperature = 51

// if (temperature<50){
//      console.log("less than 50");
     
// }
// else{
//     console.log("temp is greater than 50");
// }

//2<=2
//<, >, <=, ==, !=, ===(it also check type)

// const score = 200

// if(score > 100){
//     let power = "fly"     // error not access out of scope
//     console.log(`User power:  ${power}`);
// }
// console.log(`user power: ${power}`);


// const balance = 1000
// if(balance > 50000) console.log("test");
// console.log("test2");

const isUserlogged = true
const debitcard = true
const loggedInFromGoole = false
const loggedInFromEmail = true

if(isUserlogged && debitcard)
{
    console.log("Allow to buy course");
}

if(loggedInFromGoole || loggedInFromEmail){
    console.log("user logged in");
}