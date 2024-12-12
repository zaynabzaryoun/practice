const barIcon = document.querySelector(".fa-bars")
console.log(barIcon);

function showBars() {
     if (window.innerWidth < 450) {
    barIcon.classList.remove("hidden")
} else {
    barIcon.classList.add("hidden")
    // list.classList.add("hidden"); 
}
}

showBars()

const list = document.querySelector(".list")

window.addEventListener("resize", showBars)
window.addEventListener("resize", showMenu)


function showMenu() {
    if (window.innerWidth < 450) {
        list.classList.remove("hidden")
    } else {
        list.classList.add("hidden")
    }
}

// showMenu()
barIcon.addEventListener("click", () => {
    if (window.innerWidth < 450 && list.classList.contains("hidden")) {
        list.classList.remove("hidden")
    } else {
        list.classList.add("hidden")
    }
})
