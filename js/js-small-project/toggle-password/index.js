const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const inputsArray = Array.from(inputs);
const passwordIcon = document.querySelector(".fa-eye-slash");
const formData = {};

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submited");
    formData["username"] = form.elements[0].value;
    formData["password"] = form.elements[1].value;
    console.log("your data is: ", formData);
}

const handleShowPassword = () => {
    inputsArray[1].type === "password" ? inputsArray[1].type = "text" : inputsArray[1].type = "password";
    if (passwordIcon.classList.contains("fa-eye-slash")) {
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    } else {
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    }
}

form.addEventListener("submit", handleSubmit);
passwordIcon.addEventListener("click", handleShowPassword);