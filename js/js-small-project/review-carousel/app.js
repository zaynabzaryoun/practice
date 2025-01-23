const data = [
  {
    src: "https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg",
    name: "Susan Halls",
    position: "Back-end Developer",
    review:
      "Susan, a 30-year-old web developer, demonstrates exceptional expertise in front-end technologies. Her creativity, problem-solving skills, and dedication ensure flawless, user-friendly designs, making her an invaluable asset to any development team.",
  },
  {
    src: "https://www.corporatephotographerslondon.com/wp-content/uploads/2021/06/non-smiling-LinkedIn-profile-photo.jpg",
    name: "Nick Smith",
    position: "Andriod Developer",
    review:
      "Nick, an Android developer, excels in crafting efficient, user-centric mobile applications. His expertise in Java, Kotlin, and modern frameworks, combined with problem-solving skills, ensures seamless performance and top-notch app functionality.",
  },
  {
    src: "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg",
    name: "Sara Orella",
    position: "Front-end Developer",
    review:
      "Sara, a skilled frontend developer, delivers visually stunning, responsive web designs. Her expertise in HTML, CSS, and JavaScript, coupled with a keen eye for detail, ensures engaging and user-friendly interfaces.",
  },
  {
    src: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    name: "Sam Marinos",
    position: "Front-end Developer",
    review:
      "Sam, a talented frontend developer, excels in creating responsive, visually appealing websites. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, he brings innovative ideas to life. His strong problem-solving skills and commitment to quality make him a valuable team asset.",
  },
];

const img = document.querySelector("img");
const nameEle = document.querySelector("h5");
const postion = document.querySelector("h6");
const review = document.querySelector("p");
const btnLeft = document.querySelector(".fa-less-than");
const btnRight = document.querySelector(".fa-greater-than");
const btnSurprise = document.querySelector(".surprise"); 

let carouselPage = 0;

function show(page) {
  img.src = data[page].src;
  nameEle.textContent = data[page].name;
  postion.textContent = data[page].position;
  review.textContent = data[page].review;
}

window.addEventListener("DOMContentLoaded", show(carouselPage));

const GoNext = () => {
    carouselPage++; 
    if (carouselPage >= 4) {
        carouselPage = 0
        show(carouselPage)
    }
    show(carouselPage);
}

const goPrevious = () => {
    carouselPage--
    if (carouselPage <= -1) {
        carouselPage = 3
        show(carouselPage)
    }
  show(carouselPage)  
}

const doSurprise = () => {
    const randomPage = Math.floor(Math.random() * 4)
    show(randomPage)
}

btnRight.addEventListener("click", GoNext);
btnLeft.addEventListener("click", goPrevious);
btnSurprise.addEventListener("click", doSurprise)

