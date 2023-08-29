// script.js
const themeToggle = document.getElementById("theme-toggle");
const themeFrame = document.getElementById("theme-frame");

themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        themeFrame.src = "night/unmined.index.html";
    } else {
        themeFrame.src = "day/unmined.index.html";
    }
});
