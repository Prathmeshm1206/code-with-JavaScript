// arrays

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["abc", "xyz"]
const myarr2 = new Array(1, 2, 3, 4)

//console.log(myArr[1]);

// Arrays methods

// myArr.push(6)
// myArr.push(7) 
 //                        [
                        //   0, 1, 2, 3,
                        //    4, 5, 6, 7
                        //   ]         
 myArr.unshift(9)        
//  [
//     9, 0, 1, 2,
//     3, 4, 5
//   ]              

myArr.shift()   //[ 0, 1, 2, 3, 4, 5 ]
// console.log(myArr.includes(9));  //=> type - boolean
// console.log(myArr.indexOf(9));   //=> -1

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); //0,1,2,3,4,5 => type => string

// Slice => Return section of array  
// Splice=> 

console.log("A ", myArr); // => A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3) //=> [ 1, 2 ]
console.log(myn1);           //=>B  [ 0, 1, 2, 3, 4, 5 ]
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)//=> [ 1, 2, 3 ]
console.log(myn2);
console.log("c ", myArr);  //=> c  [ 0, 4, 5 ]

