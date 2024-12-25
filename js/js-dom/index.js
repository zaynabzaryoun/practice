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
    
    

// document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.querySelector("#btn")
//     console.log(btn);
    
//     console.log("the dom and tree are fully loaded");
    
// })

// window.addEventListener("load", () => {
//     console.log("the page is fully loaded");
    
// })

// document.addEventListener("beforeunload", (event) => {
//     event.preventDefault();
//     event.raturnValue =""
//     alert("are you sure you want to leave the page?")
    
// })

// document.addEventListener("unload", () => {
//     console.log("unload");
    
// })

//mouse events
const el = document.querySelector(".ele")
// el.addEventListener("mousedown", ()=>{
//     console.log("mousedown");
// })

// el.addEventListener("mouseup", () => {
//     console.log("mouseup!!");
    
// })

// el.addEventListener("click", (e) => {
//     console.log("clicked", e.button);
    
// })

// el.addEventListener("dblclick", () =>{
//     console.log("db");
    
// })

// el.addEventListener("mouseover", () => {
//     console.log("mouse move");
    
// })
// el.onmouseout = () =>{
//     console.log("mouse out");
    
// }

// el.onmouseenter = () => {
//     console.log("enter");
    
// }


// el.addEventListener("contextmenu", (e) => {
//     e.preventDefault()
// })

// let message = document.createElement("p")
// document.body.appendChild(message)
    
// el.addEventListener("mouseup", (e) => {
    
//     switch (e.button) {
//         case 0:
//            message.textContent = "left button"
//             break;
//         case 1:
//             message.textContent = "scroll wheel"
//             break
//         case 2:
//             message.textContent = "right button"
//             break
//         default:
//             console.log("unknown");
//             break;
//     }

// })


// el.addEventListener("click", (e) => {
//     console.log("ctrl", e.ctrlKey);
//     console.log("shift", e.shiftKey);
//     console.log("alt", e.altKey);
//     console.log("windows" , e.metaKey);
    
// })
// const p = document.createElement("p")
// document.body.appendChild(p)
// window.addEventListener("mousemove", (e) => {
//     p.textContent = `[screenX: ${e.screenX}, screenY: ${e.screenY}] - [clientX: ${e.clientX}, clientY: ${e.clientY}]`
    
  
// })



// const input = document.querySelector("#text")

// input.addEventListener("keypress", (event) => {
//     console.log(event.code);
//     console.log(event.key);
    
// })


// //how to register scroll event:
// //1: calling addeventlIstener method on targeted element
// targetElement.addEventlistener((event), () => {
    
// })

// //2:assign event handler to onscroll proert of targeted element
// targetElement.onScroll = (event) => {
    
// }

// document.body.style.height = "2000px"

// window.addEventListener(("scroll"), (e) => {
//     console.log("scrolling", window.scrollY);
//     console.log("scrolling", window.pageYOffset);
    
// })

// window.onscroll = function (e) {
//     console.log("scrolling", e);
// }


// const myMenu = document.querySelector(".menu")

// myMenu.addEventListener("click", (e) => {
//     console.log(e.target);
//     switch (e.target.className) {
//         case "home":
//             console.log("home is clicked");
//             break
//         case "about":
//             console.log("about is clicked");
//             break
//         case "contacts":
//             console.log("contacts is clicked");
//     }
    
// })


//mutationObserver: showing changes made to dom tree

// function callback(mutatios) {
//     //
// }

// const observer = new MutationObserver(callback)
// observer.observe(targetedNode, observerOptions)

// observer.disconnect()


// (function () {
//     // selecting the list
//     let list = document.querySelector('#language');

//     // selecting the buttons
//     let btnAdd = document.querySelector('#btnAdd');
//     let btnRemove = document.querySelector('#btnRemove');
//     let btnStart = document.querySelector('#btnStart');

//     // disable the stop button
//     let btnStop = document.querySelector('#btnStop');
//     btnStop.disabled = true;

