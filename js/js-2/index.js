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


// let key = prompt("enter property name: ")
// const person = {
//   id: 1,
//   [key]: "vfv"
// }

// console.log(person);

// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const cimbined = [...array1, ...array2]
// console.log(cimbined);

// const colors = ["red", "green", "blue", "purple", "orange"];
// const [first, second] = colors
// console.log(first);
// console.log(second);
// const [, second, third] = colors
// console.log(second, third);

// const [color1, color2, ,...rest] = colors
// console.log(rest);


// const person = { name: "Zaynab", age: 25 };
// let { name: firstName, age: personAge } = person

// console.log(firstName, personAge);
// firstName = "sara"

// let { firstName, lastName, middleName } = person;
// console.log(middleName); // undefined

// let { name, age: personAge = 30, lname: lastName = "zaryoun" } = person
// console.log(lastName);
// console.log(person);

// let employee = {
//   id: 1001,
//   name: {
//       firstName: 'John',
//       lastName: 'Doe'
//   }
// }

// let { name: { firstName } } = employee



// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
//   isElectric: false,
//   color: "blue"
// };
// console.log(Object.keys(car));
// console.log(Object.values(car));


// function logger(name= "zaynab") {
//   console.log("hello", name);
  
// }

// logger("ali")

// function trickyScopeExample() {
//   // Function scope
//   if (true) {
//     var funcScopedVar = "I'm function-scoped (var)";
//     let blockScopedLet = "I'm block-scoped (let)";
//     const blockScopedConst = "I'm block-scoped (const)";
//   }

//   console.log(funcScopedVar); // ✅ Accessible: "I'm function-scoped (var)"
//   // console.log(blockScopedLet); // ❌ ReferenceError: blockScopedLet is not defined
//   // console.log(blockScopedConst); // ❌ ReferenceError: blockScopedConst is not defined

//   for (var i = 0; i < 3; i++) {
//     var funcScopedInsideLoop = "I'm still function-scoped (var)";
//     let blockScopedInsideLoop = `Block-scoped in iteration ${i} (let)`;
//     const blockScopedConstInsideLoop = `Block-scoped in iteration ${i} (const)`;

//     console.log("Inside loop:", blockScopedInsideLoop);
//     console.log("Inside loop:", blockScopedConstInsideLoop);
//   }

//   console.log(funcScopedInsideLoop); // ✅ Accessible: "I'm still function-scoped (var)"
//   // console.log(blockScopedInsideLoop); // ❌ ReferenceError: blockScopedInsideLoop is not defined
//   // console.log(blockScopedConstInsideLoop); // ❌ ReferenceError: blockScopedConstInsideLoop is not defined

//   // Using var in a loop creates an unexpected behavior:
//   console.log("Loop counter after the loop (var):", i); // ✅ Accessible: 3

//   // Block-level shadowing
//   let outerLet = "I'm outer (let)";
//   {
//     let outerLet = "I'm inner (let, shadowing outerLet)";
//     console.log(outerLet); // ✅ Accessible: "I'm inner (let, shadowing outerLet)"
//   }
//   console.log(outerLet); // ✅ Accessible: "I'm outer (let)"

//   // Hoisting quirk with var
//   console.log(hoistedVar); // ✅ Undefined (due to hoisting)
//   // console.log(hoistedLet); // ❌ ReferenceError: Cannot access 'hoistedLet' before initialization
//   var hoistedVar = "I was hoisted (var)";
//   let hoistedLet = "I was not hoisted (let)";
// }

// trickyScopeExample();


// function outerBox(){
//   let sercet = "hello"
//   function innerBox() {
//     console.log(sercet);
//     let a = 0;
    
//   }
//   innerBox()
// }

// outerBox


// function higherOrderFunc(callback) {
//   console.log("exctution od higher order func");
//   callback("zaynab");
// }

// function argumentFuc(namee) {
//   console.log(`im ${namee}`);
// }

// higherOrderFunc(argumentFuc)


// // Higher Order Function that accepts a callback function
// function higherOrderFunction(callback) {
//   // Performing some operations
//   console.log("Executing the higher order function...");

//   // Calling the callback function
//   callback();
// }

// // Callback function to be passed to the higher order function
// function callbackFunction() {
//   console.log("Executing the callback function...");
// }

// // Calling the higher order function with the callback function as argument
// higherOrderFunction(callbackFunction);


// function createsGreeter(greeting) {
//   return function cller(namee) {
//     console.log(`${greeting} to ${namee}`);
    
//   }
// }

// const greeting = createsGreeter("hello")
// greeting("ali")


// function performOperationOnArray(array, operation) {
//   return array.map(operation)
// }

// function doubler(e) {
//   return e*2
// }

// const nums = [1, 2, 3, 4]
// const doublednum = performOperationOnArray(nums, doubler)
// console.log(doublednum);

//
// function perfomeFilter(array, condition){
//   return array.filter(condition)

// }


// const nums = [1,2,4,5,6,7]
// const filtered = perfomeFilter(nums, (e) => e >= 3)
// console.log(filtered);

// function processArray(arr, operations) {
//   return operations.reduce((acc, operation) => operation(acc), arr)
// }

// const numbers = [1, 2, 3, 4, 5];
// const result = processArray(numbers, [
//   arr => arr.map(num => num * 2),
//   arr => arr.filter(num => num % 3 === 0)
// ])
// console.log(result);

//reusability
// function filterArray(arr, condition) {
//  return arr.filter(condition)
// }

// const array = [1, 2, 3, 4, 5, 6]
// const even = filterArray(array, e => !(e % 2))
// console.log(even);

//modularity
// function perfomOnArray(arr, operations) {
//   return operations.reduce((acc, op)=> op(acc), arr)
// }

// const nums = [1, 2, 3, 4, 5]
// let newArr = perfomOnArray(nums, [
//   array=>array.map(e => e * 2),
//   array=>array.filter(e=> e%3===0)
// ])

// console.log(newArr);


let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

counter.next();

//global
console.log(this === window); // true


this.color= 'Red';
console.log(window.color); // 'Red'


function show() {
  console.log(this === window); // true
}

show();