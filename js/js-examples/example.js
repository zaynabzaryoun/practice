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

console.log(sumOfEven([1, 2, 3, 4, 5]));
            
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
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', "banana"];
const count = fruits.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur]+=1
    } else {
        acc[cur] = 1
    }
    return acc
  
} ,{})
console.log(count);

  