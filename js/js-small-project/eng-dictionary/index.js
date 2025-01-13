const input = document.querySelector("input")
const btn = document.querySelector("button")
const wordEle = document.querySelector(".word")
const soundIcon = document.querySelector(".fa-volume-high")
const notSoundIcon = document.querySelector(".fa-volume-xmark")
const phoneticEle = document.querySelector(".phonetic")
const definitionDiv = document.querySelector(".definition")  


let searchedWord = ""
const sound = new Audio("")



// sound.play()


btn.addEventListener("click", getTranslation)
console.log(input.value);

input.addEventListener("keyup", (e) => {
    searchedWord = e.target.value
    console.log(searchedWord);
    
})


async function getTranslation() {
    try {
        const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`);
        if (!response.ok) {
            console.log(response.statusText);
        }
        const data = await response.json();
        
        wordEle.textContent = data[0].word
        sound.src = data[0].phonetics[1].audio
        console.log("gg", sound.src.includes("mp3"));
        console.log(sound.src);
        
        if (!sound.src.includes("mp3") && notSoundIcon.classList.contains("hidden")) {
            soundIcon.classList.toggle("hidden")
            notSoundIcon.classList.toggle("hidden")
            console.log("sound", soundIcon.classList);
            console.log("noutsound", notSoundIcon.classList);   
        } else if(sound.src.includes("mp3") && soundIcon.classList.contains("hidden")){
            soundIcon.classList.toggle("hidden")
            notSoundIcon.classList.toggle("hidden")
        }
        phoneticEle.textContent = data[0].phonetics[1].text
        // definitionEle.textContent = data[0].meanings[0].definitions[0].definition
        console.log(data[0].meanings[0].definitions);
        data[0].meanings[0].definitions.map(definition => {
            const p = document.createElement("p")
            p.textContent = definition.definition
            definitionDiv.appendChild(p)
        })
        
        console.log(data[0]);
        
        
    } catch (err) {
        console.log("Newtwork Error");
        
    }
}

getTranslation()
soundIcon.addEventListener("click", () => {
    sound.play()
    console.log("play");
    
})
