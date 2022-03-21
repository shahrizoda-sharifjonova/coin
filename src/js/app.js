import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

const dropdownTop = document.querySelector('.top__dropdown-top');
const dropdownArrow = document.querySelector('.top__dropdown-arrow');
const dropdownContent = document.querySelector('.top__dropdown-content');
const dropdownItem = document.querySelectorAll('.top__dropdown-item');
const dropdownImg = document.querySelectorAll('.top__dropdown-img img');

dropdownTop.addEventListener('click', (e)=>{
  dropdownContent.classList.toggle('active')
  dropdownArrow.classList.toggle('active')
})

new Swiper(".menu__swiper", {
  slidesPerView: "auto",
  modules: [Navigation],
  spaceBetween: 25,
  navigation: {
    nextEl: ".menu__button-next",
  },
});


