'use strict';

const menuBtn = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.nav-dropdown');

const toggleDropdown = function () {
  dropdownMenu.style.display === 'block'
    ? (dropdownMenu.style.display = 'none')
    : (dropdownMenu.style.display = 'block');
};

menuBtn.addEventListener('click', () => {
  toggleDropdown();
});
