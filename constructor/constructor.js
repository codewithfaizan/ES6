// / -----constructor-----------

// class Vegetable {
//     constructor (name){
//         this.name = name
//     }
// }

// let carrot = new Vegetable('carrot'); 
// let potato = new Vegetable('potato')
// console.log(carrot.name, potato.name)

// -------------------------------------------------------

// ----------------------using getter and setter---
// You can obtain values from an object and set the value of a property within an object.

// These are classically called getters and setters.

// Getter functions are meant to simply return (get) the value of an 
// object's private variable to the user without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of 
// an object's private variable based on the value passed into the setter function. 
// This change could involve calculations, or even overwriting the previous value completely.

// class Book {
//     constructor(author) {
//       this._author = author;
//     }
//     // getter
//     get writer() {                      //get function_name(){ return ...}
//       return this._author;
//     }
//   // setter
//   set writer(updatedAuthor) {       //set function_name(parameter){ using the paramter }
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book('anonymous');
// // console.log(novel._author);
// console.log(novel.writer);

// novel.writer = 'newAuthor';
// console.log(novel.writer);
// -----------------------------------------------------------

// class Thermostat {
//     constructor(fahr) {
//         this.fahr = fahr
//         // console.log(fahr);      //76
//     };
//     get temperature(){
//         return 5/9 *(this.fahr - 32)
//     }
//     set temperature(C){
//         this.fahr = C*9.0/5+32
//     }
// }
// const Thermos = new Thermostat(76);
// // console.log(Thermos) // Thermostat{ fahr : 76}

// let temp = Thermos.temperature; // 
// console.log("temp1",temp)

// Thermos.temperature = 26;

// // console.log(temp)

// temp = Thermos.temperature
// console.log("temp2",temp)

// --------------------------------------------