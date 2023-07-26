// Scroll to Top button functionality

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// Hamburger Menu functionality

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show")
})

// Close hamburger menu when an item is clicked

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
})

// Year for the footer

const year = new Date().getFullYear();
document.querySelector("footer .year").innerHTML = year;