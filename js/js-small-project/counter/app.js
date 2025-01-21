const dec = document.querySelector(".dec-btn");
const rst = document.querySelector(".rst-btn");
const inc = document.querySelector(".inc-btn");
const p = document.querySelector("p");

const setColor = () => {
  if (parseInt(p.textContent) > 0) {
    p.style.color = "green";
  } else if (parseInt(p.textContent) === 0) {
    p.style.color = "blue";
  } else {
    p.style.color = "red";
  }
};

const decrease = () => {
  p.textContent = parseInt(p.textContent) - 1;
  setColor();
};

const reset = () => {
  p.textContent = 0;
  setColor();
};

const increase = () => {
  p.textContent = parseInt(p.textContent) + 1;
  setColor();
};

dec.addEventListener("click", decrease);
rst.addEventListener("click", reset);
inc.addEventListener("click", increase);


