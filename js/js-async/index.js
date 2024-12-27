// function getUser() {
//     return [
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//     ]
// }

// function findUser(username) {
//     const users = getUser()
//     const user = users.find(user => user.username === username)
//     return user
// }

// console.log(findUser("jane"))

// if promise to do sth, if i can do it the promise is resolved if i cant its rejected.

// let p = new Promrise(function) function(resolve, reject)

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a === 2) {
//         resolve("successed")
//     } else {
//         reject("failed")
//     }
// })

// // interaction with promises. p.then() after resole

// p.then((msg) => {
//     console.log("this is in the then, ", msg);
    
// }).catch((msg) => {
// console.log("this is in catch");

// })

// userLeft = true
// userWatchingCatMeme = true
// function watchTutrialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: "user left",
//                 message: ";("
//             })
//         }else if (userWatchingCatMeme) {
//             reject({
//                 name: "user watching cat meme",
//                 message: "cat"
//              })
//         } else {
//             resolve(":)")
//         }
//     })
// }

// watchTutrialPromise().then((message) => {
//     "success", message
// }).catch((error) => {
//     console.log(error.name, " ", error.message);
    
// })

// const recordVideoOne = new Promise((res, rej) => {
//     res("suc: 1")
// })
    
// const recordVideoTwo = new Promise((res, rej) => {
//     res("suc: 2")
// })

// const recordVideoThree = new Promise((res, rej) => {
//     res("suc: 3")
// })


// // Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then((msgs) => {
// //     console.log(msgs);
    
// // })

// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then((msg) => {
//     console.log(msg);
    
// })