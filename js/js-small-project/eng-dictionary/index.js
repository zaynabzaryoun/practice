const input = document.querySelector("input");
const btn = document.querySelector("button");
const wordEle = document.querySelector(".word");
const soundIcon = document.querySelector(".fa-volume-high");
const notSoundIcon = document.querySelector(".fa-volume-xmark");
const phoneticEle = document.querySelector(".phonetic");
const definitionDiv = document.querySelector(".definition");
const ukEle = document.querySelector(".uk");
const usEle = document.querySelector(".us");
const partOfSpeechEle = document.querySelector(".part-of-speech");

let searchedWord = "";
const ukSound = new Audio("");
const usSound = new Audio("");

btn.addEventListener("click", getTranslation);

input.addEventListener("keyup", (e) => {
  searchedWord = e.target.value;
});

async function getTranslation() {
  clear();
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
    );
    if (!response.ok) {
      console.log(response.statusText);
    }
      
    const data = await response.json();

    wordEle.textContent = data[0].word;
    
    ukSound.src = data[0].phonetics.find((e) => e.audio.includes("-uk")).audio;
    usSound.src = data[0].phonetics.find((e) => e.audio.includes("-us")).audio;

    phoneticEle.textContent = data[0].phonetics[1].text;

    data[0].meanings[0].definitions.map((definition) => {
      const p = document.createElement("p");
      p.textContent = definition.definition;
      definitionDiv.append(p);
    });

  } catch (err) {
    console.log("Newtwork Error");
  }
}

getTranslation();
ukEle.addEventListener("click", () => {
  ukSound.play();
});
usEle.addEventListener("click", () => {
  usSound.play();
});

function clear() {
  wordEle.innerHTML = "";
  ukSound.src = "";
  usSound.src = "";
  phoneticEle.innerHTML = "";
  definitionDiv.innerHTML = "";
}
