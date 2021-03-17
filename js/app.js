const navSlide = () => {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');

    burger.addEventListener('click' , () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active-nav');
    });
};
navSlide();