"use strict";

// navbar toggle

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");
const goTopBtn = document.querySelector("[data-go-top]");

navToggleBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    header.classList.toggle('nav-active')
});

for(let i=0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', function(){
        header.classList.toggle('nav-active');
        navToggleBtn.classList.toggle('active')
    })
}

// Header Scroll Active state
window.addEventListener('scroll', function(){
    if (this.window.scrollY >= 100){
        header.classList.add("active");
        goTopBtn.classList.add('active')
    } else {
        header.classList.remove("active");  
        goTopBtn.classList.remove("active");  
    }
});


