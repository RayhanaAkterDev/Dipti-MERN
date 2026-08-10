import "./style.css";

const signupForm = document.getElementById("signupForm");
const nameErr = document.getElementById("nameError");
const emailErr = document.getElementById("emailError");
const genderErr = document.getElementById("genderError");
const skillsErr = document.getElementById("skillsError");
const passwordErr = document.getElementById("passwordError");

// here "e" is a anonymous callback function which is passed as an argument to the event listener.
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(signupForm);

    const uname = formData.get("name");
    const email = formData.get("email");
    const gender = formData.get("gender");
    const skill = formData.getAll("skill");
    const password = formData.get("password");

    // Validation for name field
    if (!uname) {
        nameErr.textContent = "Please enter your name";
    } else if (!/^[A-Za-z.\-\s]+$/.test(uname)) {
        nameErr.textContent = "Invalid name";
    } else {
        nameErr.textContent = "";
    }

    // Validation for email field
    if (!email.trim()) {
        emailErr.textContent = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailErr.textContent = "Invalid email";
    } else {
        emailErr.textContent = "";
    }

    // Validation for gender field
    if (!gender) {
        genderErr.textContent = "Please select your gender";
    } else {
        genderErr.textContent = "";
    }

    // Validation for skills field
    if (skill.length === 0) {
        skillsErr.textContent = "Please select at least one skill";
    } else {
        skillsErr.textContent = "";
    }

    // Validation for password field
    if (!password.trim()) {
        passwordErr.textContent = "Please enter your password";
    } else if (password.length < 6) {
        passwordErr.textContent = "Password must be at least 6 characters long";
    } else if (!/[A-Za-z]/.test(password)) {
        passwordErr.textContent = "Password must contain at least one alphabet";
    } else if (!/[0-9]/.test(password)) {
        passwordErr.textContent = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(password)) {
        passwordErr.textContent = "Password must contain at least one special character";
    } else {
        passwordErr.textContent = "";
    }
});
