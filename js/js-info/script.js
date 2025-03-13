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

// let i

// do {
//     i = +prompt("enter a num")

// }while(i<=100 && num)
// console.log(i);

/////////////////////////////////////
// Write the code which outputs prime numbers in the interval from 2 to n.

// let n = 944
// let isPrime = true;
// for (let i = 2; i <= Math.sqrt(n); i++){
//     if (!(n%i)) {
//         isPrime = false
//         break
//     }
// }
// if (n > 1 && isPrime) {
//     console.log("is prime");
// } else {
//     console.log("is not prime");
    
// }

////////////////////////////////////////////
// Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

//answer:

// if (browser === "Edge") {
//     alert( "You've got the Edge!" );
// } else if (browser === "Chrome"
//     || "Firefox"
//     || "Safari"
//     || "Opera") {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }
///////////////////////////////////////////////////////////////////////

// Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch (a) {
//     case 0:
//         alert(0)
//         break
//     case 1:
//         alert(1)
//         break
//     case 2:
//     case 3:
//         alert("2, 3")
//         break
// }


///////////////////////////////////////////////////////////////////

// function plusA(n, a=4) {
//     n = n + a
// }

// let n = 10
// plusA(n, 3)
// console.log(n);

//////////////////////////////////////////////////////////
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

// function checkAge(age) {
//     return result = age > 18 ? true :  confirm('Did parents allow you?');
// }

// function checkAge(age) {
//     return result = age > 18 || confirm('Did parents allow you?');
// }

///////////////////////////////////////////////////////////
// Write a function min(a,b) which returns the least of two numbers a and b.
// function min(a, b) {
//     if (a > b) {
//         return b
//     } else {
//         return a
//     }
// }


// console.log(min(2, 5) == 2);
// console.log(min(3, -1) == -1);
// console.log(min(1, 1) == 1);

////////////////////////////////////////////////////////////////////////
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// function pow(x, n) {
//     let m = 1;
//     for (let i = 1; i <= n ; i++){
//          m = m * x
//     }
//     return m
// }

// console.log(pow(3, 2))
// console.log(pow(3, 3))
// console.log(pow(1, 100))

////////////////////////////////////////////////////////////////////
// let key = "likes"
// let user = {
//     firstName: "amin",
//     lastName: "amini",
//     [key]: true,
// }

// console.log(user[key]);


// let user = {
//     name: "John",
//     age: 30
// };
  
// let key = prompt("what so you want to know about the user?", "name")

// console.log(user[key])


// let fruits = prompt("your fruits", "apple")
// let bag = {
//     ["red" + fruits] : 5
// }

// console.log(bag);


// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     }
// }


// let user = makeUser("sara", "afshar")
// console.log(user);


//////////////////////////////////////

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// }
// console.log(obj.for + obj.let + obj.return);


// let obj = {
//     0: "test",
// }

// console.log(obj[0]);
// console.log(obj["0"]);

// let obj = {}
// obj.__proto__ = 5;
// console.log(obj.__proto__);

// let user = {};
// console.log(user.age === undefined);


// let user = { name: "John", age: 30 };
// console.log("name" in user);
// console.log("hello" in user);

// for (let key in obj) {
    
// }


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };
  
// console.log(codes);

// console.log(String(Math.trunc(Number("49"))));
// console.log(String(Number("+49")));
// console.log(String(Number("1.2")));


///////////////////////////////////////////////////////////////////////////////


// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// let user = {}
// user.name = "John"
// user["surname"] = "Smith"
// user.name = "Pete"
// delete user.name
// console.log(user);

////////////////////////////////////////////////////////////////////////////
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// let user = {
// //   name: "zz"
// }

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }

// console.log(isEmpty(user));

////////////////////////////////////////////////////////////////////////////////
// We have an object storing salaries of our team:

// let salaries = {
// //   John: 100,
// //   Ann: 160,
// //   Pete: 130
// }
// // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// // If salaries is empty, then the result must be 0.

// function sumOfSalaries(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key]
//     }
//     return sum
// }
// console.log(sumOfSalaries(salaries))


//////////////////////////////////////////////////////////////////////////

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.



// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] = obj[key] * 2
//         }
//     }
// }

