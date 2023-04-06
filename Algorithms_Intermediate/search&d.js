// You will be provided with an initial array (the first argument in the destroyer function),
//  followed by one or more arguments. Remove all elements from the initial array that are of 
// the same value as these arguments.

// Note: You have to use the arguments object.

// function destroyer(arr) {

//     const args = Object.values(arguments).slice(1);
// //    console.log(args)


//    return arr.filter(function(val) {
//        return !args.includes(val);
//    })
//    };
   
//    let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
   // console.log(result)

//    -------------------understanding-----------------------
let array, newObj;
   function dekhnaHai (array) {

    const args = Object.values(arguments)      
     //important, arg will store the argument passed in the callback of the funciton defined
    // array is an Object and because of the block scope it store the values on the argument beinf given to the block or function
     console.log(args)      //[ [ 1, 2, 3, 4 ], 3, 4, 'hi' ]

    return array.filter((val) => {
        return !args.includes(val)
    })
   }

   let result = dekhnaHai([1,2,3,4],3,4,'hi')
console.log(result)

// console.log(result)

