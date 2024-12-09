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



/*************************************************- 2 -**********************************************************************/

//2- Write a function that takes an array of numbers and returns a new array containing only the even numbers from the input array.

// function squareNumbers(arr) {
//     const newArr =  []
//     for (let n of arr) {
//         if (typeof n !== "number") {
//             continue
//         }
//         newArr.push(n**2)
//     }
//     return newArr
// }

// console.log(squareNumbers([1, "g", 3, 4]));
// console.log(squareNumbers([-1, -2, 0, 2]));

/****************************************************- 3 -***************************************************************/
//3- Write a function that takes an array of strings and groups the anagrams together. An anagram is a word that can be formed by rearranging the letters of another. The function should return an array of arrays, where each inner array contains words that are anagrams of each other.


// function groupAnagrams(words) {
//     const obj = {}
//     for (let word of words) {
//         let sortedWord = word.split('').sort().join('');
//         if (!obj.hasOwnProperty(sortedWord)) {
//             obj[sortedWord] = [];
//         }
//         console.log("word",word);
//         console.log("sorted",sortedWord);

//         obj[sortedWord].push(word);
//     }
//     return obj
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/***************************************************- 4 -********************************************************/
//4- Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.


//solution 1:
// function sumOfEvens(numbers){
//     let sum = 0;
//     for (let num of numbers) {
//         if (num %2===0) {
//             sum+=num
//         }
//     }
//     return sum
// }
        
// solution 2:
// function sumOfEven(arr) {
//     return arr.reduce((acc, cur) => {
//         if (!(cur % 2)) {
//           return acc+cur
//         }
//         return acc
//     }, 0)
// }

// console.log(sumOfEven([1, 2, 3, 4, 5]));
            
/*****************************************  5 ******************************************/
//5 -Write a function that takes a string and returns the number of vowels it contains.

// function countVowels(str) {
//     count = 0
//     str = str.toLowerCase()
//     for (let s of str) {
//         switch (s) {
//             case "o":
//                 count++
//                 break;
//             case "a":
//                 count++
//                 break
//             case "e":
//                 count++
//                 break
//             case "i":
//                 count++
//                 break
//             case "u":
//                 count++
//                 break
//         }

//     }
//     return count
// }

// console.log(countVowels("sky"))

/******************************************* 6 *********************************/
//6- Write a function that takes a string and returns an array of unique words in the order that they first appear in the sentence. Words should be considered case-insensitive, and punctuation should be ignored.

// const splited = "hello its rainning".split(" ")
// console.log(splited);

// function uniqueWords(sentence) {
//     sentence = sentence.toLowerCase().replace(/[.,!;?]/g, "")
//     const splited = sentence.split(" ")
//     const newArr =[]
//     splited.forEach((e, index, array) => {
//         if (!newArr.includes(e)) {
            
//             newArr.push(e)
//         }

//     })
//     return newArr
// }

// console.log(uniqueWords("This is a test. This, is only a test."));

//********************************************** 7 **************************************************/
//7- Write a function  that takes a string and returns an object. The object should contain each unique character as a key and the number of times it appears in the string as the value. The count should be case-insensitive (treat 'A' and 'a' as the same character).

// function countCharacterOccurrences(str) {
//     str= str.toLowerCase()
//     const obj = {}
//     for (let s of str) {
        
//         if (!obj.hasOwnProperty(s)) {
//             obj[s] = 1;
//         } else{

//             obj[s]+=1
//         }
//     }
    
    
//     return obj;
// }

// console.log(countCharacterOccurrences("Test! Test?"));

// countCharacterOccurrences("Hello World!");
// countCharacterOccurrences("JavaScript is fun.");
// countCharacterOccurrences("Test! Test?");
// countCharacterOccurrences("123!!!");

/*************************************** - 8 -*************************************/
//Write a function takes a string and returns an array of all the unique words that contain either the letter "f" or "g". The search should be case-insensitive, and punctuation should be ignored.

// function findMatches(str) {
//     str = str.toLowerCase().replace(/[!,.,?]/g, "")
//     str = str.split(" ")
//     newArr = [];
//     for (let s of str){
//         if (!newArr.includes(s) && (s.includes("f") || s.includes("g")) ) {
//             newArr.push(s)
//         }
//     }
//     return newArr
// }

// console.log(findMatches("Sky is clear."));


                                                                // Output: ["fantastic", "frogs", "far"]
