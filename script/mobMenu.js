const banner = document.querySelector('.homeWrapper');
const bannerHeight = banner.offsetHeight;
const mobMenuButton = document.querySelector('.mobMenuBtn');
const mobMenu = document.querySelector('.mobMenu');
const mobMenuUl = document.querySelector('.mobMenu ul');

function topMenu() {
    if (window.scrollY >= bannerHeight) {
        mobMenuButton.classList.add('mobile');
    } else {
        mobMenuButton.classList.remove('mobile');
    }
}

function popupMenu(e) {
    mobMenu.classList.toggle('active');
}

function preventDefault(e) {
    e.stopPropagation();
}

window.addEventListener('scroll', topMenu);
mobMenuButton.addEventListener('click', popupMenu);
mobMenu.addEventListener('click', popupMenu);
mobMenuUl.addEventListener('click', preventDefault);
