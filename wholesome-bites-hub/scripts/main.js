// scripts/main.js

// Dynamically display the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Dynamically display the last modified date in the footer
document.getElementById("last-modified").textContent = document.lastModified;
