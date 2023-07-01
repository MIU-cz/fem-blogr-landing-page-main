const Header = document.querySelector(".header");
const NavBar = document.querySelector(".nav-bar");
const BarMenu = document.querySelector(".bar-menu-items");
const MenuItem = document.querySelectorAll(".menu-item");

// # menu - scroll top
document.addEventListener('scroll', function (event) {
    if (Header.offsetHeight < window.scrollY) {
        NavBar.classList.add('scroll-top');
    }

    else {
        NavBar.classList.remove('scroll-top');
    }
});

// # menu - show drop-doun menu
MenuItem.forEach(itemClicked => {
    itemClicked.addEventListener('click', function (event) {
        let item = event.target;
        item.firstElementChild.classList.remove('hiden');
        item.addEventListener('mouseleave', function (event) {
            this.firstElementChild.classList.add('hiden');
        })
    })
});