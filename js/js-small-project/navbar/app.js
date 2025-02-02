const pages = document.querySelector(".pages")
const bars = document.querySelector(".bar-container")

console.log(bars);


function handleBar() {
    pages.classList.toggle("hidden")
}


window.addEventListener("DOMContentLoaded", showBarsAndPages)

function showBarsAndPages() {
    if (window.innerWidth < 500) {
        bars.classList.remove("hidden")
        pages.classList.add("hidden")
    } else {
        bars.classList.add("hidden")
        pages.classList.remove("hidden")
    }
}


bars.addEventListener("click", handleBar)

window.addEventListener("resize", () => {
    if (window.innerWidth < 500) {
        bars.classList.remove("hidden")
        pages.classList.add("hidden")
        console.log("jjj");
        
    } else {
        bars.classList.add("hidden")
        pages.classList.remove("hidden")

    }
})

