
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

let ranks = ['A', 'B', 'C'];
ranks.forEach(function(e, index, arr) {
    console.log(e, index, arr);
});

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

