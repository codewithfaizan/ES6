//  steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
//  Passed:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
//  Passed:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

function steamrollArray(arr) {
    const flat = [].concat(...arr);
    // console.log(flat)
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  let result = steamrollArray([1, [2], [3, [[4]]]]);
  console.log(result)