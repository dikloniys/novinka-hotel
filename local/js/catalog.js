const mainSliderCatalogOptions = {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 50,
    navigation:{
        prevEl:'.js-room-prev-slide',
        nextEl:'.js-room-next-slide'
    }
}
let roomCards = document.querySelectorAll('.js-catalog-card-slider')
roomCards.forEach((roomCard) => {
    let swiperCard = new Swiper(roomCard, {
        slidesPerView: 'auto',
        pagination: {
            el: roomCard.querySelector(".cardroom-slider__pagination"),
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
    
}) 
var swiper = new Swiper(".js-main-swiper-catalog", mainSliderCatalogOptions);

const catalogCardSliderOptions = {

}
let filterButtons = document.querySelectorAll('.js-filter-button')
filterButtons.forEach((button)=>{
    button.addEventListener('click', (e) => {
        let cards = document.querySelectorAll('.js-filter-card')
        cards.forEach((card)=>{
            card.style.display="none"
        })
        filterButtons.forEach((filterButton)=>{
            filterButton.classList.remove('active')
        })
        e.target.classList.add('active')
        let numb = +e.target.dataset.btn
        var elements = document.querySelectorAll('[data-id="' + numb + '"]');
        if(numb === 1){
            cards.forEach((card)=>{
                card.style.display="block"
            })
            return true
        }else{
            elements.forEach((element)=>{
                element.style.display="block"
            })
            return false
        }
    })
})