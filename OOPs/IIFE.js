// Understand the Immediately Invoked Function Expression (IIFE)
// A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
    console.log("Chirp, chirp!");
})();
// This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

// Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

// --------------------------------------------------------

// function glideMixin(obj) {
//     obj.glide = function () {
//         console.log("Gliding on water")
//     }
// }

// function flyMixin(obj) {
//     obj.fly = function () {
//         console.log("Flying in Air")
//     }
// }
// ----------------------------------
let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();

  let duck;
  motionModule.glideMixin(duck);
  duck.glide();