// multiplyNumeric(menu)
// console.log(menu);


// let user = {
//     name: "John",
//     age: 30
// };
  
// // let clone = {}

// // for (let key in user) {
// //     clone[key] = user[key]
// // }

// let obj = { ...user }
// obj.name = "ssss"
// console.log(obj);
// console.log(user);

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// Object.assign(user, permissions1, permissions2)
// console.log(user);

// Object.assign(user, { name: "yyy" })
// console.log(user);

// let userClone = {}
// const clone = Object.assign({}, user)
// console.log(clone);



// let user = {
//     name: "john",
//     size: {
//         height: 170,
//         width: 70
//     }

// }

// let clone = Object.assign({}, user)

// console.log(clone.size === user.size);
// clone.size.width = {}
// console.log(user);
// console.log(clone);


// let clone = structuredClone(user)
// console.log(clone.size === user.size);

// let user = {}
// user.me = user;
// console.log(user);
// let clone = structuredClone(user)
// console.log(clone.me === clone);

// function marry(man, woman) {
//     man.wife = woman;
//     woman.husband = man

//     return ({
//         father: man,
//         mother: woman,
//     })
// }

// let family1 = marry({name : "ali"}, {name: "sara"})
// console.log(family1);


// delete family1.father.wife
// delete family1.mother.husband

// let user = {
//     name: "john",
//     age: 40,
//     // sayHi: function() {
//     //     console.log("hello");
        
//     // }
//     sayHi(){
//         console.log(`hello ${this.name}`);
//         console.log(this);
        
        
//     }
// }

// // user.sayHi = function () {
// //     console.log("hello");
    
// // }

// user.sayHi()

// let user = {
//     name: "john",
//     age: 40,
//     // sayHi: function() {
//     //     console.log("hello");
        
//     // }
//     sayHi(){
//         console.log(`hello ${user.name}`);
//         console.log(this);
//     }
// }

// user.sayHi()

// let clone = user

// user = null;

// clone.sayHi()

// function sayhi() {
//     console.log(this);
    
// }

// sayhi()

// let user = { name: "sara" }
// let admin = { name: "admin" }

// function sayHi() {
//     console.log(this.name);
// }

// user.f= sayHi
// admin.f = sayHi

// user.f()
// admin.f()
// admin["f"]()


// let user = {
//     name: "john",
//     age: 40,
//     // sayHi() {
//         // console.log(this);
//         arrow: () => {
//             console.log(this);
            
//         }
//     }


// user.arrow()
/////////////////////////////////////////////////////////

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// console.log( user.ref.name); // What's the result?
///////////////////////////////////////////////////////////

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum());
// alert( calculator.mul());

// let calculator = {
//     read() {
//         this.a = +prompt("enter a?", "")
//         this.b = +prompt("enter b ?", "")
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }
// console.log(calculator.a);


// calculator.read()
// console.log(calculator.sum());
// console.log(calculator.mul());

///////////////////////////////////////////////////////////////////////////////
// There’s a ladder object that allows you to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };
// Now, if we need to make several calls in sequence, we can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0



// let ladder = {
//   step: 0,
//   up() {
//       this.step++;
//       return this
//   },
//   down() {
//       this.step--;
//       return this
//   },
//   showStep: function() { // shows the current step
//       alert(this.step);
//       return this
//   }
// };

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0


// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
  
// let user = new User("ali")
// console.log(user);



// function Calculator(){
//     this.read = function(){
//         this.a = +prompt("a?")
//         this.b = +prompt("b?")
//     }
//     this.sum = function(){
//         return this.a+this.b
//     }
//     this.mul = function(){
//         return this.a*this.b
//     }
// }

// let calculator = new Calculator()
// calculator.read()
// alert("sum" + calculator.sum())
// alert("mul" + calculator.mul())


// function Accumulator(startingValue) {
//     this.value = startingValue
//     this.read = function(){
//         this.value += +prompt("value?")
//     }
// }

// let accumulator = new Accumulator(1)
// accumulator.read()
// accumulator.read()
// alert(accumulator.value)


// let user = { 
//     name: "ali"
//   };
//   let id = Symbol("id");
//   user[id] = 1;
//   alert( user[id] );