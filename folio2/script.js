// toggle navbar icon 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');


};


// scroll scitons active links 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // stivky navbar 

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');


};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });


ScrollReveal().reveal('.home-content, .heading, .services-box.web-dev', {origin: 'top'});
ScrollReveal().reveal('.home-img, .about-img, .services-container .services-box, #gra-des', {origin: 'bottom'});
ScrollReveal().reveal('.home-content', {origin: 'right'});
ScrollReveal().reveal('.btn, .home-content h1', {origin: 'left'});

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Web Dev', 'Web Designer', 'Player'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });