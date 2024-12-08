// const button = document.getElementById("btn")
// const output = document.getElementById("output")
// const radios = document.getElementsByName("rate")

// button.addEventListener("click", () => {
//     radios.forEach(radio => {
//         if (radio.checked) {
//             output.innerHTML = `you clicked ${radio.value}`
//         }
//     })
// })

// const h2s = document.getElementsByTagName("h2")
// const button = document.getElementById("btnCount")
// console.log(h2s);
// const h2sArray = Array.of(...h2s)
// console.log(h2sArray);

// button.addEventListener("click", () => {
//     alert(`number of h2 is: ${h2sArray.length}`)
// })

// const ul = document.getElementById("menu")
// const lis = ul.getElementsByClassName("item")
// console.log(lis);
// const lisArray = Array.of(...lis)
// const data = lisArray.map(item => item.textContent)
// console.log(data);

// const element = document.querySelectorAll("li")
// console.log(element);
// let prant = element.parentNode
// console.log(prant);

// const data = Array.of(...elements).map(e => e.textContent)
// console.log(data);

// let note = document.querySelector(".note");
// console.log(note);
// console.log(note.parentNode);

// let node = document.querySelector(".current")
// // let nextSibling = node.nextSibling
// let nextSiblingElment = node.nextElementSibling
// // console.log(nextSibling);
// console.log(nextSiblingElment);
// let previos = node.previousElementSibling

// while (previos) {
//     console.log(previos);
//     previos = previos.previousElementSibling

// }

// while (nextSiblingElment) {
//     console.log(nextSiblingElment);
//     // nextSiblingElment = nextSiblingElment.nextElementSibling
//     node = node.nextElementSibling
// }

// let content = document.getElementById("menu")
// let firstChile = content.firstChild
// console.log(firstChile);
// let children1 = content.childNodes
// console.log(children1);
// let children2 = content.children
// console.log(children2);

///////////////////////////////////////////////////////////////

// const div = document.createElement("div")
// // div.innerHTML = "<p>im a p inside a div</p>"
// const text = document.createTextNode("im a text node inside a div")
// div.appendChild(text)
// document.body.appendChild(div)
// div.id = "div-id"
// div.className = "div-class"
// const p = document.createElement("p")
// div.appendChild(p)
// p.innerText = "im a new p"

// const ul = document.createElement("ul")
// document.body.appendChild(ul)
// ul.id = "menu"
// ul.innerHTML = "<li>Home</li>"

// const li1 = document.createElement("li")
// const li2 = document.createElement("li")

// li1.textContent = "products"
// li2.textContent= "about us"

// ul.appendChild(li1)
// ul.appendChild(li2)

// function createMenuItem(text) {
//     let li = document.createElement("li")
//     ul.appendChild(li)
//     li.textContent = text
//     return li
// }

// // console.log(createMenuItem("tea"));

// createMenuItem("11")
// createMenuItem("22")
// createMenuItem("33")

// const firstList = document.querySelector("#first-list")
// const firstLi = firstList.firstElementChild;
// console.log(firstLi);
// const secondList = document.querySelector("#second-list")
// secondList.appendChild(firstLi)

// const div = document.querySelector("#note");
// // const content = div.textContent
// const content = div.innerText;
// console.log(content);

// const userInput = '<img src="ww" onerror="alert(`hacked`)">'

// document.body.innerHTML = userInput

// const p = document.querySelector("p")
// const h1 = document.createElement("h1")
// p.before(h1)
// h1.textContent= "hll"

// const ul = document.querySelector("ul")
// const firstLi = ul.firstElementChild

// const strings = ["home", "about us", "contact us"]
// const liArray = strings.map(s => {
//     const li = document.createElement("li")
//     // firstLi.before(li)
//     li.textContent = s
//     return li
// })
// console.log(liArray);

// firstLi.before(...liArray)

// const button = document.querySelector("button")
// button.before("hrloooo", "ghhhhh")
// button.after("bye", " after")
// console.log(typeof button);
// const p = document.createElement("p")
// p.textContent = "after tezt"
// button.after(p)
// const libs = ['React', 'Meteor', 'Polymer'];
// const arr = libs.map(lib => {
//     const li = document.createElement("li")
//     console.log(lib);
    
//     li.textContent = lib
//     return li
// })
// console.log(arr);

// button.after(...arr)
// element.inserAdjacentHTML(position, html)
//html: what you eant to add
//beforebegin, afterbegin, beforeend, afterend

