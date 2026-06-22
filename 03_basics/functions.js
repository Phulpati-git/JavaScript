function sayMyName(){
console.log("meow");
console.log("meow");
console.log("d");
console.log("h");
console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1 , number2){

// //     console.log(number1 + number2);
// }

// addTwoNumbers(0, 3)

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    // console.log("phulpati"); // this line wont work as return is returned to the caller
    return number1 + number2
}

const result = addTwoNumbers( 0,3)
// console.log("Result :", result);

function loginUserMessage(username = "Meow"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("phulpati"))
// console.log(loginUserMessage("XD"))

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400 , 500, 2000))

const user = {
    username : "Phulpati",
    price : "10000000"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username : "sam",
    price : "200"
})

const myNewArray = [ 200 ,400 ,100 ,300 ]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 ,300 , 3000 , 4000]));
