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
const uUk = document.querySelector(".u-uk");
const uUs = document.querySelector(".u-us");
const kUk = document.querySelector(".k-uk");
const kUs = document.querySelector(".k-us");

let searchedWord = "";
const ukSound = new Audio("");
const usSound = new Audio("");

btn.addEventListener("click", getTranslation);
console.log(input.value);

input.addEventListener("keyup", (e) => {
  searchedWord = e.target.value;
  console.log(searchedWord);
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
      console.log(data[0].meanings);
    
    if (!data|| data.length === 0) {
      wordEle.textContent = "Word Not Found!";
    }

    wordEle.textContent = data[0].word;

    console.log(data[0].phonetics.find((e) => e.audio.includes("-uk")).audio);

    ukSound.src = data[0].phonetics.find((e) => e.audio.includes("-uk")).audio;
    usSound.src = data[0].phonetics.find((e) => e.audio.includes("-us")).audio;
    console.log(ukSound.src);
    ukSound.src ? (uUk.style.color = "red") : (uUk.style.color = "blue");

    phoneticEle.textContent = data[0].phonetics[1].text;

    console.log(data[0].meanings[0].definitions[0].definition);
      data[0].meanings[0].definitions.map((definition) => {
    console.log(definition.definition);
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
  console.log("play uk");
});
usEle.addEventListener("click", () => {
  usSound.play();
  console.log("play us");
});

function clear() {
  wordEle.innerHTML = "";
  ukSound.src = "";
  usSound.src = "";
  phoneticEle.innerHTML = "";
  definitionDiv.innerHTML = "";
}
