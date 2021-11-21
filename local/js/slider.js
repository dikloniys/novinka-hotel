
const mainSliderCatalogOptions = {
    slidesPerView: 'auto',
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next'
    }
}
var swiper = new Swiper(".js-main-swiper-catalog", mainSliderCatalogOptions);
