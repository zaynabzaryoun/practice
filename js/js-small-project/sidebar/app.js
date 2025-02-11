const barIcon = document.querySelector(".bar-container")
const nav = document.querySelector("nav")
const closeIcon = document.querySelector(".fa-times")


function displayBar() {
    if (window.innerWidth > 500) {
        barIcon.classList.add("hidden")
        nav.classList.remove("hidden")
    } else {
        barIcon.classList.remove("hidden")
        nav.classList.add("hidden")
    }
} 

function handleBarClick() {
    nav.classList.toggle("hidden")
    barIcon.classList.toggle("hidden")
}

function handleCloseClick() {
    nav.classList.add("hidden")
    barIcon.classList.remove("hidden")
}

window.addEventListener("DOMContentLoaded", displayBar)
window.addEventListener("resize", displayBar)
barIcon.addEventListener("click", handleBarClick)
closeIcon.addEventListener("click", handleCloseClick)