// findMatches("Good game, great goal!");                    // Output: ["good", "game", "great", "goal"]
// findMatches("Falling leaves in the garden.");             // Output: ["falling", "garden"]
// findMatches("Sky is clear.");                              // Output: []

//********************************************* -9- ******************************************************/
// 9- Write a function called  that takes a string containing multiple lines of text and extracts all valid email addresses. The function should return an array of unique email addresses, ensuring the extraction is case-insensitive. An email address is considered valid if it follows the format: local_part@domain_name, where:

// function extractEmails(text) {
//     const re = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g
//     return text.match(re)
// }

// console.log(extractEmails("Hello from test.email123@my-site.com and sales@some-company.net! For more info, email me at: info123@site.com."));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const nums = [1, 3, 2, 7];
// const filtered = nums.some(e => e > 2)

// console.log(filtered);

// const numbers = [1, 2, 3];
// let total = numbers.reduce((acc, cur) => acc + 6)
// console.log(total);

//****************************************************- 10 -******************************************************/
//You are tasked with analyzing a dataset of student scores to identify students who passed a specific subject and calculate their overall scores. Write a function called processStudents that meets the following requirements:

// The function accepts two arguments: 1-An array of student objects, 2-A subject name (subject string).
// The function should:
// Find students who scored 50 or higher in the given subject.
// Calculate the total score across all subjects for each of those students.
// Return a new array of objects for the passing students, where each object has the following format:
// {
//     name: string,      // The student's name
//     totalScore: number // Their total score across all subjects
//   }
// If no student passes, the function should return an empty array.
// Assume each student has the same set of subjects in their scores object.
  

// const students = [
//     { name: "Alice", scores: { math: 80, english: 45, science: 60 } },
//     { name: "Bob", scores: { math: 30, english: 50, science: 70 } },
//     { name: "Charlie", scores: { math: 90, english: 85, science: 95 } },
//     { name: "Diana", scores: { math: 40, english: 35, science: 45 } },
//   ];
//   const subject = "math";
  // expected output:   [
  //             { name: "Alice", totalScore: 185 },
  //             { name: "Charlie", totalScore: 270 }
  //           ];
  
//answer:
// function processStudents(arrOfStudents, subjectName) {
//     const passedStudend = arrOfStudents.filter(student => student.scores[subjectName] >= 50)
//     const passedStudendWithTotalScore = passedStudend.map(s => {
//         s["totalScore"] = s.scores.math + s.scores.english + s.scores.science
//         delete s.scores
//         return s;
//     })
//     return passedStudendWithTotalScore
// }
// console.log(processStudents(students, subject));


/************************************************- 11 -************************************************************/

//Counting Occurrences
// Output: { apple: 3, banana: 2, orange: 1 }
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', "banana"];
// const count = fruits.reduce((acc, cur) => {
//     if (acc[cur]) {
//         acc[cur]+=1
//     } else {
//         acc[cur] = 1
//     }
//     return acc
  
// } ,{})
// console.log(count);


/************************************************- 12 -************************************************************/
// let globalVar = "global";

// function outerFunction(param) {
//   let outerVar = "outer";

//   function innerFunction() {
//     let innerVar = "inner";

//     console.log("Inside innerFunction:");
//     console.log("globalVar:", globalVar); // (1)
//     console.log("outerVar:", outerVar);   // (2)
//     console.log("param:", param);         // (3)
//     console.log("innerVar:", innerVar);   // (4)
//   }
  
//   if (true) {
//       let blockVar = "block";
//       var functionVar = "function";
//     }
    
//     console.log("Inside outerFunction:");
//     console.log("blockVar:", typeof blockVar);   // (5)
//     console.log("functionVar:", typeof functionVar); // (6)
    
//     return innerFunction;
// }

// let testFunction = outerFunction("parameter");
// testFunction();
//answer:
//(1) "global"
//(2) "outer"
//(3) "parameter"
//(4) "inner"
//(5) undefined
//(6) string

// console.log("Outside functions:");
// console.log("outerVar:", typeof outerVar);   // (7)
// console.log("functionVar:", typeof functionVar); // (8)

//(7) unefined
//(8) function


//##global scope, when variable is  defined outside of any block. when can access this variable(of any kind) from anywhere

//##block scope, when variable id defined inside of { } of if, for, ... .
//const and let if are block scope can not be accessed from outside.

//##function scope, varaible define inside of { } of functin. you can access any kind of variable(even var) from outside

