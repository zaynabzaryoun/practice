
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

function outer() {
    let message = "hello from outer!"
    function inner() {
        console.log(message);
        
    }

    return inner
}
const myFunction = outer()
myFunction()