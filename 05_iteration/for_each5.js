const myNums = [1, 2 ,3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc : ${acc} and curval ${curval}`);
//     return acc + curval
// },0)

// const myTotal = myNums.reduce((acc , curval) => acc + curval,0)
// console.log(myTotal);
const shoppingCart = [{
    itemName: "Js coourse",
    price: 2999
},
{
    itemName: "php coourse",
    price: 4999
},
{
    itemName: "html coourse",
    price: 1999
},
]

// const price =shoppingCart.reduce((acc ,item) => acc + item.price,0)
// console.log(price);

const guitar = [
    {
        Itemname : "Fender",
        price: 2000
    },
    {
        
        Itemname: "Martin",
        price: 18000
    },
    {
        Itemname: "SE",
        price: 30000
    }
]

const payTotal = guitar.reduce((acc ,item) => acc + item.price,0)
console.log(payTotal);
