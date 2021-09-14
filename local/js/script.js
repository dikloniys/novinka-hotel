
let gallerySliderRoom = document.querySelector('.swiper-wrapper')
console.log(gallerySliderRoom)

let gallerySlider = new Swiper (gallerySliderRoom, {
  slidesPerView: 2,
  navigation: {
    nextEl: gallerySliderDom.querySelector('.swiper-button-next'),
    prevEl: gallerySliderDom.querySelector('.swiper-button-prev'),
  },
}) 
/*
loop: true,
  spaceBetween: 100,
  autoHeight: true,
  
  */