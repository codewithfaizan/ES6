// let Arr = [];
// for (let i = 0; i< 10;i ++){
//     // console.log(Arr.push[i])
//     console.log(i)
// }

// // console.log(Arr)

// ------------------------------------

// const arr = [[1,2], [3,4],[5,6]];

// for(let i = 0; i <arr.length; i++){
//     // console.log("this: ",arr[i])
//     for(let j = 0; j< arr[i].length;j++){
//             console.log(arr[i][j])
//     }
// }

// -------------------------------------

// array is an oject in javascript. everytime we declare a array with bracket lke this array = new array()

// let selectedColors = []; //array literals indicate empty array
// selectedColors = ['red', 'blue']

// selectedColors[2] = 'grey'

// selectedColors[3] = 4;
// console.table(selectedColors)

// array is an datastructure, cllectio of items in list, it has index
// console.log(typeof(selectedColors))

// ---------------------pts from ahsaan ahmed YT video-------------
// pointers before starting tress problems
// /solve questions
// read company interview questions
// challenge yourself

// 30 -45min for a question. give up and go for a solution
// read the solutions, understand and code yourself to learn or else stuck there for lifelong

//  Above and below key pints from Ashhad ahmed YT----

// solve any coding questions with simple tricks
// good understanding of DSA
// break down the question. ave a bruteforce approach but do not code
// constraints are important
//  20 -30 min to break down the problem
// remember the time complexity
// regardless of the question solved or not just stop doing it for not more than
// 1 hr and then go for the solution. practice
// do not get demotivated

// ----------------------------------------------
// ----------------------recursion--------------

// function multiply(arr,n){
//     let product = 1;
//     for(let i = 0; i<n; i++){
//         console.log(i)
//         product*= arr[i]
//     }
//     // console.log(product)
//     return product;

// }
// multiply([],4)

// -------------------------------------------
// let arr = [1,2,3,4]
//  function multiply(arr,n){
//     if ( n <= 0 ){
//         return 0;
//     }else{
//         return multiply(arr, n-1)+ arr[n-1]
//         // multiply(arr, 0) + 0 + 1 + 2 + 3 + 4
//     }
//  }
// console.log(multiply(arr,4))

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (name === contacts[i].firstName) {
//         if (contacts[i].hasOwnProperty(prop) {
//         return contacts[i][prop];
//     } else {
//         return "No such contact";
//       }
//   }
// }
//   // Only change code above this line
// }
// // console.log("Hi")
// lookUpProfile("kristian", "lastName");
// -----------------------------------------------

// function randomForest() {
//   return Math.random();
// }

// console.log(randomForest());
// -------------------------------------------------
// countdown function using recursion
// function countdown(n){
//     if(n<1){
//         return [] }
//         let arrayStore = countdown(n-1)
//         arrayStore.unshift(n); //adds value from the riht side of the array
//         return arrayStore;
// }
// console.log(countdown(4))

// --------------------------------------------------
// same code but using a for loop

// let array = [];
// for ( let i = 0; i <= 5; i++){
//     array.push(i)
// }
// console.log(array)

// ----------------------------------------------------