//     function log(mutations) {
//         for (let mutation of mutations) {
//             if (mutation.type === 'childList') {
//                 console.log(mutation);
//             }
//         }
//     }

//     let observer = new MutationObserver(log);

//     btnStart.addEventListener('click', function () {
//         observer.observe(list, {
//             childList: true
//         });

//         btnStart.disabled = true;
//         btnStop.disabled = false;
//     });

//     btnStop.addEventListener('click', function () {
//         observer.disconnect();

//         // Set the button state
//         btnStart.disabled = false;
//         btnStop.disabled = true;
//     });

//     let counter = 1;
//     btnAdd.addEventListener('click', function () {
//         // create a new item element
//         let item = document.createElement('li');
//         item.textContent = `Item ${counter++}`;

//         // append it to the child nodes of list
//         list.appendChild(item);
//     });

//     btnRemove.addEventListener('click', function () {
//         list.lastElementChild ?
//             list.removeChild(list.lastElementChild) :
//             console.log('No more child node to remove');
//     });

// })();

// const form = document.querySelector("#form")

// console.log(form.elements["email"].value)

// form.addEventListener("event", () => {
    
// })


// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const name = form.elements["name"]
//     console.log(name);
//     const email = form.elements["email"]
//     console.log(email);
//     let isValid = true


