function truncateString(str, num) {
    // console.log(str.length)
    if(str.length > num){
      // 44 > 9 : true
      return str.slice(str,num) + "..."
    } else //when 44 > 45 : false
    return str; //returned as it is
  }
  
  let output = truncateString("Peter Piper picked a peck of pickled peppers", 45);
  console.log(output)