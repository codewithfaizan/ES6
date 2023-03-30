// const person = {
//     name: "Zodiac Hasbro",
//     age: 56
//   };

//   const greeting = `Hello, my name is ${person.name}!
//   I am ${person.age} years old.`;

//   console.log(greeting);

//   ------------------------------------
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };

// function makeList(arr){
//     const failuresItems= []
//     for(let  i = 0; i < arr.length; i++){
//         failuresItems.push(`<li>${arr[i]}</li>"`)
//     }
//     console.log(failuresItems)
//     return failuresItems;
// }

// makelist(result.failure) ---- makeList is a function and he parameter
// passed are results Objects i.e, results failure which is an array
// console.log("!",makeList(result.failure))

// -----------------------------------
// -------object literal--------------
// const getMousePosition = (x,y) => {(x,y)}
// console.log(getMousePosition.x)

// // -----------------------------------

// const person = {
//     name: "Taylor",
//     sayHello() {
//       return `Hello! My name is ${this.name}.`;
//     }
//   };

//   console.log(person.name)      //Taylor
//   console.log(person.sayHello()) //Hello! My name is Taylor

// ---------------------------------------------
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   },
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

// ----------------------------------------------

// const Car = {
//     type :"sedan",
//     // if type sedan then luxary, then normal
//     changeType(newtype){
//         if(this.type === "sedan"){
//             this.type = newtype
//         } else {
//             return this.type
//         }
//     }
// }

// // console.log(Car.type)
// Car.changeType("normal")
// console.log(Car.type)

// -----------------------------------------------

// let laptop = {
//     cpu : "i3",
//     ram: 4,
//     brand :"Dell",
//     getConfig(){
//         let cpudetail = `intel core ${this.cpu}`
//         return cpudetail
//     }
// }
// laptop.getConfig();
// console.log(laptop.getConfig())
// console.log(laptop.brand)


