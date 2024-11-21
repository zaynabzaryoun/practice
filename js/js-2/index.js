// const firstName = "maryam";
// const iterator = firstName[Symbol.iterator]();
// // const iterator = firstName[Symbol.iterator];
// console.log(iterator)

let scores = [10, 20, 30];
scores.message = "Hi";

// console.log(scores);

for (let score in scores) {
  //   console.log(score);
}

for (let score of scores) {
  //   console.log(score);
}

// let ranks = ['A', 'B', 'C'];
// ranks.forEach(function(e, index, arr) {
//     console.log(e, index, arr);
// });

// const numbers = [1, 2, 3];
// numbers.forEach(function (e) {
//     console.log(e**2);

// })

// console.log(numbers);

// const numbers = [1, 2, 3];
// numbers.forEach(function (e, index, array) {
//     array[index] = e**2

// })
// console.log(numbers);

// const newNumbers = numbers.forEach(function (e) {
//     return e*3
// })
// console.log(newNumbers);
// console.log(numbers);

// const newNumbers = numbers.map(function (e) {
//     return e*3
// })
// console.log(newNumbers);
// console.log(numbers);

// const sayHello = (name) => {
//     return `hello ${name}`
// }

// const sayHello = name => `hello ${name}`
// console.log(sayHello("lila"));

// setTimeout(function () {
//     console.log("hello");

// }, 4000)

// setInterval(function () {
//     console.log("hellooo");

// },4000)

// setInterval(()=> console.log("gg"), 4000)

// function startCountdown(seconds) {
//     const interval = setInterval(() => {
//         console.log("count down", seconds);
//     seconds--;
//     if (seconds === -1) {
//         console.log("times up");
//         clearInterval(interval)
//     }
//     },1000)
// }
// startCountdown(4)

// console.log(typeof 3);


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(sum);



//##global scope, when variable is  defined outside of any block. when can access this variable(of any kind) from anywhere

//##block scope, when variable id defined inside of { } of if, for, ... .
//const and let if are block scope can not be accessed from outside.

//##function scope, varaible define inside of { } of functin. you can access any kind of variable(even var) from outside

//##var is either functiobn scope oe gobal scope. never block scope. when you declare var outside of any function it is global scope and can be accessed from anywhere. if var is declare inside of a function or inside of a block which this block is inside of function it is function scope, and you cannot accessed outside of function.
//so: If you declare a var inside a block (like an if, for, or while), it ignores the block and acts as if it were declared at the top of the nearest function or global scope.



//dynamic property

// const key = "color"
// const obj = {};

// // obj["color"]
// obj[key] = "fvfv"

// console.log(obj);

// let key = "age"

// const obj = {
//   fname: "sara",
//   [key]: 20
// }


// const obj = {}
// for (let i = 0; i < 10; i++){
//   obj[`key${i}`] = i
  
// }

// console.log(obj);


let key = prompt("enter property name: ")
const person = {
  id: 1,
  [key]: "vfv"
}

console.log(person);
