
  const mainSliderCatalogOptions = {
      slidesPerView: 'auto',
      loop: false,
      spaceBetween: 50,
      navigation:{
          prevEl:'.js-room-prev-slide',
          nextEl:'.js-room-next-slide' 
      }
  };
  var swiper = new Swiper(".js-main-swiper-catalog", mainSliderCatalogOptions);

    let roomCard = document.querySelector('.js-swiper-service')
        let swiperCard = new Swiper(roomCard, {
            slidesPerView: 'auto',
            loop: true,
                navigation:{
                prevEl:'.js-service-prev-slide',
                nextEl:'.js-service-next-slide'
                },
            pagination: {
                el: document.querySelector(".service-slider__pagination"),
                type: 'bullets',
                clickable: true
            }
        })
    const bullets = document.querySelectorAll(".swiper-pagination-bullet")
    bullets.forEach((bullet, index) => {
        bullet.addEventListener("mouseover", (e) => {
            swiperCard.slideTo(index)
        })
    });
const swiperAdvantages = new Swiper('.js-swiper-advantages', {
    slidesPerView: "auto",
    spaceBetween: 50,
    loop: false,
    freeMode: true,
});
