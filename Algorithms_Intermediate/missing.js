// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    for(let i = 1; i <str.length; i++){
       // console.log(str.charCodeAt(i))
       // console.log(str.charCodeAt(i-1))
       // console.log(str.charCodeAt(i-1)+1)
       if(str.charCodeAt(i)- str.charCodeAt(i-1)>1){
         return String.fromCharCode(str.charCodeAt(i-1)+1)
       }
    }
   // return str;
 }
 
 fearNotLetter("abce");     

// fearNotLetter("abce") should return the string d.
// fearNotLetter("abcdefghjklmno") should return the string i.
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.