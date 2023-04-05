// -------------------Objects and Object destructuring------------

// // -----------------Objects---------------------------------
// const myObj = {
//     porp1 : "val1",         //  key : value
//     prop2 : "val2",         //  key : value
//     prop3 : true              //  key is prop1 and value is "val2" that is string, to check simply console.log(typeof)
// }

// const prop1val = myObj.porp1
// console.log(prop1val)

// const prop1va2 = myObj.prop2
// console.log(prop1va2)
// // console.log(typeof(myObj.prop3))
// console.log(typeof(myObj.prop3))

// ----------------accessing objects with variables----------------------------

const dogs = {
    Fido : "Mutt",
    Hunter : "Doberman",
    Snoopue : "Beagle",
    5 : 10
}

// console.log(dogs)
// const myDog = "Hunter";     // here a variable is declared myDog and the key Hunter is assigned to it 
//                                     //which now takes the key value pair inside a variable
// const myBreed = dogs[myDog]; 
// console.log(myBreed)       

// console.log(dogs["Hunter"])

// console.log(typeof(myDog))

// const num = 5;
// const number = dogs[5]
// console.log(num)
// console.log(number)
// console.log(myBreed)

// let Bird = {
//     name : "alex",
//     color : "blue",
//     numLegs : 2
// }

// console.log(typeof(Bird));
// console.log(Bird.name)
// console.log(Bird.color)
// console.log(Bird.numLegs)

// -------------updating an object's property ------

// console.log(dogs)
// dogs.Hunter = "Scary Doberman";
// dogs["Hunter"]= "Scary Doberman";
// console.log(dogs.Hunter)
// console.log(dogs)

// ----------------------- adding a property----------

// const ourdog = {
//     "name" : "Camper",
//     "legs" : 4,
//     "tails" :1,
// "friends" : ["everything"]
// }
// ourdog["bark"] = "bhau-hau"     //here a property named bark is added and assigned a value bhau bhau to it
// // ourdog.bark = "bhaw bhaw"            //same but without using a square bracket
// console.log(ourdog)

// ourdog["friends"].push("anything") 
// console.log(ourdog)

// ----------------using new ------------------------------------

class Bird {
    constructor() {
        this.name = "albert";
        this.color = "blue";
        this.numLegs = 2;
    }
}
// let Con = new Bird()
// console.log("Con :",Con);

// let Ren = new Bird()
// console.log("Ren :",Ren)

// let Jen = new Bird;
// console.log("Jen :",Jen)
// -------------------------------------------------


// -------------------------------------------------
// some more exapmles

function Member(name,age) {
    this.name = name;
    this.age = age

}
// let Candidate1 = new Member("Ravi",32)
// console.log(Candidate1.name, Candidate1.age)

// console.log(Candidate1)
// console.log(Candidate1.age)

// function human(name, age, gender){
// this.name = name,
// this.age = age,
// this.gender = gender
// }
// let Asif = new human("Asif",48,"male")
// console.log(`Name : ${Asif.name}`)
// console.log(Asif)

// ---------------------------------------------------

let Dog = {
    name : "Tom",
    color:"white",
    numLegs :4,
    sayName : function()     //function is passed as property
                 { 
             return `${this.name} has ${this.numLegs} Legs`;
            }
    
       
}
// console.log(Dog.hasOwnProperty("color"))/
// console.log(Dog.sayName())

let cat = {
    name : "Daniya",
    color : "white",
    gender  :"female",
    breed : "Persian",
    sayDetail : function(){
        return `My cat name is ${cat.name}, it's a pure ${cat.breed} ${cat .gender}, ${cat.color} in color.`
    }
}

// console.log(cat.sayDetail())
// ---------------Testing objects ---------------------


// function checkObj(obj, checkProp) {

//    if (obj.hasOwnProperty(checkProp)) {

//       return obj[checkProp];
      
//     } else {
//       return "Not Found";
// }
//   }
  
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift" ) )


// -----------Manipulating Complex Objects-------------

// const ourMusic = [
//     {
//         "artist": "Daft Punk",
//     "title": "Homework",
//     "release_year": 1997,
//     "formats": [ 
//       "CD", 
//       "Cassette", 
//       "LP"
//     ],
//     "gold": true
//     }
// ]
// This is an array which contains one object inside. The object has various pieces of metadata about an album. 
// It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. 
// Objects hold data in a property, which has a key-value format. 
// In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.


