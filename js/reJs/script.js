
// console.log(count)
// let count = 1
// var count2 = 2

// function abc() {
//     console.log(a);
//     var a = 10
// }
// abc()


// function abc() {
//     console.log(a, b, c);
//     const c = 30
//     let b = 20
//     var a = 10
// }
// abc()

// function example() {
//     if (true) {
//         var a = 10
//     }
//     console.log(a);
    
// }
// example()

// console.log(a); // undefined
// var a = 10
// console.log(a); // 10

// function example() {
//     if (true) {
//         let y = 20
//     }
//     console.log(y);
    
// }

// example()

// console.log(b);
// let b=20
// console.log(b);

// let person = { name : "ali" }
// person.name = "sara"
// console.log(person);
// person = {}

// console.log(person);

// var a;
// var a

// const nums = [1, 2, 3, 4, 5 ,7 ,9]

// const multiplyByThree = nums.map( => n * 3)
// console.log(multiplyByThree);
// const moreThanTwo = nums.filter((n, i, nums) => n > 2)
// console.log(moreThanTwo);
// const sum = nums.reduce((acc, cur, i, nums) => {
//     return acc + cur
// }, 0)

// console.log(sum);
// const mapArr = nums.map((n, i, arr) => arr[i] = n - 2)
// console.log(nums);

// let students = [
//     {name: "ali", rollNumber: 32, marks: 80},
//     {name: "sara", rollNumber: 52, marks: 20},
//     {name: "parisa", rollNumber: 42, marks: 65},
//     {name: "ttt", rollNumber: 6, marks: 0},
// ]

// const capitalName = students.map(student => student.name.toUpperCase())
// console.log(capitalName);

// const capitalName = []
// students.map(student => capitalName.push(student.name.toUpperCase()))
// console.log(capitalName);

// for (let i = 0; i < students.length; i++){
//     capitalName.push(students[i].name.toUpperCase())
// }
// console.log(capitalName);

// for (let student of students) {
//     console.log(student);
//     console.log(students);
    
    
// }

// const moreThanSixty = students.filter(student => student.marks > 60)
// console.log(moreThanSixty);



// const moreThanSixtyAndRollNumGreaterThanFifteen = students.filter(student => student.marks > 60 && student.rollNumber>15)
// console.log(moreThanSixtyAndRollNumGreaterThanFifteen);
// const sumOfMark = students.reduce((acc, cur) => {
//     console.log("accc", acc);
//     console.log("curr", cur.marks);
//     return acc + cur.marks
    
//  }, 0)
// console.log(sumOfMark);


// const nameOfMoreThanSixty = students.filter(student => student.marks > 60).map(student => student.name)
// console.log(nameOfMoreThanSixty);


// function square(num) {
//     return num * num
// }

// function display(fn) {
//     console.log("square is: ", square(5))
// }

// display(square)

//iife

// (function square(num) {
//     console.log(num * num);
    
// })(5)

// (function (x) {
//     return (
//         function (y) {
//             console.log(x);
            
//         }
//     )(2)
// })(1)


// function testScope() {
//     let x = 10
//     console.log(x);
    
// }
// testScope()
// console.log(x);


// function outer() {
//     let outerVar = "im outer!"
//     function inner() {
//         console.log(outerVar);
        
//     }
//     inner()
// }

// outer()

// function outer() {
//     let message = "hello from outer!"
//     function inner() {
//         console.log(message);
        
//     }

//     return inner
// }
// const myFunction = outer()
// myFunction()

// for (var i = 0; i < 5; i++){
//     setTimeout(function () {
//         console.log(i);
        
//     }, i * 1000)
    
// }

// var x = 21;
// var fun = function () {
//     console.log(x)
//     var x = 20
// }

// fun()

// function multiply(num1, num2) {
//     return num1 * num2
// }

// // console.log(multiply(1, 3));
// const arr = [6, 3]
// console.log(multiply(...arr));

// function display(nums, ...rest) {
//     console.log(nums);
//     console.log(rest);
    
    
// }
// const arr = [1, 3, 4]
// display(...arr)

// const fn = (a, ...nums, x, y) => {
//     console.log(x, y);
    
// }
// fn(5, 6 ,7 ,8)

// function greeting(name) {
//     alert(`hello ${name}`)
// }

