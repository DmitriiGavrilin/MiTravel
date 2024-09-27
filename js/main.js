// Переменные

const swiper1 = document.querySelector('.swiper-container');
const swiper2 = document.querySelector('.slider-container');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const playBtnFirst = document.querySelectorAll('.button__play');


// Бургер меню

burger.addEventListener('click', () => {
   menu.classList.add('visible');
});

close.addEventListener('click', () => {
    menu.classList.remove('visible');
});

// Слайдер 1

let swiperFirst = new Swiper(swiper1, {
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    fadeEffect: {
        crossFade: true
    },
    effect: 'fade',
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});


swiperFirst.on('transitionEnd', function () {
    let videos = document.querySelectorAll('.hero__slider video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    playBtnFirst.forEach(button => {
        button.style.display = 'block';
    });
});


// Запуск видео в слайдере 1

playBtnFirst.forEach((button) => {
   button.addEventListener('click', (e) => {
       let video = e.currentTarget.closest('.slider__media').querySelector('video');
       video.play();
       e.currentTarget.style.display = 'none';
       setTimeout(() => {
           video.volume = .5;
       }, 1000);
   });
});

// Слайдер 2

let swiperSecond = new Swiper(swiper2, {
    centeredSlides: true,
    loop: true,
    spaceBetween: 105,
    slidesPerView: 'auto',
});