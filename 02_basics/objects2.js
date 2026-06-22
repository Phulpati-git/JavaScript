// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12abc"
tinderUser.name = "Smaran"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "phulpati",
            lastname: "Limbu"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}

// const  obj3 = { obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "P@gmail.com",
    },
]

users[1].email
console.log(tinderUser);

