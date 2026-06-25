// const userEmail = [] // since the vlaue is there it means it a truthy value 
// // if there was empty string it would be falsy values

// if (userEmail) {
//     console.log("Got user email");
    
// } else {
//     console.log("DOnt have user email:");
    
// }

//falsy value = false , 0 ,-0 , BigInt 0n , "", null , undefined , NaN
// truthy values = " 0 " , 'false' , ' ',[] , {}, funtion(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length===0) {
//     console.log("array is empty"); 
// }

// Nullish coalescing Opeartor (??): null defined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

// val1 = null?? 10 ?? 20
// console.log(val1);

//terniary Operator

// condition ? true : false 

const iceTeaPrice  = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