//     if (name.value.trim() === "") {
//         alert(NAME_REQUIRED);
//         isValid = false
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.value.match(emailRegex)) {
//         alert(EMAIL_INVALID)
//         isValid = false
//     }
    
//     if (isValid) {
//         alert("form submitted successfully")
//     }

// })

// function showError(input, message) {
//     let errorElement = input.nextElementSibling
//     errorElement.textContent = message
//     input.classList.add("error")

//  }

// function showSuccess(input) {
//     const errorElemnent = input.nextElementSibling
//     errorElemnent.textContent = ""
//     input.classList.remove("error")
// }

// function showMessage(input, message, type) {
//     const msg = input.parentNode.querySelector("small")
//     msg.innerText = message

//     input.className = type ? "success" : "error"
//     return type
// }

// function showError(input, message) {
//     return showMessage(input, message, false)
// }

// function showSuccess() {
//     return showMessage(input, "", true)
// }

// function hasValue(input, message) {
//     if (input.value.trim() === "") {
//         return showError(input, message)
//     }

//     return showSuccess(input)
// }

// function validateEmail(input, requiredMsg, invalidMsg) {
//     if (!hasValue(input, requiredMsg)) {
//         return false
        
//     }

//     const emailRegex =
// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const email = input.value.trim()

// }

//     if (!emailRegex.text(email)) {
//         return showError(input, invalidMsg)
// }
// return true

    
// const form = document.querySelector("#signup");

// const NAME_REQUIRED = "Please enter your name";
// const EMAIL_REQUIRED = "Please enter your email";
// const EMAIL_INVALID = "Please enter a correct email address format";


// form.addEventListener("submit", function (event) {
//     event.preventDefault()

//     let nameValid = hasValue(form.elements["name"], NAME_REQUIRED)
//     let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID)

//     if (nameValid && emailValid) {
//         alert("Demo only. No form was posted.")
//     }
// })


// show a message with a type of the input
// function showMessage(input, message, type) {
// 	// get the small element and set the message
// 	const msg = input.parentNode.querySelector("small");
// 	msg.innerText = message;
// 	// update the class for the input
// 	input.className = type ? "success" : "error";
// 	return type;
// }

// function showError(input, message) {
// 	return showMessage(input, message, false);
// }

// function showSuccess(input) {
// 	return showMessage(input, "", true);
// }

// function hasValue(input, message) {
// 	if (input.value.trim() === "") {
// 		return showError(input, message);
// 	}
// 	return showSuccess(input);
// }

// function validateEmail(input, requiredMsg, invalidMsg) {
// 	// check if the value is not empty
// 	if (!hasValue(input, requiredMsg)) {
// 		return false;
// 	}
// 	// validate email format
// 	const emailRegex =
// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 	const email = input.value.trim();
// 	if (!emailRegex.test(email)) {
// 		return showError(input, invalidMsg);
// 	}
// 	return true;
// }

// const form = document.querySelector("#signup");

// const NAME_REQUIRED = "Please enter your name";
// const EMAIL_REQUIRED = "Please enter your email";
// const EMAIL_INVALID = "Please enter a correct email address format";

// form.addEventListener("submit", function (event) {
// 	// stop form submission
// 	event.preventDefault();

// 	// validate the form
// 	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
// 	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
// 	// if valid, submit the form.
// 	if (nameValid && emailValid) {
// 		alert("Demo only. No form was posted.");
// 	}
// });


///////////////////////////////////////////////////////////
// const checkbox = document.getElementById("input: checked")
// console.log(checkbox);


// const checkbox = document.getElementById("checkbox")

// console.log(checkbox.value);

// const btn = document.querySelector("button")
// btn.onclick = () => {
// 	console.log(checkbox.value);
	
// }


// const btn = document.querySelector("#btn")
// btn.addEventListener("click", (e) => {
// 	const checkboxs = document.querySelectorAll("input:checked")
// 	console.log(checkboxs);
// 	let value = []
// 	checkboxs.forEach(e => {
// 		value.push(e.value);
// 	})
// 	alert(value)
// 	console.log(value);
	
	
// })


// const btn = document.querySelector("#btn")
// btn.addEventListener("click", () => {
//     const checkboxs = document.querySelectorAll("input[type='checkbox']")
//     checkboxs.forEach(e => {
//         e.checked = !(e.checked)
//     })

// })

// const checkbox = document.createElement("input")
// checkbox.setAttribute("type", "checkbox")
// checkbox.setAttribute("id", "color")

// const label = document.createElement("label")
// label.for = "color"
// label.textContent = "color: "

// document.body.append(label)
// document.body.append(checkbox)


// const colors = ["Red", "Green", "Blue"];
// colors.map(color => {
//     const label = document.createElement("label")
//     const input = document.createElement("input")
//     input.setAttribute("type", "checkbox")

//     document.body.append(label)
//     document.body.append(input)

//     label.textContent = color
//     label.for = color
//     input.id = color
// })

/////////////////////////////////////////////////////////////////////////

// const radios = document.querySelectorAll("input[type='radio']") 
// console.log(radios);

// let selectedSize;

// document.querySelector("#btn").addEventListener("click", () => {
//     radios.forEach(e => {
//         if (e.checked) {
//             selectedSize = e.value
        
//         }
        
//     })
//     let output = document.createElement("p")
//     document.body.append(output)
//     console.log(selectedSize);
    
//     output.textContent = selectedSize ? `you have clicked ${selectedSize}` : `try again!`
//     console.log(selectedSize);
    
// })


// Array.from(radios).map(radio => {
//     radio.addEventListener("change", function (e) {
//         console.log(e.target);
//         if (e.target.checked) {
//             console.log(e.target.value);
            
//         }
        
//     }
//     )
// })


// const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
// sizes.map(size => {
//     const div = document.createElement("div")
    
//     const radio = document.createElement("input")
//     radio.type = "radio"
//     radio.id = size.toLowerCase()
//     radio.value = size
//     radio.name = "sizes"

//     const label = document.createElement("label")
//     label.for = size.toLowerCase()
//     label.textContent = size

//     document.body.append(div)
//     div.append(radio)
//     div.append(label)

// })

// const btn = document.querySelector('#btn');
// const sb = document.querySelector('#frameworks')

// btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log(sb.options[sb.selectedIndex].value);
    
//     console.log(sb.selectedIndex);
//     console.log(sb.value)
// })


