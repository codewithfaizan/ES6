let longestString = (str) =>{
       let single = str.split(' ')          //split the string into array of words
       let maxlength = '';                     //declare and empty string with a variable name maxlength
    //    console.log(single)
    for(let i = 0; i< single.length;i++){
        // console.log(single[i])       //loop through each element of the array having multiple words
        if(single[i].length > maxlength.length){
                maxlength = single[i]         // write the logic such that the length of each individual word in the array
                                             // checks if it is greater than then maxlength i,e set to 0 so the highest length 
                                            //  of individual element get stored in the maxlength and updated at each iteration
                                            //  hence the largest number i.e the elemnt with largest length is the final string
    }   return `${maxlength}, ${maxlength.length}`;
}
}

let result = longestString("Little jack horner sat in a corner")
console.log(result)