const name = "Phulpati"
const repoCount = 5

// console.log(name + repoCount);

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Phulpati-Me")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString  = gameName.slice(-1, 6)
console.log(anotherString);

const newString1 = "      Phulpati       "
console.log(newString1.trim());

const url ="https://meow.com/meow%20cat"

console.log(url.replace('%20','-'));
console.log(url.includes('car'))
console.log(gameName.split('-'));
