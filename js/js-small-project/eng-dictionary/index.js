const input = document.querySelector("input")
const btn = document.querySelector("button")
const wordEle = document.querySelector(".word")
const soundIcon = document.querySelector(".fa-volume-high")
const notSoundIcon = document.querySelector(".fa-volume-xmark")
const phoneticEle = document.querySelector(".phonetic")
const definitionDiv = document.querySelector(".definition")  
const ukEle = document.querySelector(".uk") 
const usEle = document.querySelector(".us") 
const partOfSpeechEle = document.querySelector(".part-of-speech")


let searchedWord = ""
const ukSound = new Audio("")
const usSound = new Audio("")

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
        
        ukSound.src  = data[0].phonetics.find(e =>e.audio.includes("-uk")).audio 
        usSound.src = data[0].phonetics.find(e => e.audio.includes("-us")).audio 

        console.log(ukSound);
        console.log(usSound);
        
        

    
        
        phoneticEle.textContent = data[0].meanings

        phoneticEle.textContent = data[0].phonetics[1].text
    
        console.log(data[0].meanings[0].definitions);
        definitionDiv.innerHTML = ""
        data[0].meanings[0].definitions.map(definition => {
            const p = document.createElement("p")
            p.textContent = definition.definition
            definitionDiv.append(p)
        })
        
        console.log(data[0]);
        
        
    } catch (err) {
        console.log("Newtwork Error");
        
    }
}

getTranslation()
ukEle.addEventListener("click", () => {
    ukSound.play()
    console.log("play uk");
    
})
usEle.addEventListener("click", () => {
    usSound.play()
    console.log("play us");
    
})

