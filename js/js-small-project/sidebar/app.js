const barIcon = document.querySelector(".bar-container")
const nav = document.querySelector("nav")


function displayBar() {
    if (window.innerWidth > 500) {
        barIcon.classList.add("hidden")
    } else {
        barIcon.classList.remove("hidden")
    }
} 

function handleBarClick() {
    nav.classList.toggle("hidden")
}

window.addEventListener("DOMContentLoaded", displayBar)
window.addEventListener("resize", displayBar)
barIcon.addEventListener("click", handleBarClick)