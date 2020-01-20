var icon_open = document.querySelector('.menu-icon--open');
var icon_close = document.querySelector('.menu-icon--close');
var nav_menu = document.querySelector('.nav__list');

icon_close.addEventListener('click', function (evt){
    nav_menu.classList.toggle('menu-close');
});
icon_open.addEventListener('click', function (evt){
    nav_menu.classList.toggle('menu-close');
});



