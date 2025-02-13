// logical or ||
//evaluate the operands from left to right. if an operand is not boolean, it is converted to boolean for the evaluation

// if (1 || 0) {
//     console.log("truthy");
// }



//// a chain of OR || return first truthy value, or the last value if no truthy value is found:
//// result = value1 || value2 || value3

// console.log(1||0);
// console.log(null || 1);
// console.log(null || 0 || 1);
// console.log(undefined || null || 0);

////usage:
//// 1- returning first truthy value froma list of variables or expressions

// let firstName = "";
// let lastName;
// let nickName;

// const result = firstName || lastName || nickName || "Anonymous"
// console.log(result);

//// 2- short circuit evaluation: or process its operand until the first truthy value is reached,
//// then this value is returned immediately, without even checking the others opernand;
//// we cam use this feature to execute commands only if the condition on the left part is fasly.

//// AND &&

//// a chain of AND && return first falsy value, or the last value if no falsy value is found:
//// result = value1 || value2 || value3

// console.log(1 && 0);
// console.log(1 && 5);

////precedence of AND is higher that OR

////not !:
////! accept a single operands, if its not boolean converts it to boolean then returns the inverse value of the operand.

// console.log(!true);
// console.log(!0)

//// a double not (!!) is used to convert a value to boolean

// console.log(!!null);

////the precedence of ! is higher that all logical operator.

// alert( alert(1) || 2 || alert(3) );
// alert( alert(1) && alert(2) );

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

// if (!(age >= 14 && !age <= 80)) { }
// if(age < 14 || age > 80) {}



// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”


// let userAnswer = prompt("Who's there?");

// let password;
// if (userAnswer === "Admin") {
//     password = prompt("your Password?")

//     if (password === "TheMaster") {
//         alert("welcome!")
//     } else if (password === null || password.trim() === "") {
//         alert("canceled")
//     } else {
//         alert("wrong password")
//     }

// } else if (userAnswer === null || userAnswer.trim()==="")  {
//     alert("canceled")
// } else {
//     alert("I dont know you")
// }


///////////////////////////////////////////////////////////


// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?
// 1- The prefix form ++i:

// let i = 0;
// while (++i < 5) alert(i);


// 2-The postfix form i++:

// let i = 0;
// while (i++ < 5) alert( i );


//////////////////////////////////////////////////////

// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?

// 1-The postfix form:

// for (let i = 0; i < 5; i++) alert( i );   / 0   1   2   3    4

// 2- The prefix form:

// for (let i = 0; i < 5; ++i) alert( i );    / 0   1   2    3   4

//////////////////////////////////////////////////////
// Use the for loop to output even numbers from 2 to 10.

// for (let i = 0; i <= 10; i += 2){
//     console.log(i);
// }

////////////re write this code with while:

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }
/////////////////////////////////////////


// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

let i 

do {
    i = +prompt("enter a num")

}while(i<=100 && num!==null)
console.log(i);




















