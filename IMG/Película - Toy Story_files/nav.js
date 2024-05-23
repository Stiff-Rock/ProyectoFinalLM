const hamburger = document.querySelector(".hamburger");
const sectionMenu = document.querySelector(".section-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sectionMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sectionMenu.classList.remove("active");
}));