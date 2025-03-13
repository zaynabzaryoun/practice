// const firstBtn = document.querySelector(".first-btn") 
// const firstAnswer = document.querySelector(".first-answer")

// const secondBtn = document.querySelector(".second-btn") 
// const secondAnswer = document.querySelector(".second-answer")

// const thirdBtn = document.querySelector(".third-btn") 
// const thirdAnswer = document.querySelector(".third-answer")

// const plus1Div = document.querySelector(".plus1-div")
// const plus2Div = document.querySelector(".plus2-div")
// const plus3Div = document.querySelector(".plus3-div")

// const minus1Div = document.querySelector(".minus1-div")
// const minus2Div = document.querySelector(".minus2-div")
// const minus3Div = document.querySelector(".minus3-div")

// const plusDiv = document.querySelectorAll(".plus-div")
// const minusDiv = document.querySelectorAll(".minus-div")

// firstBtn.addEventListener("click", () => {
//     firstAnswer.classList.toggle("hidden")
//     secondAnswer.classList.add("hidden")
//     thirdAnswer.classList.add("hidden")
    
//     plus1Div.classList.toggle("hidden")
//     minus1Div.classList.toggle("hidden")

//     minus2Div.classList.add("hidden")
//     minus3Div.classList.add("hidden")
//     plus2Div.classList.remove("hidden")
//     plus3Div.classList.remove("hidden")

// })
// secondBtn.addEventListener("click", () => {
//     secondAnswer.classList.toggle("hidden")
//     firstAnswer.classList.add("hidden")
//     thirdAnswer.classList.add("hidden")

//     plus2Div.classList.toggle("hidden")
//     minus2Div.classList.toggle("hidden")

//     minus1Div.classList.add("hidden")
//     minus3Div.classList.add("hidden")
//     plus1Div.classList.remove("hidden")
//     plus3Div.classList.remove("hidden")
// })
// thirdBtn.addEventListener("click", () => {
//     thirdAnswer.classList.toggle("hidden")
//     firstAnswer.classList.add("hidden")
//     secondAnswer.classList.add("hidden")

//     plus3Div.classList.toggle("hidden")
//     minus3Div.classList.toggle("hidden")

//     minus2Div.classList.add("hidden")
//     minus1Div.classList.add("hidden")
//     plus2Div.classList.remove("hidden")
//     plus1Div.classList.remove("hidden")
// })


// /////////////////////////////////////////////////////////////////////////////////////

const btns = document.querySelectorAll("button");
const answers = document.querySelectorAll(".answer");

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        
        // answers[i].classList.toggle("hidden")

        btn.querySelector(".plus-div").classList.toggle("hidden")
        btn.querySelector(".minus-div").classList.toggle("hidden")
        
        answers[i].classList.toggle("hidden")

        answers.forEach((otherAnswer, otherI) => {
            if (otherI !== i) {
                otherAnswer.classList.add("hidden");
                btns[otherI].querySelector(".plus-div").classList.remove("hidden")
                btns[otherI].querySelector(".minus-div").classList.add("hidden")
            }
        })
    })
})