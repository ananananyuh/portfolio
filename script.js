// Typed.js typing effect
new Typed('#typed', {
  strings: [
    "a Creative Mind ✨",
    "a Problem Solver 🧠",
    "a Web Developer 💻"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  toggleBtn.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});
