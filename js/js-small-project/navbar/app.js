const bars = document.querySelector(".bar-container")
const pages = document.querySelector(".pages")
function display() {
    if (window.innerWidth < 500) {
        bars.classList.remove("hidden");
        pages.classList.add("hidden") 
    } else {
        bars.classList.add("hidden"); 
        pages.classList.remove("hidden")
    }

}
window.addEventListener("DOMContentLoaded", display)
window.addEventListener("resize", display)    

    const handleClick = () => {
        pages.classList.toggle("hidden")
    }

    bars.addEventListener("click", handleClick)