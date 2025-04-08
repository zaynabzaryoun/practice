const getPoem = async () => {
  try {
    const response = await fetch(
      "https://api.ganjoor.net/api/ganjoor/poem/45338"
    );
    if (!response.ok) {
      throw new Error(`http error  ${response.statusText}`);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error(`fetch failed: ${error.message}`);
  }
};




const button = document.querySelector(".btn")  
const poemElement = document.querySelector(".poem-p")  

button.addEventListener("click", () => {
    getPoem()
        .then(poem => {
            console.log(poem.plainText)
            poemElement.textContent = poem.plainText
    })
    .catch(err => console.log(err.message))
    
})

