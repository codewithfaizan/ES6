// -------------callbacks---------------------------

function greet(name, callback){
    return `Hello I am ${name}`;
    callback();
}

var callme = () => {
    console.log(`Here I am`)
}
let result = greet("faizan", callme())
console.log(result)

// --------------------------------------------------
// function greet(name, callback){
//     console.log(`Hello I am ${name}`);
//     callback();
// }

// let callme = () => {
//     console.log(`Here I am`)
// }

// greet("faizan", callme)

// -------------------------------------------------
// let Object = {
//     x : 10,
//     y : 20
// }

// let Math = (add, multiply) => {
  
//    return add = Object.x + Object.y
//    multiply();
// }

// let mult = () => {
//     return Object.x * Object.y
// }

// console.log(Math(add,multiply()))
