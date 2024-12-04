// const button = document.getElementById("btn")
// const output = document.getElementById("output")
// const radios = document.getElementsByName("rate")

// button.addEventListener("click", () => {
//     radios.forEach(radio => {
//         if (radio.checked) {
//             output.innerHTML = `you clicked ${radio.value}`
//         }
//     })
// })

// const h2s = document.getElementsByTagName("h2")
// const button = document.getElementById("btnCount")
// console.log(h2s);
// const h2sArray = Array.of(...h2s)
// console.log(h2sArray);

// button.addEventListener("click", () => {
//     alert(`number of h2 is: ${h2sArray.length}`)
// })

// const ul = document.getElementById("menu")
// const lis = ul.getElementsByClassName("item")
// console.log(lis);
// const lisArray = Array.of(...lis)
// const data = lisArray.map(item => item.textContent)
// console.log(data);



const elements = document.getElementsByClassName("secondary")
console.log(elements);

const data = Array.of(...elements).map(e => e.textContent)
console.log(data);


