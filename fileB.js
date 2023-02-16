// const myObject = require("./fileA");

// console.log(myObject.myNumber); // => 42
// console.log(myObject.myString); // => hello
// console.log(myObject.myFunction); // the function you wrote

const { myNumber, myString, myFunction } = require("./fileA");

console.log(myNumber); // => 42
console.log(myString); // => "hello"
console.log(myFunction); // => the function you wrote