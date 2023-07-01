// # menu - scroll top
const Header = document.querySelector(".header");
const NavBar = document.querySelector(".nav-bar");

document.addEventListener('scroll', function (event) {
    if (Header.offsetHeight < window.scrollY) {
        NavBar.classList.add('scroll-top');
    }

    else {
        NavBar.classList.remove('scroll-top');
    }
})