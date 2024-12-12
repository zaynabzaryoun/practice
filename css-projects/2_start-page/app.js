const barIcon = document.querySelector(".fa-bars")

// function showBars() {
//      if (window.innerWidth < 450) {
//     barIcon.classList.remove("hidden")
// } else {
//     barIcon.classList.add("hidden")
//     // list.classList.add("hidden"); 
// }
// }

// showBars()

const list = document.querySelector(".list")

// window.addEventListener("resize", showBars)
// window.addEventListener("resize", showMenu)


// function showMenu() {
//     if (window.innerWidth < 450) {
//         list.classList.remove("hidden")
//     } else {
//         list.classList.add("hidden")
//     }
// }

// showMenu()
// barIcon.addEventListener("click", () => {
//     if (window.innerWidth < 450 && list.classList.contains("hidden")) {
//         list.classList.remove("hidden")
//     } else {
//         list.classList.add("hidden")
//     }
// })


function showBarAndList() {
    if (window.innerWidth < 450) {
        barIcon.classList.remove("hidden")
        list.classList.add("hidden")
    } else {
        barIcon.classList.add("hidden")  
        list.classList.add("hidden")
    }
}
showBarAndList()

barIcon.addEventListener("click", () => {
    list.classList.toggle("hidden")
})

window.addEventListener("resize", () => {
    if (window.innerWidth < 460) {
        barIcon.classList.remove("hidden")
    } else {
        barIcon.classList.add("hidden")
        list.classList.add("hidden")
    }
})