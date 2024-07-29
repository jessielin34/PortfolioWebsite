//scroll to top functionality
//const scrollUp = document.querySelector("#scroll-up");

//scrollUp.addEventListener("click", () => {
    //window.scrollTo({
        //top: 0,
        //left: 0,
        //behavior: "smooth",
    //});
//});

//nav hamburger selections

//const burger = document.querySelector("#burger-menu");
//const ul = document.querySelector("nav ul");
//const nav = document.querySelector("nav");

//burger.addEventListener("click", () => {
    //console.log("Burger menu clicked");
    //ul.classList.toggle("show");
//});

//close hamburger menu when a link is clicked

//select nav links
//const navLink = document.querySelectorAll(".nav-link");

//navLink.forEach((link) =>
    //link.addEventListener("click", () => {
        //ul.classList.remove("show");
    //})
//);

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector("#burger-menu");
    const ul = document.querySelector("nav ul");
    //const nav = document.querySelector("nav");

    if (burger && ul) {
        burger.addEventListener("click", () => {
            console.log("Burger menu clicked");
            ul.classList.toggle("show");
        });
    }

    // Close hamburger menu when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            ul.classList.remove("show");
            console.log("Menu closed on link click"); 
        });
    });
});