const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navlinks = document.querySelectorAll('.nav-link li')

    //Toggle Nav 
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toogle');
    });

    //Animate links
    navlinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards       ${index / 7 + 1.5}s`;
    });

};

navSlide();