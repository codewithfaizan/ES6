// -------------------using unshift and push--------------------------
// An array's length, like the data types it can contain, is not fixed. 
// Arrays can be defined with a length of any number of elements, and elements can be added 
// or removed over time; in other words, arrays are mutable.


// function mixedNumbers(arr) {
//     // Only change code below this line
//  arr.unshift('I', 2, 'three')  //unshift will adde elements to the beginning

//   arr.push(7,'VII', 9)             //push will add elements to the end of the aray
//     // Only change code above this line
//     return arr;
//   }
//   console.log(one)
// //   console.log()
  
//   console.log(mixedNumbers(['IV', 5, 'six']));

// -----------------------------------------------
// pop() removes an element from the end of an array, while shift() removes an element from the beginning. 
// The key difference between pop() and shift() and their cousins push() and unshift(), 
// is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.


// let greeting = ['whats up?' , 'hello' ,'see ya!']

// console.log(greeting)
// greeting.pop();

// greeting. shift();

// console.log(greeting)

// ----------------------------------------------------
// let arr = [2,5,7,2,6,8,8,0]     // 8+8 =16, 7+7 = 14, 14+16 = 30
// let sum = 0
// //  meku sum 30 hona 

// let test1 = arr.splice(3,2)
// // console.log(arr)
// // console.log(test1)
// let test2 = arr.splice(5,1)
// console.log(arr)

// for(let i =0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)        //30 agaya woooohhhhooooo!!!!!

// -----------------------------------------------------------------

// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);

// The second occurrence of 12 is removed, and we add 13 and 14 at the same index.
// The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

// ----------------------------------------------------------------=--------
// ------------------------------spread operator---------------------

// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];

// console.log(thatArray)
// ---------------------------------------------------------------

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // Only change code below this line
//     newArr.push([...arr])
//       // Only change code above this line
//       num--;
//     }
//     return newArr;
//   }
  
//   console.log(copyMachine([true, false, true], 3));

// ----------------------------------------------------------------
// ince arrays can be changed, or mutated, at any time, there's no guarantee about where a particular 
// piece of data will be on a given array, or if that element even still exists. Luckily, 
// JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and 
// easily check for the presence of an element on an array. indexOf() takes an element as a parameter, 
// and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.


// ------------------------------------------------------------------------

// Check For The Presence of an Element With indexOf()
// Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data 
// will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, 
// indexOf(), that allows us to quickly and easily check for the presence of an element on an array. 
// indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element 
// does not exist on the array.

function quickCheck(arr, elem) {

    for( let i = 0; i <= arr.length; i++){
      if(arr.indexOf(elem) >= 0){
          return true
      }else {
        return false;
      }
    }
  }
  let result = quickCheck(['squash', 'onions', 'shallots'], 'onions')
  console.log(result);