
let c = 300
const b = 50
if(true){
    let a = 10
    const b = 20
    // var c = 30
    //console.log("inner ",a);
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"


    // nested function
    // => inner function two can access outer function (one)
    // it is also called closure
    function two (){
        const website ="youtube";
        console.log(username);
    }
    //console.log(website);  // error => outside the scope
    two()
}
// one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website ="youtube"
        console.log(username + website);
    }
    // console.log(website);  error => out of scope 
}
// console.log(username); error => out of scope


//+++++++++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addone(5));
function addone(num){
   return num +1
}

// addTwo(5) ==> Hoisting  we cannot declear before funtion
const addTwo = function (num) {
    return num +2
} 


