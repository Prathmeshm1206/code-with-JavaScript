
function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

//sayMyName()

// function addTwoNum(n1, n2){
//     console.log(n1 + n2);
// }
function addTwoNum(n1, n2){
   let result = n1+n2
   return result
   console.log("hitesh"); //=>not execute after returning in function 
}
const result =addTwoNum(12,5)

console.log(result); //=> undefined

function loginUserMessage(username) {
    if (username === undefined) {  //=> (!unsername)
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())

function calculatePrice(val1, val2,...num1){   //==> rest or spread operator
 return num1
}
console.log(calculatePrice(200,500,400,2000))


//***********************  Object and Function ***********************
const user ={
    username:"hitesh",
    price: 199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject(user)