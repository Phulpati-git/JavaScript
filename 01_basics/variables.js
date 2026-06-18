const accountId = 144553
let accountEmail = "fangyan932@gmail.com"
var accountPassword = '12345'
accountCity = 'kathmandu'
let accountState;

//accountId = 2 // not allowed

accountEmail = "hchc@gmail.com"
accountPassword= "21212121"
accountCity = "Pokhara"

console.log(accountId);
/*
prefer not to use var because of the issue in the block scope and 
functional scopr

*/
console.table([accountId, accountEmail , accountPassword , accountCity, accountState])


