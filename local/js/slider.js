
const mainSliderCatalogOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next'
    }
}
var swiper = new Swiper(".js-main-swiper-catalog", mainSliderCatalogOptions);