// const p = document.querySelector("#demo")
// const h1 = document.createElement("h1")
// h1.textContent = "gg"
// p.insertAdjacentHTML("beforebegin", "<h1>before element</h1>")
// p.insertAdjacentHTML("afterbegin", "first child of element is text node")
// p.insertAdjacentHTML("beforeend", "<h5>last child of element</h5>")
// p.insertAdjacentHTML("afterend", "<h6>after the element</h6>")
// p.insertAdjacentHTML("afterbegin", h1)
// p.innerHTML = "<h1>HELLO</h1>"


const menu = document.querySelector("#menu")
// const newOne = document.createElement("li")
// newOne.textContent = "new"
// const firstChild = menu.firstElementChild
// console.log(firstChild);

// menu.replaceChild(newOne, firstChild)
// menu.removeChild(menu.lastElementChild)


// let langs = ['TypeScript', 'HTML', 'CSS'];
// const arr = langs.map(lang => {
//     const li = document.createElement("li")
//     li.textContent = lang
//     // menu.append(li)
//     return li
// })

// menu.append(...arr)

// const input = document.querySelector(".type")
// console.log(input.getAttribute("type"));
// console.log(input.type);

// const input = document.querySelector('input');

// //change the attribue:
// input.setAttribute("value", "bye")
// console.log(input.value);

// // Change the property
// input.value = "world"
// console.log(input.getAttribute("value"));


// const button = document.getElementById('myButton');
// console.log(button.getAttribute("disabled"));
// console.log(button.disabled);
// button.removeAttribute("disabled")
// console.log(button.disabled);

// console.log(typeof input.attributes);
// for (let attr of input.attributes) {
    //     console.log(`name: ${attr.name} and value: ${attr.value}`);
    
    // }
    
    // input.setAttribute("tabindex", 2)
    // console.log(input.getAttribute("tabindex"));
    // console.log(input.tabIndex);
    // input.tabIndex = 2
    // console.log(input.getAttribute("tabIndex"));
    
    // console.log(typeof input.getAttribute("style"));
    // console.log(input.style);
    // console.dir(input.style);
    // console.log(input.style);
    
    // const div = document.querySelector(".parent")
    // console.log(div.attributes);
    
    // input.removeAttribute("disabled")
    // console.log(input.attributes);
    // console.log(input.hasAttribute("disabled"));
    
    
    //////////////////////////////////////////////////
    // element.style  cssstyledeclaration
// const input = document.querySelector("input")
// console.log(input.style);
// input.style.color = "green"
// input.style["border-bottom-color"] = "yellow"
// // input.style.cssText = "color: blue; background-color: red"
// input.setAttribute("style", "color: 'blue'; background-color: purple")


// let message = document.querySelector('.message');
// let style = getComputedStyle(message)
// console.log(style.color);


// let menuu = document.querySelector('#menu');
// // console.log(menuu.className);
// // menuu.className += " new"
// // console.log(menuu.className);
// menuu.classList.add("new")
// console.log(menuu.className);
// menuu.classList.remove("new")
// // console.log(menuu.className);
// // console.log(menuu.classList);
// menuu.classList.replace("new", "neweeet")
// console.log(menuu.classList);
// console.log(menuu.classList.contains("vertical"));
// //menuu.classList.toggle()

// let box = document.querySelector('.box');
// let width = box.offsetWidth;
// let height = box.offsetHeight;
// console.log({ width, height });

// const domRect = box.getBoundingClientRect();
// console.log(domRect);

// let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
// console.log(width);
// console.log(height);

/////////////////////////////////////////////////////////////////
// const btn = document.querySelector("#btn")

// const handleClick = () => {
//     alert(`helllo`)
// }
// btn.addEventListener("click", handleClick)


// btn.addEventListener("click", function () {
//     alert("heloo")
// })

// btn.addEventListener("click", (event) => {
//     console.log(event.target);
    
// })


// btn.onclick = function (e) {
//     alert(e)
//     console.log(this.id);
    
// }

// btn.onclick=null

// function handleClick() {
//     console.log("this", this);
    
//     alert("clicked")
    
// }

// btn.addEventListener("click",handleClick)

// btn.addEventListener("click", (event) => {
//     alert(event.type)
// })
// btn.removeEventListener("click", () => {
//     console.log("this", this);
    
//     alert("clicked")
// })
// btn.removeEventListener("click", handleClick)
    
    

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn")
    console.log(btn);
    
    console.log("the dom and tree are fully loaded");
    
})

window.addEventListener("load", () => {
    console.log("the page is fully loaded");
    
})

document.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.raturnValue =""
    alert("are you sure you want to leave the page?")
    
})

document.addEventListener("unload", () => {
    console.log("unload");
    
})







