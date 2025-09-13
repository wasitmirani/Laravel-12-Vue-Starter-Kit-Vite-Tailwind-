"use strict";

// Function to toggle password visibility
let createpassword = (inputId, button) => {
    const inputField = document.getElementById(inputId);
    const isPassword = inputField.type === "password";

    // Toggle input type
    inputField.type = isPassword ? "text" : "password";

    // Update icon based on visibility
    const icon = button.querySelector("i");
    if (isPassword) {
        icon.classList.remove("ri-eye-off-line");
        icon.classList.add("ri-eye-line");
    } else {
        icon.classList.remove("ri-eye-line");
        icon.classList.add("ri-eye-off-line");
    }
}