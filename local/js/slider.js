$(document).ready(() => {
    const mainSliderCatalogOptions = {
        slidesPerView: 'auto',
        loop: true,
        navigation:{
            prevEl:'.js-room-prev-slide',
            nextEl:'.js-room-next-slide'
        }
    }
    var swiper = new Swiper(".js-main-swiper-catalog", mainSliderCatalogOptions);
    
})
