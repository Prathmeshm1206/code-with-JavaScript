// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//    if (element == 5) {
//       //console.log("5 is best number");
//    }
   //console.log(element);
//}

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//  console.log(`Inner loop ${j} and inner loop ${i}`);
//     }
   
// }




/// for of ++++++++++++++++++++++++++++++++++++++++++=

// ["", "", ""]
// [{},{},{}]

// const arr = [1, 2, 3, 4, 5]

// for (const val of arr) {
//     console.log(val);
// }

// const greeting = "Hello world"
// for (const greet of greeting) {
    
//     console.log(`Each char is ${greet}`);
// }

// map +++++++++++++++++++++++++++++++++++++++++++++++++

const map = new Map()
map.set('IN',"india")
map.set('USA', "united states of america")
map.set('fr', "france")
map.set('IN',"india")

console.log(map);


// Objects Not interate through Map

const myObj = {
  game1: 'NSF',
  game2: 'spider-man'
}
for (const [key] of myObj) {
    
    console.log(key);
}