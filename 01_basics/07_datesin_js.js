// Dates

let myDate = new Date()
console.log(myDate.toString());     // Wed Dec 06 2023 18:12:19 GMT+0000
console.log(myDate.toDateString()); // Wed Dec 06 2023
console.log(myDate.toLocaleString()); //12/6/2023, 6:13:28 PM
console.log(typeof myDate); //==> object ==> interview
// let myCreateDate = new Date(2023, 0, 23)
let myCreateDate = new Date(2023, 0, 23, 5, 3)
//console.log(myCreateDate.toDateString());  // Mon Jan 23 2023
console.log(myCreateDate.toLocaleDateString()); // 1/23/2023



