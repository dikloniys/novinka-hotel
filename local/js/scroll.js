const headerScrollCheck = () => {
    let header = $(".js-scroll-check");
    let header_button = $(".js-header_button");
    let header_button_burger = $(".js-header-burgher-menu");
    let firstBlockHeight = $(".js-first-block").height();
        if ($(this).scrollTop() > firstBlockHeight) {
                header.addClass("fixed");
                header_button.addClass("active");
                header_button_burger.addClass("color");
                return true
            }
        else {
            header_button.removeClass("active");
            setTimeout(function(){header.removeClass("fixed")},400);
            return false
        }
    
}

const headerNavVisibilityCheck = (fixed, direction) => {
    let headerNav = $(".js-header-nav");
    
    if($(window).width() > 1100){
        if (fixed && direction === "down") {
            headerNav.hide(200)
        }
        else {
            headerNav.show(200)
        }
    }
};
let scrollPos = 0;
const checkScrollDirection = (st) => {
    if (st < scrollPos){
        scrollPos = st;
        return "top"
    } 
    scrollPos = st;
    return "down"
}
$(window).scroll(function() {
    if($('.js-header-burgher-list').hasClass('js-burgher-open') === false){
        headerScrollCheck()
        let scrollDirection = checkScrollDirection($(this).scrollTop())
        headerNavVisibilityCheck(headerScrollCheck(), scrollDirection)
    }
});

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        const blockID = anchor.getAttribute('href')
        
        document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
}