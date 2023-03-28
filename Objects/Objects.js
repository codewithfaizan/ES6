// -------------------Objects and Object destructuring------------

// -----------------Objects---------------------------------
// const myObj = {
//     porp1 : "val1",         //  key : value
//     prop2 : "val2",         //  key : value
//     prop3 : true              //  key is prop1 and value is "val2" that is string, to check simply console.log(typeof)
// }

// const prop1val = myObj.porp1
// console.log(prop1val)

// const prop1va2 = myObj.prop2
// console.log(prop1va2)
// console.log(typeof(myObj.prop3))
// console.log(typeof(myObj.prop3))

// --------accessing objects with variables------------
const dogs = {
    Fido : "Mutt",
    Hunter : "Doberman",
    Snoopue : "Beagle",
    5 : 10
}

// console.log(dogs)
// const myDog = "Hunter";     // here a variable is declared myDog and the key Hunter is assigned to it 
                                    // which now takes the key value pair inside a variable
// const myBreed = dogs[myDog];        

// // console.log(typeof(myDog))

// const num = 5;
// const number = dogs[5]
// console.log(num)
// console.log(number)
// console.log(myBreed)

// -------------updating an object's property ------

// dogs.Hunter = "Scary Doberman";
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
// ourdog.bark = "bhaw bhaw"            //sae but without using a square bracket
// console.log(ourdog)

// ourdog["friends"].push("anything") 
// console.log(ourdog)

// ---------------------------------------------------

// function Bird(){
//     this.name = "albert";
//     this.color = "blue";
//     this.numLegs = 2;
// }
// let Con = new Bird()

// console.log(Con);

// let Ren = new Bird()
// console.log(Ren
// )
// -------------------------------------------------
// some more exapmles
// function Member(name,age) {
//     this.name = name;
//     this.age = age

// }
// /------------------------------------------
// let Candidate1 = new Member("Ravi",32)
// console.log(Candidate1.name, Candidate1.age)
// console.log(Candidate1.age)
// let Bird = {
//     name : "alex",
//     color : "blue",
//     numLegs : 2
// }

// console.log(typeof(Bird));
// console.log(Bird.name)
// console.log(Bird.color)
// console.log(Bird.numLegs)

// ---------------------------------------------------

// let Dog = {
//     name : "Tom",
//     color:"white",
//     numLegs :4,
//     sayName : function()
//     { return this.name + "has" + this.numLegs;}
       
// }

// console.log(Dog.sayName())

// ---------------Testing objects ---------------------


// function checkObj(obj, checkProp) {
//    if (obj.hasOwnProperty(checkProp)) {
//       return obj[checkProp];
//     } else {
//       return "Not Found";
// }
//   }
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")


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