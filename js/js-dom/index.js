const button = document.getElementById("btn")
const output = document.getElementById("output")

// console.log(radios);

button.addEventListener("click", () => {
    let rates = document.getElementsByName("rate")
    rates.forEach(rate => {
        if (rate.checked) {
            output.innerText = rate.value
        }
    })
})