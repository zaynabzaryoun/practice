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

/*******************************************************************/
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

/******************************************************************/
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

/***************************************** 4 ****************************************/
//4- Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.


// function sumOfEvens(numbers){
//     let sum = 0;
//     for (let num of numbers) {
//         if (num %2===0) {
//             sum+=num
//         }
//     }
//     return sum
// }

// console.log(sumOfEvens([1, 2, 3, 4, 5]));

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

function findMatches(str) {
    str = str.toLowerCase().replace(/[!,.,?]/g, "")
    str = str.split(" ")    
    newArr = [];
    for (let s of str){
        if (!newArr.includes(s) && (s.includes("f") || s.includes("g")) ) {
            newArr.push(s)
        }
    }
    return newArr
} 

console.log(findMatches("Sky is clear."));


                                                                // Output: ["fantastic", "frogs", "far"]
// findMatches("Good game, great goal!");                    // Output: ["good", "game", "great", "goal"]
// findMatches("Falling leaves in the garden.");             // Output: ["falling", "garden"]
// findMatches("Sky is clear.");                              // Output: []

//********************************* -9- ******************************/
// 9- Write a function called  that takes a string containing multiple lines of text and extracts all valid email addresses. The function should return an array of unique email addresses, ensuring the extraction is case-insensitive. An email address is considered valid if it follows the format: local_part@domain_name, where:

function extractEmails(text) {
    const re = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g
    return text.match(re)
}

console.log(extractEmails("Hello from test.email123@my-site.com and sales@some-company.net! For more info, email me at: info123@site.com."));
