const menuHamb = document.querySelector('.header__hamb');
const menuHidden = document.querySelector('.header__menu-hidden');

menuHamb.addEventListener('click', function () {
    menuHamb.classList.toggle('active');
    menuHidden.classList.toggle('active');
});

const dropdownBtn = document.querySelector('.sticky__btn');
const dropdownMenu = document.querySelector('.sticky__dropdown-menu');

dropdownBtn.addEventListener('click', function () {
    dropdownBtn.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
    
});

