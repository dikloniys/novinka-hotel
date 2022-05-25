$(document).ready(() => {
  const mainSliderCatalogOptions = {
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 50,
      navigation:{
          prevEl:'.js-room-prev-slide',
          nextEl:'.js-room-next-slide'
      }
  }

  var swiper = new Swiper(".js-main-swiper-catalog", mainSliderCatalogOptions);

let roomCard = document.querySelector('.js-swiper-service')
    let swiperCard = new Swiper(roomCard, {
        slidesPerView: 'auto',
            navigation:{
              prevEl:'.js-service-prev-slide',
              nextEl:'.js-service-next-slide'
            },
        pagination: {
            el: roomCard.querySelector(".service-slider__pagination"),
            type: 'bullets',
            clickable: true
        }
    })
    const bullets = roomCard.querySelectorAll(".swiper-pagination-bullet")
    bullets.forEach((bullet, index) => {
        bullet.addEventListener("mouseover", (e) => {
            swiperCard.slideTo(index)
        })
    })
  const SliderAdvantages = {
      slidesPerView: 'auto',
      loop: false,
      spaceBetween: 50,
  }

  var swiperAdvantages = new Swiper(".js-swiper-advantages", SliderAdvantages);
  
  const swiperCatalog = new Swiper('.js-swiper-catalog', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.catalog-detailed-swiper-navigation-arrow-next',
        prevEl: '.catalog-detailed-swiper-navigation-arrow-prev',
    },
    thumbs: {
        swiperCatalog: CatalogThumbs,
        }
});
    var CatalogThumbs = new Swiper(".js-swiper-catalog-thumbs", {
        loop: true,
        slidesPerView: 3,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
      });
      swiperCatalog.controller.control = CatalogThumbs;
      CatalogThumbs.controller.control = swiperCatalog;
})
