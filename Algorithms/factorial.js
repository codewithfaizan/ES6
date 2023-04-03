// Factorialize a Number

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product 
// of all positive integers less than or equal to n.

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


// / function factorialize(num) {
//     let n =1;
  //  if(n>=0){
//         for(let i = num; i > 0; i--){
//   // console.log(`result: `,n *= i )  
//   n*= i;  
//    num =n;
//       }
//   // num = n*i
//     }else 
//     return 1;
  
//     console.log(num)
//   return num;
//   }
  
//   factorialize(5);      /// but the test fails for num=0;

//   --------------------using reccursion---------------

// let factorialize = (num) => {
//     let n 
//     while(n >= 0){
//         if(num === 0){
//             return 1;
//         }
//         return num * factorialize(num-1);
//     }

    
// }
// factorialize(10)       //working

//-------------------------------------------------------------------------------/
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
console.log(  factorialize(0))    // working ~ from freecodecamp help section
  
