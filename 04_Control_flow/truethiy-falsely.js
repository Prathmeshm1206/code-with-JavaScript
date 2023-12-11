const userEmail = []
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
}

//false  values ==>

// false , 0, -0, BigInt, "", null, undefined, NaN


//truthy values==>

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is emplty");
// }

const emptyObj ={}

if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty");
}

// Terniary Operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");


