const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "value");  

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);
console.log(`hey myself ${name} and my repo count is ${repoCount} `);

const gameName = new String('hitesh-h-hc')   //String is object which stores key value pair

console.log(gameName[0]);
console.log(gameName.__proto__); // contains objects


console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //cannot give -ve value
console.log(newString);


const anotherString = gameName.slice(-8,4) // In this we can put negative value also ans it works reversly
console.log(anotherString)

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trim());

const url = "https://hitesh.com/hite%20mane"


console.log(url.replace('%20','-'));

console.log(url.includes('hitesh')); //true
console.log(gameName.split('-'));  //split from - 
