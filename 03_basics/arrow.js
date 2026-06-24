const user = {
     username: "phulpati",
     price : 100,

     welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
     }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function tea(){
//    let username = "phulpati"
//    console.log(this.username);
   
// }
// tea()

// const tea = function() {
//    let username = "phulpati"
//    console.log(this.username); 
// }


const tea = () => {
   let username = "phulpati"
   console.log(this); 
}
// tea()

// const addTwo = (num1 , num2) => {
//    return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username: "phulpati"})


console.log(addTwo(3,4));

// const myArray = [ 2 ,4 , 5 , 6]
// myArray.forEach(function() {})
// myArray.forEach(() => {})

