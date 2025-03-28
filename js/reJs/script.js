
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


// const user = {
//     name: " sara",
//     age: 30,
//     lastname: "dd",
//     "likes books": true,
// }
// const json = JSON.stringify(user)
// console.log(json);
// const obj = JSON.parse(json)
// console.log(obj);

// console.log(localStorage.getItem("test"));
// console.log(JSON.parse(localStorage.getItem("test")));

// console.log([..."lydia"]);

// const user = { name: "lydia", level: 19, health: 90 }
// const data = JSON.stringify(user, ["level", "health"])
// console.log(data);


// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2
//     },
//     perimeter: () => 2 * this.radius * Math.PI
// }
// console.log(shape.diameter());
//  console.log(shape.perimeter());
 
 
// const user = {
//     name: " sara",
//     age: 30,
//     lastname: "dd",
//     "likes books": true,
//     fullname: {
//         firstname: "sara",
//         lastname: "dd"
//     }
// }

// const name = user.name
// console.log(name);
// const { name, age, ...rest } = user

// console.log(name,  age, typeof rest);

// const { name, "likes books": likesBooks } = user
// console.log(name, likesBooks, user);

// const { fullname: {firstname}, } = user
// console.log(fullname);
// console.log(firstname);

// function getItems(fruitList, favoriteFruit, ...args) {
//     return [...fruitList, ...args, favoriteFruit];
// }

// console.log(getItems(["banana", "apple"], "pear", "orange"));


// let person = { name: "lydia" }
// const member = [person]  //[{ name: "lydia" }]
// person = null
// console.log(member)

// const value = { number: 10 }
// const multiply = (x = {...value}) => {
//     console.log((x.number *= 2));
// }

// multiply()
// multiply()
// multiply(value)
// multiply(value)

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "john",
//         age: 50
//     }
//     return person
// }
// const personObj1 = {
//     name: "alex",
//     age: 30
// }

// const personObj2 = changeAgeAndReference(personObj1)
// console.log(personObj1);
// console.log(personObj2);


// const user1 = {
//     name: "sara",
//     age: 20,
//     address: {
//         city: "new york",
//         country: "usa"
//     }
// }

// // const user2 = user1
// // user1.name = "ali"
// // console.log(user1, user2);


// // const userCopy = { ...user1 }
// const userCopy = Object.assign({}, user1)
// userCopy.name = "ali"
// userCopy.address.city = "los angeles"
// console.log(user1, userCopy);


// const userCopy = structuredClone(user1)
// userCopy.name = "john"
// userCopy.address.city = "los angeles"
// console.log(user1, userCopy);

// const userCopy = JSON.parse(JSON.stringify(user1))
// userCopy.address.city = "ggggg"
// console.log(user1, userCopy);


// console.log(this);
// this.a = 5
// console.log(a);

// function getParam() {
//     console.log(this);
// }
// getParam()

// const getParam2 = () => {
//     console.log(this);
// }

// getParam()

// class Person{
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet() {
//         console.log(`hello i am ${this.name} and im ${this.age} years old`);
//     }
// }
// const person1 = new Person("sara", 30)
// console.log(person1.name);
// person1.greet()


// const user = {
//     firsname: "saraaaaaaaaaa",
//     getName() {
//         const firsname = "sara"
//         return this.firsname
//     }
// }

// console.log(user.getName());

// function makeUser(){
//     return {
//         name: "john",
//         ref(){
//         return this
//         }
//     }
// }

// let user = makeUser()
// console.log(user.ref().name);


// const user = {
//     name: "sara bbb",
//     logMessage() {
//         console.log(this.name);
//     }
// }
// setTimeout(() => {
//     user.logMessage()
// }, 1000)


// let calculator = {
//     read() {
//         this.n1 = +prompt("n1?", 0)
//         this.n2 = +prompt("n2?", 0)
//     },
//     sum() {
//         return `sum: ${this.n1 + this.n2}`
//     },
//     mul() {
//         return `mul: ${this.n1 * this.n2}`
//     }
// }
// calculator.read()
// console.log(calculator.sum());
// console.log(calculator.mul());

var length = 4;
// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method(fn) {
//         fn()
//     }
// }
// object.method(callback)


// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method() {
//         arguments[0]()
//     }
// }
// object.method(callback, 2, 3)

// const calc = {
//     total: 0,
//     add(n1) {
//         this.total += n1;
//         return this
//     },
//     multiply(n2) {
//          this.total *= n2
//         return this
//     },
//     subtract(n3) {
//          this.total -= n3
//         return this
//     }
// }

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// var obj = { name: "sara" }
// function sayHello(age) {
//     return "hello im " + this.name + " and " + age + " old";
// }
// console.log(sayHello(34));


// var obj = { name: "sara" }
// function sayHello(age) {
//     return "hello im " + this.name + " and " + age + " old";
// }
// console.log(sayHello.call(obj, 34));

// var obj = { name: "sara" }
// function sayHello(age, profession) {
//     return "hello im " + this.name + " and " + age + " old and a " + profession;
// }
// console.log(sayHello.call(obj, 34, "doctor"));


// var obj = { name: "sara" }
// function sayHello(age, profession) {
//     return "hello im " + this.name + " and " + age + " old and a " + profession;
// }
// console.log(sayHello.apply(obj, [34, "doctor"]));

// var obj = {
//     name: "sara"
// }

// function sayHello(age, profession) {
//     return "hello im " + this.name + ", " + age  + " and a " + profession
// }

// const returnedBoundFunc = sayHello.bind(obj, 34, "doctor")
// console.log(returnedBoundFunc());
// console.log(returnedBoundFunc());
// console.log(returnedBoundFunc());

// const person = {name: "sara"}
// function sayHi(age) {
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person, 24));
// console.log(sayHi.bind(person, 24));

// const age = 10
// var person = {
//     name: "sara",
//     age: 20,
//     getAge:function(){
//         return this.age
//     }
// }
// var person2 = { age: 24 }
// console.log(person.getAge.call(person2));


// var status = "cool"
// setTimeout(() => {
//     const status = "heart"
//     const data = {
//         status: "green",
//         getStatus() {
//             return this.status
//         }
//     }

//     console.log(data.getStatus());
//     console.log(data.getStatus.call(this));
// }, 0)

// const animals = [
//     { species: "lion", name: "king" },
//     {species:"whale", name: "queen"}
// ]

// function printAnimals(i) {
//     this.print = function (){
//         console.log("#" + i + this.species + ": " + this.name);
//     }
//     this.print()
// }
// for (let i = 0; i < animals.length; i++){
//     printAnimals.call(animals[i], i+1)
// }


// const array = ["a", "b"]
// const element = [0, 1, 2]

// array.push.apply(array, element)
// console.log(array);

// array.push(...element)
// console.log(array);


