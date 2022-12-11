let iconBurger = document.querySelector('.header__menu-burger');
let headNav = document.querySelector('.header__ul-nav');
let active = document.querySelectorAll('.active_js');

iconBurger.addEventListener('click', function () {
   headNav.classList.toggle('active');
   iconBurger.classList.toggle('active');
})

active.forEach(b => b.addEventListener('click', function () {
   headNav.classList.remove('active');
   iconBurger.classList.remove('active');
}));