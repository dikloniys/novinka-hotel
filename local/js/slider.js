
const mainSliderCatalogOptions = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
}
var swiper = new Swiper(".js-main-swiper-catalog", mainSliderCatalogOptions);