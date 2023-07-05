const Header = document.querySelector(".header");
const NavBar = document.querySelector("#headerNavbar");
const BarMenu = document.querySelector("#navbarMenu");
const MenuItem = document.querySelectorAll(".navBar__menu_item");
const BurgerBtn = document.querySelector("#btnBurger");

// =======================
// # menu - scroll top
document.addEventListener('scroll', function (event) {
    if (Header.offsetHeight < window.scrollY) {
        NavBar.classList.add('scroll-top');
    }

    else {
        NavBar.classList.remove('scroll-top');
    }
});

// =======================
// # menu - show drop-doun menu
// MenuItem.forEach(itemClicked => {
//     itemClicked.addEventListener('click', function (event) {
//         let item = event.target;
//         item.firstElementChild.classList.toggle('hiden');

//         // item.addEventListener('mouseleave', function (event) {
//         //     this.firstElementChild.classList.add('hiden');
//         // })
//     })
// });

// =======================
// # menu - burger menu
// let burgerBtn = document.getElementsByClassName("burger-menu")[0];
// let bodyTag = document.getElementsByTagName("body")[0];
// let navBar = document.getElementsByClassName("navbar_menu_top")[0];

// burgerBtn.addEventListener('click', function () {
//     burgerBtn.classList.toggle("active-btn");
//     bodyTag.classList.toggle("body-overflow");
//     navBar.classList.toggle("active-btn");
// })