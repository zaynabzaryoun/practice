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

// let p = new Promise(function (resovle, reject) {
//     let a = 1 + 1 // performe a task
//     if (a === 2) {
//         resovle("success")
//     } else {
//         reject("error")
//     }
// })

// p.then((msg) => {
//     console.log("then", msg);
    
// }).catch((err) => {
//     console.log("catch", err);
    
// })

// function getUser() {
//     return [
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//     ];
// }

// function findUser(usernamee) {
//     return new Promise(function(res, rej){
//         const users = getUser();
//         const user = users.find(u => {
//           return  u.username === usernamee
//         })
//         if (user) {
//             res(`${user.username}`)
//         } else {
//             rej("user not found")
//         }
//     })
// }

// findUser("john")
//     .then((msg) => {
//         console.log("user found: ", msg);
        
//     }).catch((err) => {
//         console.log("error", err);
        
//     })



// let stocks = {
//     fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquids: ["water", "ice"],
//     holders: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"]
// }

// let is_shop_open = false

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         } else {
//             reject(console.log("our shop is closed"))
//         }
//     })
// }

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

//     .then(() => {
//         return order(0o0, () =>console.log("production has started"))
//     })

//     .then(() => {
//         return order(2000, () =>console.log("fruits were shops"))
//     })

//     .then(() => {
//         return order(2000, ()=> console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`))
//     })

//     .then(() => {
//         return order(1000, ()=> console.log("start the machine"))
//     })

//     .then(() => {
//         return order(2000, ()=> console.log(`ice cream placed on ${stocks.holders[0]}`))
//     })
    
//     .then(() => {
//         return order(3000, ()=> console.log(`${stocks.toppings[0]} was selected`))
//     })

//     .then(() => {
//         return order(2000, ()=> console.log("ice is sereved"))
//     })

//     .catch(() => console.log("the contomer left"))
    
//     .finally(()=> console.log("day ended, the shop is closed"))



// let stocks = {
//     fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquids: ["water", "ice"],
//     holders: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"]
// }

// let is_shop_open = true

// async function order() {
//     try {
//         await abc
//     }
//     catch (error) {
//         console.log("abc doesnt exist", error);
        
//     }
//     finally {
//         console.log("runs anyways");
        
//     }
// }

// order()

// .then(()=> console.log("hhj")
// )


// const topping_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("which toppings would you like?"))
            
//         }, 3000)
//     })
// }

// async function kitchen() {
//     console.log("A");
//     console.log("B");
//     console.log("C");

//     await topping_choice()

//     console.log("D");
//     console.log("E");
// }

// kitchen()

// console.log("getting orders");
// console.log("doing the dishes");






// function fetchPost() {
//     let response = fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => {
//             console.log(response);
//             if (!response.ok) {
//                 throw new Error("http error" + response.statusText)
//             } else {
//                 let data = response.json()
//                 return data
//             }
//         })
//         .then((data) => {
//         console.log("data ", data);
        
//         })
//         .catch((error) => {
//         console.log(error);
//     })

// }

// fetchPost()

//fetch fucntino returns response object when the promise resolve. we can get this obj by then.
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         // console.log(response.body.getReader());
//        return response.json()
//     }).then((data) => {
//        console.log(data);
//     })
//     .catch((err) => {
//     console.log(err);
//     })


// (async function getPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const json = await response.json()
//         console.log(json);
//     } catch (err) {
//         console.log(err);
        
//     }
// })()


// const getPosts = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const json = await response.json()
//         if (json.userId == 1) {
//             json.compeleted = false
//         } else {
//             json.compeleted = true
//         }
//         console.log(json);
        
        
//     } catch (err) {
//         console.log(err);
        
//     }
// }

// getPosts()


// const getPosts = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         console.log(response);
        
//         const data = await response.json()
//         console.log(data);
        

//     } catch(err) {
//         console.log(err);
        
//     }
// }

// getPosts()


// const obj = { name: "sara", age: 25 };
// const json = JSON.stringify(obj)
// console.log(typeof json);




// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction


// function sayHi() {
//   return "hello";
// }

// async function sing() {
//   return "la la la la"; // promise
// }

// console.log(sayHi());

// console.log(sing());

// sing().then(m => console.log(m)
// ).catch(e=>console.log(e)
// )


async function sign() {
    return "la la la"

    throw "oh no"
}



sign().then(e =>console.log(e)
).catch(e=>console.log(e))