// Create a simple web page where hovering over a square element (<div class="hover-box"></div>) changes its color randomly. Additionally:

// Display the RGB Value:

// When the color changes, dynamically display the RGB value of the new color inside the box.
// Change Color Back:

// When the mouse leaves the box, change the color back to its original color (e.g., white).

const div = document.querySelector(".hover-box");

const parent = document.querySelector(".parent")

const msg = document.createElement("p")
parent.appendChild(msg)
msg.classList.add("msg");

const rightArrow = document.querySelector(".fa-arrow-right")
const downArrow = document.querySelector(".fa-arrow-down")

function showArrow() {
    if (window.innerWidth < 450) {
        rightArrow.classList.add("hidden")
        downArrow.classList.remove("hidden")
    } else {
        downArrow.classList.add("hidden") 
        rightArrow.classList.remove("hidden")
    }
}
showArrow()

div.addEventListener("mouseover", () => {
    let color = createColor();
    div.style.backgroundColor = color
    msg.textContent = `Color: ${color}` 
    msg.style.color = color
})

div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "rgb(255,255,255)"
    msg.style.color = "white"
})

window.addEventListener("resize", showArrow)


function createColor() {
    let randomColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return randomColor
}