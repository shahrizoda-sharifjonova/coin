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

new Swiper(".cards__swiper", {
  slidesPerView: 1,
  spaceBetween: 14,
  modules: [Pagination],
  pagination: {
    el: '.cards__pagination',
    clickable: true 
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    576:{
      slidesPerView: 2,
      spaceBetween: 10,
    }
  },
});

const coinsItem = document.querySelectorAll('.coins__item');

coinsItem.forEach(el => {
  el.addEventListener('click', (e)=>{
    coinsItem.forEach(el => {
      el.classList.remove('active')
    });
    el.classList.add('active')
  })
});


