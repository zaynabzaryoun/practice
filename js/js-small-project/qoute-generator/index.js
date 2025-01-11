const container = document.querySelector(".container")
const text = document.querySelector(".text")
const author = document.querySelector(".author")
const btn = document.querySelector(".btn")

async function getQoute() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random")
        if (!response.ok) {
            alert(`Error ${response.statusText}`)
        } else {
            const data = await response.json()
            console.log(data);
            text.textContent = data.quote
            author.textContent = data.author
            
        }
    } catch (err) {
        console.log("error: ", err);
    }
}

btn.addEventListener("click", getQoute)
// getQoute()

c