//##var is either functiobn scope oe gobal scope. never block scope. when you declare var outside of any function it is global scope and can be accessed from anywhere. if var is declare inside of a function or inside of a block which this block is inside of function it is function scope, and you cannot accessed outside of function.
//so: If you declare a var inside a block (like an if, for, or while), it ignores the block and acts as if it were declared at the top of the nearest function or global scope.

/************************************************- 13 -************************************************************/
// 13-part 1:
// Access and log the city value from the address.
// Add a new property profession with the value "Front-End Developer".
// Update the age property to 26.
// Access and log the second hobby in the hobbies array.

// const person = {
//     name: "Zaynab",
//     age: 25,
//     address: {
//       city: "Hamedan",
//       postalCode: 65178,
//     },
//     hobbies: ["reading", "coding", "gym"],
// };
// console.log(person.address.city);
// console.log(person["address"]["city"]);
// person.profession = "Front-End Developer"
// person["profession"] = "front-end developer"
// person["age"] = 26
// console.log(person.hobbies[1]);

//13-part 2:
// Access the first-name property dynamically using a variable.
// Add a new property salary dynamically with the value 5000.
// Delete the job property from the object.

// const dynamicObject = {
//     "first-name": "Ali",
//     "last-name": "Rezaei",
//     job: "Engineer",
//   };

// console.log(dynamicObject["first-name"]);
// let key = "first-name"
// console.log(dynamicObject[key]);

// let newKey = "salary"
// dynamicObject[newKey] = 5000
// console.log(dynamicObject);

// delete dynamicObject.job;
// console.log(dynamicObject);

//13-part 3:
// const products = [
//     { id: 1, name: "Laptop", price: 1500 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Tablet", price: 600 },
//   ];

// Increase the price of all products by 10%.
// Add a new product to the array: { id: 4, name: "Monitor", price: 300 }.
// Find the product with the name "Phone" and log its details.

// for (let product of products) {
//     console.log(product);
//     product.price = 1.1 * product.price
// }
// console.log(products);

// products.push({ id: 4, name: "Monitor", price: 300 })

// const a = products.find(e => e.name === "Phone")
// console.log(a);

//13-part 4:
// const student = {
//     name: "Sara",
//     grade: 12,
//     subjects: {
//       math: 90,
//       physics: 85,
//       chemistry: 88,
//     },
//   };
// Iterate over the subjects object using a for...in loop and log the subject name and its corresponding grade.
// Calculate and log the average grade of all subjects.

// let subjects = student.subjects
// let sum = 0
// for (let subject in subjects) {
//     console.log(subject, "-", subjects[subject]);
//     sum += subjects[subject]
// }
// console.log(sum/3);

// const grades = Object.values(student.subjects)
// const sum = grades.reduce((acc, cur) => acc + cur)
// const average = sum / grades.length
// console.log(average);

//13-part 5:
// const company = {
//     name: "TechCorp",
//     employees: [
//       { name: "Ali", role: "Manager", salary: 8000 },
//       { name: "Reza", role: "Developer", salary: 6000 },
//       { name: "Sara", role: "Designer", salary: 5500 },
//     ],
//   };
//   Log the role of the second employee.
//   Calculate the total salary of all employees.
//   Add a new employee: { name: "Mina", role: "Intern", salary: 3000 }.

// console.log(company.employees[1].role);
// console.log(Object.values(company)[1][1].role);

// const employees = company.employees
// let sum = 0
// let a = employees.map(e => {
//     return sum += e.salary
// })
// console.log(sum);

// company.employees.push({ name: "Mina", role: "Intern", salary: 3000 })
// console.log(company);

/************************************************- 14 -************************************************************/
//14-part 1:
//What will be the output of the following code snippet, and why?
// const original = [1, 2, 3];
// const nested = [4, 5, original]; 
// const flatCopy = [...nested]; 
// flatCopy[2][0] = 99; 


// console.log(nested[2][0]); // ?
// console.log(flatCopy[2][0]); // ?
// console.log(flatCopy); // ?
// console.log(nested); // ?

//answer:
//the scpread operator(...) only copies the top level of an array or obj. if there are nested arrays or obj insidesc thoes are not copied. they are shared between the origial and the copy.


//14- part2:
// const obj1 = { a: 10, b: 20 };
// const obj2 = { b: 30, c: 40 };
// const obj3 = { ...obj1, ...obj2, d: 50 };
// //{a: 10, b:30, c:40, d:50}
// const modify = ({ b, ...rest }) => {
//   rest.a += b; // 10+30 => a =40
//   return { ...rest, b: b * 2 }; // {a:40, c:50, d:50}  b: 60
// };

