// Return Part of an Array Using the slice Method

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this linelet 
    return  anim.slice(beginSlice, endSlice)
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  const result = sliceArray(inputAnim, 1, 3);
  console.log(result)