// ---------------------Verify -----------------------------

// function Dog(name,color){
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
// }

// function Bird(name,color) {
//     this.name = name;
//     this.color= color
// }

// let costa = new Bird("Rex","Green")
// console.log(costa)

// let terrier = new Dog("Alex","Brown")
// console.log(terrier)

// let verify = costa instanceof Bird;
// console.log(verify)

// ----------------Own properties--------------------------

// function Bird(name,color){
//     this.name = name;
//     this.color = color;
// }

// let Duck = new Bird("Bucky", "Grey")

// let ownProp = [];

// for (property in Duck) {
//     if(Duck.hasOwnProperty(property)){
//         ownProp.push(property)
//     }
// }
// console.log(ownProp)

// -------- Accessing nested objects-------------------------

// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };

//   suppose you want to access the glove box property so you assign a 
// variable to it 

// const gloveboxContent = myStorage.car.inside["glove box"]
// console.log(gloveboxContent) //maps

// console.log(myStorage.car.inside["passenger seat"])

// ---------------Accessing Nested Arrays-------------------
// const myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];
  
//   const secondTree = myPlants[1].list[1]; // pine
//   console.table(myPlants);
//   console.log(secondTree)

//   const thirdTree = myPlants[0].list[2];
//   console.log(thirdTree)

// ------------------------------------------------------------------
// Add Key-Value Pairs to JavaScript Objects

// const tekkenCharacter = {
//     player: 'Hwoarang',
//     fightingStyle: 'Tae Kwon Doe',
//     human: true
//   };

// //   The above code defines a Tekken video game character object called tekkenCharacter. 
// It has three properties, each of which map to a specific value. 
// If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:

// tekkenCharacter.origin = 'South Korea';

// console.group(tekkenCharacter)

// ---------------------------------------------------------------------
// Modify an Object Nested Within an Object

// let nestedObject = {
//     id: 28802695164,
//     date: 'December 31, 2016',
//     data: {
//       totalUsers: 99,
//       online: 80,
//       onlineStatus: {
//         active: 67,
//         away: 13,
//         busy: 8
//       }
//     }
//   }; 

// //   nestedObject has three properties: id (value is a number), date (value is a string), 
// // and data (value is an object with its nested structure). While structures can quickly become complex, 
// // we can still use the same notations to access the information we need. To assign the value 10 to the busy 
// // property of the nested onlineStatus object, we use dot notation to reference the property:

// nestedObject.data.onlineStatus.busy = 10;
// console.log(nestedObject)
// -----------------------------------------------------------------------

// Use the delete Keyword to Remove Object Properties

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
  
//   console.log(foods)
//   // Only change code below this line
//   delete foods.oranges;
//   delete foods.plums;
//   delete foods.strawberries;
//   // Only change code above this line
  
//   console.log(foods);

// --------------------------------------------------------------------
// Check if an Object has a Property

// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function isEveryoneHere(userObj) {
 
    // if(users.hasOwnProperty('Alan', 'Jeff','Ryan','Sarah')){
    //   return true;}
    //   else {
    //     return false
    //   }
    // -------------------------
    // if('Alan' in userObj,
//     'Jeff' in userObj,
//     'Sarah' in userObj,
//     'Ryan' in userObj){
//         return true
//     } else 
//     return false
//   }
//   console.log(isEveryoneHere(users));

//   ---------------------------------------------------------------------

// Iterate Through the Keys o
// const users = {
//     Alan: {
//       online: false
//     },
//     Jeff: {
//       online: true
//     },
//     Sarah: {
//       online: false
//     }
//   }


// for (let user in users) {
//     console.log(user);
//   }
//   This would log Alan, Jeff, and Sarah - each value on its own line.
  
// In this statement, we defined a variable user, and as you can see, this variable was reset during 
// each iteration to each of the object's keys as the statement looped through the object, resulting in 
// each user's name being printed to the console.

// -------------------------------------------------------------------
// --------iterate over properties
// You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly 
// on the object instance itself. And prototype properties are defined on the prototype.

// function Bird(name) {
//   this.name = name;  //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird("Donald");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }