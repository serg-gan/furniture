const swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
  },
  direction: 'horizontal',
  loop: true,
  // Optional parameters


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

new Swiper('.advantage-container-slider', {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});