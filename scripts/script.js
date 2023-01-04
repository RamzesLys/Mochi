const menuHamb = document.querySelector('.header__hamb');
const menuHidden = document.querySelector('.header__menu-hidden');

menuHamb.addEventListener('click', function () {
    menuHamb.classList.toggle('active');
    menuHidden.classList.toggle('active');
})