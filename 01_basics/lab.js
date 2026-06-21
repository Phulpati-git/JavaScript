// // // Declare a const for your name and a let for your age. console.log both.
// // // Create a variable isRaining and set it to true. Print its type using typeof.
// // // Declare a variable city but don't give it a value. Print it. What does it show, and why?
// // // Make a const called pi set to 3.14. Try to reassign it to 3.15 on the next line. Run it — what happens, and why?
// // // Create three variables: a string, a number, and a boolean. Print the typeof each.

// // // const name = "phulpati"
// // // let age = 23;
// // // console.log(name);
// // // console.log(age);

// // // let isRaining = true;
// // // console.log(typeof isRaining);

// // // let city;
// // // console.log(city); // the city shows undefined cause the value is not defined for the variable city

// // // const pi =3.14;
// // // console.log(pi);

// // // let Name = "smaran";
// // // let Age = 24;
// // // let Number = 9803303995
// // // console.log(typeof Name);
// // // console.log(typeof Age);
// // // console.log(typeof Number);

// // // Create variables for a product: productName (string), price (number), inStock (boolean). Print one sentence using all three, like: Laptop costs 500 and in stock: true.
// // // Declare let x = 5; then on the next line write x = "five";. Print typeof x before and after the change. What does this tell you about JavaScript compared to Python?
// // // Predict the output before running, then run to check: what does typeof null print? What does typeof undefined print? Were you right?

// // let productName = 'SmaranGoods';
// // let priceNumber = 2000;
// // let inStock = true;
// // console.log(`${productName} costs ${2000} and ${inStock}`);

// // let x =5; // the first is number 
// // // x = "five"; // the value here is string

// // console.log(typeof x );

// // console.log(typeof null); // this prints object // null is a non-existing value
// // console.log(typeof undefined); //undefined is undefined while undefined is a type where a value yet to be declared


// Create a variable emptyOnPurpose and a variable emptyByAccident that correctly demonstrate the difference between null and undefined. Print both, and print the typeof each. In a comment (// like this), explain in one line why one of them gives a surprising type.

let emptyOnPurpose = null;
let emptyByAccident;
console.log(typeof emptyOnPurpose);
console.log(typeof emptyByAccident);

// This code has three mistakes. Find them, explain why each is wrong, and write the corrected version:

// javascriptconst userName = "Ravi"// javascript cannot be declared here as it is declating a var and avascript is not a var
// userName = "Ravi Kumar"; // const is already declared above so the progeam wouldnt run and woul show syntax error
// let 1stPlace = "gold"; // when declaring the vaariable the first 
// console.log(userName, 1stPlace) // same here the var cannot be printed as the mistake has already been when declatring the varibale

const userName = "Ravi"
let firstpalce = "gold";
console.log(userName, firstpalce);
