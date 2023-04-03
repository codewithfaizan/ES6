// function factorialize(num) {
//     let n =1;
//    if(n>=0){
//         for(let i = num; i > 0; i--){
//   // console.log(`result:`,n *= i )  
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
// factorialize(10)

//------------------------------------------- ..----------/
// function factorialize(num) {
//     let product = 1;
//     for (let i = 2; i <= num; i++) {
//       product *= i;
//     }
//     return product;
//   }
  
// console.log(  factorialize(0))
  
// =-----------------------------------------------------------------
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(10))