// # Primitive

// 7 types : String, Number , Boolean , null , undefined , symbol , BigInt


const score = 100 
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2297384782784723n
// reference (Non-primitive)

// Array , obects , Functions 

const heros = ['ironman','power','panther'];
let myObject = {
    name: "Phulpati",
    age:22,
}

const myFunction = function() {
    console.log("Hello ,world");
}

console.log(typeof anotherId);



// Stack(primitive),heap(Non primitive)
let MyName = "Phulpati"
let anotherName = MyName
anotherName = "Ccode"
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
