var iconOpen = document.querySelector('.menu-icon--open');
var iconClose = document.querySelector('.menu-icon--close');
var navMenu = document.querySelector('.nav__list');

var menuClickHandler = function (){
    navMenu.classList.toggle('menu-close');
};

iconClose.addEventListener('click', function (evt){
    menuClickHandler();
});
iconOpen.addEventListener('click', function (evt){
    menuClickHandler();
});