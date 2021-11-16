$(document).ready(function(){
    $('.swiper-wrapper').slick({
        dots: true,
        prevArrow:'<button type="button" class="slick-preve slick_arrow"><span></span><span></span><span></span></button>',
        nextArrow:'<button type="button" class="slick-nexte slick_arrow"><span></span><span></span><span></span></button>',
        infinite: false
    });
});

const mainSliderCatalogOptions = {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true
}
var swiper = new Swiper(".js-main-swiper-catalog", mainSliderCatalogOptions);