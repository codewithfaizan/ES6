/// const numb = [1,2,3,4,5];
// const doubled = numb.map(item =>  item*2 );
// console.log(doubled)
// --------------------------------------------

// const nums = [10,43,97,439,82,234,101];
// //  ek array declare 
// function atLeast(num) {
//     return num >= 100;
// }

// const result = nums.filter(atLeast);
// console.log(result)

// let johona = nums.filter((nums) => {return nums>=100 && nums < 200})
// console.log(johona)

// -----------------------------------------------

const orders = [
    { quantity: 2, item: { name: 'T-Shirt', price: 25 } },
    { quantity: 1, item: { name: 'Keyboard', price: 75 } },
    { quantity: 2, item: null }];

    const orderItemNames = orders.filter(order => order.item != null).map(order => order.item.name);

    console.log(orderItemNames)