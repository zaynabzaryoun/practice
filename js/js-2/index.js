
// const firstName = "maryam";
// const iterator = firstName[Symbol.iterator]();
// // const iterator = firstName[Symbol.iterator];
// console.log(iterator)

let scores = [10,20,30];
scores.message = 'Hi';


// console.log(scores);

for (let score in scores) {
//   console.log(score); 
}

for (let score of scores) {
//   console.log(score);
}

// let ranks = ['A', 'B', 'C'];
// ranks.forEach(function(e, index, arr) {
//     console.log(e, index, arr);
// });

// const numbers = [1, 2, 3];
// numbers.forEach(function (e) {
//     console.log(e**2);
    
// })

// console.log(numbers);

const numbers = [1, 2, 3];
// numbers.forEach(function (e, index, array) {
//     array[index] = e**2
    
// })
// console.log(numbers);

// const newNumbers = numbers.forEach(function (e) {
//     return e*3
// })
// console.log(newNumbers);
// console.log(numbers);

// const newNumbers = numbers.map(function (e) {
//     return e*3
// })
// console.log(newNumbers);
// console.log(numbers);

// const sayHello = (name) => {
//     return `hello ${name}`
// }


// const sayHello = name => `hello ${name}`
// console.log(sayHello("lila"));

// setTimeout(function () {
//     console.log("hello");
    
// }, 4000)

// setInterval(function () {
//     console.log("hellooo");
    
// },4000)

// setInterval(()=> console.log("gg"), 4000)

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

// console.log(typeof 3);

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


function groupAnagrams(words) {
    const obj = {}
    for (let word of words) {
        let sortedWord = word.split('').sort().join('');
        if (!obj.hasOwnProperty(sortedWord)) {
            obj[sortedWord] = [];
        }
        console.log("word",word);
        console.log("sorted",sortedWord);
        
        obj[sortedWord].push(word);
    }
    return obj
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));




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


function countVowels(str) {
    count = 0
    str = str.toLowerCase()
    for (let s of str) {
        switch (s) {
            case "o":
                count++
                break;
            case "a":
                count++
                break
            case "e":
                count++
                break
            case "i":
                count++
                break
            case "u":
                count++
                break    
        }
        
    }
    return count
}

countVowels("hello"); 