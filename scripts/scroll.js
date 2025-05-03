// scripts/scroll.js

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
