// const name = "zaa" //string
// const age = 22 //numbers 
// const isOlder = false // boolean
// const book = null
// let language;
// let id = Symbol('id'); //symbol
// let largerNum = 374378n;
// let n1 = 1; 
// // let answer = n1 + largerNum //error
// let answer = BigInt(n1) + largerNum
// console.log(answer);

// console.log(language);  //undefined

// console.log(x); // not defined

let a = "he"
let b = "llo"
let newS = a + b
// console.log(newS);

let c= 4
// console.log(a + c);

let result = "5" - 2; // "5" is converted to 5, result is 3
// console.log(result);


// let x = prompt("enter num: ");
// if (x > 0) {
//     console.log("x is positive");
// } else if (x < 0) {
//     console.log("x is negative");
// }else{
//     console.log("x is 0");
    
// }


let age = 16;

let message;
// if (age >= 16) {
//     message = "you can drive";
// } else {
//     message = "you cant drive";
// }

// console.log(message);
//
// age >= 16 ? message = "you can drive" : message = "you cant drive"; // ternary operator
//message = age>16? "you can": "you can not"
// console.log(message);


// let authenticated = false;
// let nextURL = authenticated
//   ? (alert('You will redirect to admin area'), '/admin')
//   : (alert('Access denied'), '/403');


// let speed = 80
// const idFast = speed > 120 ? "too fast" : speed > 90 ? "fast" : "ok"
// console.log(idFast);


//





// let year = 2016;
// let month = 2;
// let dayCount;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     dayCount = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     dayCount = 30;
//     break;
//   case 2:
//     // leap year
//     if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
//       dayCount = 29;
//     } else {
//       dayCount = 28;
//     }
//     break;
//   default:
//     dayCount = -1; // invalid month
// }

// console.log(dayCount); // 29


// let i =0
// do {
//     console.log(i);
//     i++;
    
// }while(i<5)


// let min = 2;
// let max = 5;
// const randomNum = Math.floor(Math.random() * (max - min)) + min

// console.log(randomNum);

// let n = parseInt(prompt(`enter a num between ${min} and ${max} : `))
// let guess = 1;

// while (n !== randomNum) {
//     if (n > randomNum) {
//         n = parseInt(prompt("random is smaller"))
//         guess++;
//     } else {
        
//         n = parseInt(prompt("random is greater"))
//         guess++;
//     }
    
// }

// console.log(`congs! the ramfom num is ${randomNum} in ${guess} attempts`);

// let sum = 0;

// for (let i = 1; i <= 10; i++){
//     sum = i + sum;
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++){
//     for (let j = 1; j <= 3; j++){

//         if (j === 2) {
//             break;
//         }
//         console.log(i, j);
//     }
// }

// for (let i = 1; i <= 10; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
    
// }
// function declaration
// function logger(message) {
//     console.log(message);
// }

// let resultt = logger("hello")
// console.log(resultt)

// function compare(a, b) {
//     if (a > b) {
//         return -1
//     } else if (a < b) {
//         return 1
//     } else {
//         return 0
//     }
// }

// let n = compare(1, 3)

// console.log(n);


// function messager(message) {
//     if (!message) {
//         return
//     }
//     console.log(message);
    
// }

// let r= messager("")

// function add(a1, a2){
//     return a1 + a2;
// }

// let resul = add(1, 3)

// console.log(resul);

// console.log(resul(1, 3));
// console.log(add(1,3));


