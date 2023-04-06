// //  DNA pairing

// Problem Explanation

// You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

// Another way to interpret the problem: there are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”. “A” and “T” are always paired together,
//  and “G” and “C” are always paired together.
// This problem presents you with an input, e.g. “ATCGA”. Each of those five characters are missing their pairs.

// E.g.
// The first character “A” needs to be paired with “T” to give the array element [“A”, “T”].
// The second character “T” needs to be paired with “A” to give the array element [“T”, “A”].
// The number of elements in the final output equals the number of characters in the input.

function pairElement(str) {
    let Pairs = {
      A : "T",
      T : "A",
      G : "C",
      C : "G"
    }
    
    return str.split("").map(x => [x,Pairs[x]]);
  }
  
  let result = pairElement("GCG");
  console.log(result)