// function processUserInput(callback) {
//     var name = prompt("please enter your name")
//     callback(name)
// }

// processUserInput(greeting)


// Write a program that asks the user to enter a number. Then, pass this number to a callback function that either squares the number or doubles it, based on a second callback.




// function double(n) {
//     return 2*n
// }

// function square(n) {
//     return n*n
// }

// function processUserNumber(callback) {
//     const num = prompt("num: ")
//     alert(callback(num))
// }

// processUserNumber(double)
// processUserNumber(square)

// const double1 = (n) =>  n * 2
// const double2 = (n) => {return n * 2}
// console.log(double1(4));


// function fn() {
//     console.log(arguments);
// }

// fn(1, 3, 5)

// const fn = () => {
//     console.log(arguments);
// }
// fn(1, 3, 5)
// let s = 0
// function sum() {
//     for (let i = 0; i < arguments.length; i++){
//         s+=arguments[i]
//     }
//     return s
// }
// console.log(sum(4, 6, 10));

// const user = {
    
    
//     firstname: "sara",
//     fn1() {
//         console.log("regular func: ", this);
        
//     },
//     fn2: () => {
//         console.log("arrow func: ", this);
        
//     }
// }
// user.fn1()
// user.fn2()

// function display() {
//     console.log(this);
// }

// display()

// function Person(name) {
//     this.name= name
// }

// const person1 = new Person("sara")
// console.log(person1.name);


// function f(a) {
//     return function (b) {
//         return `${a} ${b}`
//     }
// }
// console.log(f(5)(6));

// function add(a) {
//     return function (b) {
//         return a + b
//     }
// }
// console.log(add(4)(6));

// const add = (a) => (b) => a + b
// console.log(add(4)(7));


// function evaluate(operation) {
//     return function (n1) {
//         return function (n2) {
//             switch (operation) {
//                 case "sum":
//                     return n1 + n2;
                   
//                 case "multiply":
//                     return n1 * n2
                    
//                 case "divide":
//                     return n1 / n2;
                   
//                 case "substract":
//                     return n1 - n2
                     
//                 default:
//                     return "invalid operation"
//             }
//         }
//     }
// }

// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));

// sum(1)(2)
// sum(1)(2)(3)(4)(5)

// function sum(n1) {
//     return function (n2) {
//         if (n2) {
//             return sum(n1+n2)
//         } else {
//             return n1
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4)(5)());


// function sum(a) {
//     return function (b, c) {
//         return a + b + c
//     }
// }
// console.log(sum(2)(3, 4));
// console.log(sum(2, 3, 4));
// const x = sum(2) // function (b, c) {
//     // return a + b + c
// // }

// console.log(x(3, 4));


// function updateElementText(id) {
//     return function (content) {
//          document.querySelector("#" + id).textContent = content
//     }
// }

// const updateHeadingText = updateElementText("heading")

// updateHeadingText("bye")

// const user = {
//     name: " sara",
//     age: 30,
//     lastname: "dd",
//     "likes books": true,
// }
// console.log(user.name);
// console.log(user["age"]);
// delete user["lastname"]
// console.log(user);


// const func = (function (a) {
//     delete a;
//     return a;
// })(5)
// console.log(func);
// let key = "gender"
// user[key] = "female"
// console.log(user);

// const user = {
//     name: " sara",
//     age: 30,
//     lastname: "dd",
//     "likes books": true,
//     [key] : "female"
// }
// console.log(user);
// for (key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// let nums = {
//     a: 100,
//     b: 200,
//     title: "my nums"
// }
// // multiplyByTwo(nums)
// function multiplyByTwo(obj) {
//     for (key in obj) {
//         if (typeof obj[key] === "number") {
//              obj[key] = obj[key] * 2
//         }
//     }
//     console.log(obj);
// }

// console.log(multiplyByTwo(nums));


// const a = {}
// const b = { key: "b" }
// const c = { key: "c" }
// a[b] = 123
// a[c] = 456
// // console.log(a[b]);
// console.log(a);


const user = {
    name: " sara",
    age: 30,
    lastname: "dd",
    "likes books": true,
}
const json = JSON.stringify(user)
console.log(json);
const obj = JSON.parse(json)
console.log(obj);

console.log(localStorage.getItem("test"));
console.log(JSON.parse(localStorage.getItem("test")));



 