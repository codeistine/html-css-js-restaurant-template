//Select element function

const selectElement = function (element) {
    return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

window.sr = ScrollReveal();
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

window.sr = ScrollReveal();
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

window.sr = ScrollReveal();
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

window.sr = ScrollReveal();
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

// sticky header
const spy = document.querySelector('.spy-wrapper');

window.addEventListener('scroll', () => {
    spy.classList.toggle('sticky', window.scrollY > 0);
});