// There are many methods to use with console to output messages. 
// log, warn, and clear to name a few. The freeCodeCamp console will only output log messages, 
// while the browser console will output all messages. 
// When you make changes to your code, it will automatically run and show the logs.
// --------------------------------------------------------------

//  let arrow = "Using an arrow function";
// function exm1 () {
//     console.log(arrow)
// }
// console.clear()
// exm1( "experiment1",arrow);
// console.clear()     //this will clear the console

// ------------------------------------------------------------------
// ----------------------------typeof----------------------------

// You can use typeof to check the data structure, or type, of a variable.
//  This is useful in debugging when working with multiple data types. 
// If you think you're adding two numbers, but one is actually a string, 
// the results can be unexpected. Type errors can lurk in calculations or function calls. 
// Be careful especially when you're accessing and working with external data in the form  
// of a JavaScript Object Notation (JSON) object.

// let seven = 7;
// let three = "3";
// console.log(seven + three);         //73
// // Only change code below this line

// console.log(typeof seven)       //this will check the type of data structure
// console.log(typeof three)


// --------------------------------------------------------------------------

// The console.log() and typeof methods are the two primary ways to check intermediate values and
//  types of program output. Now it's time to get into the common forms that bugs take. 
// One syntax-level issue that fast typers can commiserate with is the humble spelling error.

// ---------------------------------------------------------------------
// Catch Mixed Usage of Single and Double Quotes

// JavaScript allows the use of both single (') and double (") quotes to declare a string. 
// Deciding which one to use generally comes down to personal preference, with some exceptions.

// const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";       //correct
// const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";          //correct

// // const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';           // not correct

// Of course, it is okay to use only one style of quotes. 
// You can escape the quotes inside the string by using the backslash (\) escape character:

// const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
// console.log(allSameQuotes)  //  I've had a perfectly wonderful evening, but this wasn't it.

// let innerHtml = "<p>Click here to <a href= \"#Home\">return home</a></p>";
// console.log(innerHtml);

// ------------------------------------------------------------------------

// The code below assigns x to be 2, which evaluates as true. Almost every value on its own in JavaScript evaluates to true, 
// except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

// let x = 1;
// let y = 2;
// if (x = y) {

// } else {

// }

// -----------------------------------------------------------------

// the assignment operator (=) in JavaScript assigns a value to a variable name. 
// And the == and === operators check for equality (the triple === tests for strict equality, 
// meaning both value and type are the same).

// Catch Missing Open and Closing Parenthesis After a Function Call

// function myFunction() {
//     return "You rock!";
//   }
//   let varOne = myFunction;
//   let varTwo = myFunction();

//   console.log(varOne)   //conosle wil tell that it is just a function
//   console.log(varOne())     //this will return the function value

//   console.log(varTwo)
//   Here varOne is the function myFunction, and varTwo is the string You rock

// --------------------------------------------------------------------