import * as functions from './modules/functions.js';
import Gallery from  '../libs/gallery.js';

new Gallery(document.getElementById('gallery'), {
  margin: 10,
});

// Toggle nav menu active
const toggleMenu = item => {
  const links = document.querySelectorAll(item);
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
};

// Burger menu support
const body = document.querySelector('body'), 
      cover = document.querySelector('.space-cover'), 
      menu = document.querySelector('.burger-menu'), 
      control = document.querySelector('.burger-menu__control'),
      burger = document.querySelector('.burger__item'),
      close = document.querySelector('.close__item'),
      links = document.querySelectorAll('.main-nav__link'),
      
      MENU_OPENED_CLASS = 'burger-menu__opened';

const openMenu = () => {
  body.classList.add(MENU_OPENED_CLASS);
  burger.style.display = 'none';
  close.style.display = 'block';
};

const closeMenu = () => {
  body.classList.remove(MENU_OPENED_CLASS);
  burger.style.display = 'block';
  close.style.display = 'none';
};

const burgerMenu = () => {
  cover.addEventListener('click', () => closeMenu());
  control.addEventListener('click', () => body.classList.contains(MENU_OPENED_CLASS) ? closeMenu() : openMenu());
  links.forEach(link => link.addEventListener('click', () => closeMenu()));
};

// Initial functions
toggleMenu('.nav-link');
burgerMenu();
functions.isWebp();