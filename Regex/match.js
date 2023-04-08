// let name = "Mohammed faizan"
// let search = /faizan/
// result = search.test(name);
//          /regex/.test(nameOftheString)
// console.log(result)      //true 
// ---------------------------------------
// let result = 'Hello sir'
// console.log(/Hello/.test(result))
// --------------------------------------

// let testStr = "hello, my name is Kevin";
// let testRegx = /Kevin/;
// let notFound = /KEVIN/

// result1 = testRegx.test(testStr)
// result2 = notFound.test(testStr)
// // console.log(result1)
// console.log(result2)

// ----------------------------------------------------
 
// let result = "Suhail Roushan from Lards".match(/Lards/)
// console.log(result)

// console.table(result)

// ---------------------------------------------------

// console.log("hello Wrld!".match(/hello/))

// let ourStr = "Regular expression";
// let ourRegx = /expression/
// console.log(ourStr.match(ourRegx))
        // / string.match(regex)
// console.table(ourStr.match(ourRegx))

// console.log(result)
// --------------------------------------------------

// let extractStr = "Extract the word 'coding' from this";
// let codingRegex = /coding/;

// let result = extractStr.match(codingRegex)
//              //   // nameOftheString.match(/regex/)
// console.log(result)
// console.clear()

// --------------------------------------------------

// let regex= /madam/;
// let string = "Hwllo!Good Morning madam";
// console.log(regex.test(string))

// --------------------------------------------------
// let regex= /madam/;
// let string = "Hello! Good Morning madam";

// console.log(string.match(regex));
// ---------------------------------------------------

// You can search for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish to match by placing them i
// inside square ([ and ]) brackets.
// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. 
// The [aiu] is the character class that will only match the characters a, i, or u.

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels
//  in the string quoteSample.

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line

// ----------------------------------------------------------------------------

// You saw how you can use character sets to specify a group of characters to match, 
// but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet).
//  Fortunately, there is a built-in feature that makes this short and simple.

// For example, to match lowercase letters a through e you would use [a-e].

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex);
// batStr.match(bgRegex);
// matStr.match(bgRegex);

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

// --------------------------------------------------------------------------------

// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

// Also, it is possible to combine a range of letters and numbers in a single character set.

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// jennyStr.match(myRegex);


// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. 
// Remember to include the appropriate flags in the regex.
// 

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// ------------------------------------------------------------------------
// To create a negated character set, you place a caret character (^) after the opening bracket and before the 
// characters you do not want to match.


// For example, /[^aeiou]/gi matches all characters that are not a vowel.  ote that characters 
// like ., !, [, @, / and white space are matched - the negated vowel character 
// set only excludes the vowel characters.


// Create a single regex that matches all characters that are not a number or a vowel. 
// Remember to include the appropriate flags in the regex.

// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9aeiou]/ig; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// 

// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. 
// This means it occurs at least once, and may be repeated.

// You can use the + character to check if that is the case. Remember,
// the character or pattern has to be present consecutively. 
// That is, the character has to repeat one after the other.

// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, 
// it would also find a single match in aabc and return ["aa"].

// If it were instead checking the string abab, it would find two matches and 
// return ["a", "a"] because the a characters are not in a row - there is a b between them. 
// Finally, since there is no a in the string bcd, it wouldn't find a match.

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/ig; // Change this line
// let result = difficultSpelling.match(myRegex);


// The last challenge used the plus + sign to look for characters that occur one or more times. 
// There's also an option that matches characters that occur zero or more times.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);

// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

// let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);

// --------------------------------------------------------------------------------------------
// ---Lazy Matching---

// In regular expressions, a greedy match finds the longest possible part of a string that fits 
// the regex pattern and returns it as a match.The alternative is called a lazy match, 
// which finds the smallest possible part of the string that satisfies the regex pattern.

// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern 
// that starts with t, ends with i, and has some letters in between.

// Regular expressions are by default greedy, so the match would return ["titani"]. 
// It finds the largest sub-string possible to fit the pattern.
// 
// However, you can use the ? character to change it to lazy matching. 
// "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].


// ----------------------------------------------------------------------
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);