// const result = modify(obj3);

// console.log(result.a); // ?
// console.log(result.b); // ?
// console.log(result.c); // ?
// console.log(result.d); // ?
// console.log(obj3.b);   // ?


//****************************************************- 15 -*********************************************************8 */
// function processValues(a, b, ...rest) {
//   const sum = rest.reduce((acc, val) => acc + val, 0);
//   const filteredRest = rest.filter(e => typeof(e) === "number" && !isNaN(e)) || 0
//   console.log(filteredRest);
  
//   const maxOfRest = filteredRest.length > 0 ? Math.max(...filteredRest) : 0;
//   const [x, y = 10, ...remaining] = rest;
  
//   return {
//     max: maxOfRest,
//     product: a * b * (x || 1),
//     average: sum / (rest.length || 1),
//     remaining,
//   };
// }

// const result = processValues(2, 3, 5, undefined, 15, 20, 25);


// console.log(result.product); // ?
// console.log(result.average); // ?
// console.log(result.remaining); // ?

//answer
// (x || 1): These expressions make use of the logical OR (||) operator to provide default values when the first operand is a "falsy" value. The || operator evaluates the left-hand side (LHS) first. If the LHS is truthy, it returns that value. If the LHS is falsy, it evaluates and returns the right-hand side (RHS).

//part2: Rewrite the function to also return the maximum value from rest, defaulting to 0 if rest is empty.

// function processValues(a, b, ...rest) {
//   const sum = rest.reduce((acc, val) => acc + val, 0); 
//   const filteredRest = rest.filter(e => typeof(e) === "number" && !isNaN(e)) || 0
//   console.log(filteredRest);

//   const maxOfRest = filteredRest.length > 0 ? Math.max(...filteredRest) : 0; 
//   const [x, y = 10, ...remaining] = rest; 
  
//   return {
//     max: maxOfRest,
//     product: a * b * (x || 1),
//     average: sum / (rest.length || 1),
//     remaining,
//   };
// }

// const result2 = processValues(2, 3, 5, undefined, 15, 20, 25);
// console.log(result2.max);


//////////////////////////////////////////////////////- 16 -//////////////////////////////////////////////////////////////

// You have an array of objects representing students. Each student object has the following properties: name (a string) and score (a number). Your task is to create a new array that contains the names of students who have scored above 50, and then return that array in uppercase letters.


const students = [  
  { name: "Alice", score: 45 },  
  { name: "Bob", score: 80 },  
  { name: "Charlie", score: 55 },  
  { name: "David", score: 30 },  
  { name: "Eva", score: 65 }  
];

const arr = []
const studentsName = students.map(student => {
  if (student.score > 50) {
    console.log(student.name.toUpperCase());
    return student.name.toUpperCase();
  } else {
    return undefined
  }

}).filter(name => name!==undefined)

// console.log(studentsName);


const names = students.filter((student) => {
 return student.score > 50
}).map(e=>e.name.toUpperCase())

console.log(names);


//////////////////////////////////////////////////////- 17 -//////////////////////////////////////////////////////////////
// event
//when you click a button show a message explaining which button is been clicked.
//create a div with ele class for html.
const el = document.querySelector(".ele")
el.addEventListener("contextmenu", (e) => {
  e.preventDefault()
})

let message = document.createElement("p")
document.body.appendChild(message)

el.addEventListener("mouseup", (e) => {
  // console.log(e.button);
  switch (e.button) {
      case 0: 
         message.textContent = "left button"
          break;
      case 1:
          message.textContent = "scroll wheel"
          break
      case 2:
          message.textContent = "right button"
          break 
      default:
          console.log("unknown");
          break;
  }
})


//////////////////////////////////////////////////////- 18 -//////////////////////////////////////////////////////////////
// event
//show position of mouse (x, y) on your screen
// pay attention to the difference between screenX and clientX.
//screenX: shows horizonal postion of mouse according to screen of device. left top of screen is x,y=[0, 0]
//clientX: shows horizonal position of mouse according to your borwser's viewport. left top of browser is x,y=[0,0]

//answer:
// const p = document.createElement("p")
// document.body.appendChild(p)
// window.addEventListener("mousemove", (e) => {
//     p.textContent = `[screenX: ${e.screenX}, screenY: ${e.screenY}] - [clientX: ${e.clientX}, clientY: ${e.clientY}]`
    
// })



  
