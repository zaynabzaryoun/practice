const barIcon = document.querySelector(".fa-bars")
console.log(barIcon);

function showBars() {
     if (window.innerWidth < 450) {
    barIcon.classList.remove("hidden")
} else {
    barIcon.classList.add("hidden")
}
}

showBars()

window.addEventListener("resize", showBars)

barIcon.addEventListener("click", () => {
    
})
