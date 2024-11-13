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


let day = 3;

let dayname;
switch (day) {
    case 1:
        dayname = "sunday";
        break;
    case 2:
        dayname = "monday"
        break;
    default:
        console.log("invalid");
        
        break;
}




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





