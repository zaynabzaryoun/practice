const barIcon = document.querySelector(".fa-bars")

const list = document.querySelector(".list")

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