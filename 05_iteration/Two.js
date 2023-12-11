
// For In loop for  iteration on objects


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb:'ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "c++", "swift","java" ]

for (const key in programming) {
    
        console.log(key);
    
}

const map = new Map()
map.set('IN',"india")
map.set('USA', "united states of america")
map.set('fr', "france")
map.set('IN',"india")

for (const key in map) {
   console.log(key);  //=> not interable
}
