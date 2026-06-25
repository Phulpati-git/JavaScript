// // for of

// // ["", "", ""]
// // [{}, {}, {}]

// const arr = [ 1, 2, 3 ,4 , 5]

// for (const val of arr) {
//     // console.log(val);
// }

// const greetings = " hello world!"
// for (const greet of greetings) {
//     // console.log(`Each char is ${greet}`);
    
// }

// maps

const map = new Map()
map.set('NP',"Nepal")
map.set('USA',"United sates of America")
map.set('fr',"france")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key , ':-', value);
}

const myObj = {
    'Game1' : 'NFS',
    'Game2' : 'wircked'
}

// for (const [key,value] of myObj) {
//     console.log(key , ':-' , value);
    
// }