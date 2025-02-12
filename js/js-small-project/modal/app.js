// tutorial:
// https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/

const openBtn = document.querySelector(".open")
const modal = document.querySelector(".modal")
const background = document.querySelector(".background") 
const closeBtn = document.querySelector(".fa-times")


function openModalAndBackground() {
    modal.classList.remove("hidden")
    background.classList.remove("hidden")
}

function closeModalAndBackground() {
    modal.classList.add("hidden")
    background.classList.add("hidden")
}

openBtn.addEventListener("click", openModalAndBackground)
closeBtn.addEventListener("click", closeModalAndBackground)
background.addEventListener("click", closeModalAndBackground)
