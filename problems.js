let count = 0;
function cc(card) {
  // Only change code below this line
switch ( card ) {
     case 2 :
     case 3 :
     case 4 :
     case 5 :
     case 6 :
        count ++;
        break;
        case 10 :
        case "Q":
        case "K":
        case "A":
        count--;
        break;
}
if (count > 0) {
    return count + " Bet"
} return count + " Hold"
  // Only change code above this line
}
console.log(cc(2))
console.log(cc(3))
console.log(cc(4))
console.log(cc(5))
console.log(cc(6))

console.log(cc(10))
console.log(cc("Q"))
console.log(cc("K"))
