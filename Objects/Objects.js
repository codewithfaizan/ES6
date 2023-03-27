// -------------------Objects and Object destructuring------------
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

// ---------------------------------------------------
// function Bird(){
//     this.name = "albert";
//     this.color = "blue";
//     this.numLegs =2;
// }
// let Con = new Bird()

// console.log(Con);

// let Ren = new Bird()
// console.log(Ren
// )
// -------------------------------------------------

// function Member(name,age) {
//     this.name = name;
//     this.age = age

// }

// let Candidate1 = new Member("Ravi",32)
// console.log(Candidate1.name, Candidate1.age)
// console.log(Candidate1.age)

// ------verify ------------------------------------

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

// -------Own properties---------------------------------

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

// -----------------------------------------------