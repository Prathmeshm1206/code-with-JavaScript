
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

console.log(loginUserMessage())