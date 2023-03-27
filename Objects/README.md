 <h2>Objects : </h2> &nbsp;
- An Object is a collection of properties that can be used to represent a thing or entity in the code. An object can be created using the object literal syntax, constructor functions, or ES6 class syntax.
 <br>
- Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
<br>
- Each property of an object consists of a key and a value, where the key is a string or a symbol that identifies the property, and the value can be of any data type, including other objects, functions, or primitives such as strings, numbers, and booleans.

Example :

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

- In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties.  <br>
- You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
