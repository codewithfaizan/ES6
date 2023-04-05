// A mixin allows other objects to use a collection of functions.

// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let plane = {
//   model: "777",
//   numPassengers: 524
// };


let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
// //  // The flyMixin takes any object and gives it the fly method.

// flyMixin(bird);
// flyMixin(plane);
//  // // Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

// bird.fly();
// plane.fly();
 // // The console would display the string Flying, wooosh! twice, once for each .fly() call.

// Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

// /--------------example-------------------------
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = function(obj){
  obj.glide = function(){   //method
    console.log("Both are things")
        }
  }
  
  glideMixin(bird) 
  glideMixin(boat)
  
  console.log(bird.glide())
  console.log(boat.glide())