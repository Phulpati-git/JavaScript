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
console.log(loginUserMessage("XD"))

