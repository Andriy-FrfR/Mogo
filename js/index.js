'use strict';

let navBurger = document.querySelector('.nav-burger'),
    nav = document.querySelector('.nav');

navBurger.addEventListener('click', burgerHandler);

function burgerHandler() {
    this.classList.toggle('active');

    if (this.classList.contains('active')) nav.style.display = 'block';
    else nav.style.display = 'none';
}

let employment = document.querySelector('.emp');

employment.addEventListener('click', empHandler);

function empHandler(event) {
    let target = event.target.closest('.accordion');

    if (!target) return;

    target.classList.toggle('active');
}

nav.addEventListener('click', navHandler);

let activeLink

function navHandler(event) {
    let target = event.target.closest('.nav__link');

    if (!target) return;

    if (activeLink) activeLink.classList.remove('active');

    target.classList.toggle('active');

    activeLink = target;
}