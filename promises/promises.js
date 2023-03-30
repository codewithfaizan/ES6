// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve("resolved")
//     }else{
//         reject("rejected")
//     }
// })

// console.log(promise)

// --------------------------------------------------

// const responseFromServer = new Promise((resolve, reject) => {
//     if(true) { 
//         resolve(`We got the data`)
//     } reject(`Data not received`)
// })

// console.log(responseFromServer)

// ---------------------------------------------------

// let makeServerRequest = new Promise((resolve, reject) => {
//     let responseFromServer = true;

//     if (responseFromServer){
//         makeServerRequest.then(result => {
//             "We got the Data"
//         })
//         console.log(result)
//     }else {
//         reject("data not received")
//     }
// })
// console.log(makeServerRequest)

// ------------------------------------------------------

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer= true
    if(responseFromServer) { 
        resolve(`We got the data`)
    } reject(`Data not received`)
})

makeServerRequest.then(result =>{
    console.log(result)
});
makeServerRequest.catch(error => {
console.log(error)
})

console.log(makeServerRequest)

console.log(responseFromServer)