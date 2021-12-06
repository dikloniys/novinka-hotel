
const headerScrollCheck = () => {
    let header = $(".js-scroll-check");
    let header_button = $(".js-header_button");
    let firstBlockHeight = $(".js-first-block").height();
    if ($(this).scrollTop() > firstBlockHeight) {
        header.addClass("fixed");
        header_button.addClass("active");
        return true
    } else {
        header.removeClass("fixed");
        header_button.removeClass("active");
        return false
    }
}

const headerNavVisibilityCheck = (fixed, direction) => {
    let headerNav = $(".js-header-nav");
    if (fixed && direction === "down") {
        headerNav.hide(200)
    }
    else {
        headerNav.show(200)
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
    headerScrollCheck()
    let scrollDirection = checkScrollDirection($(this).scrollTop())
    headerNavVisibilityCheck(headerScrollCheck(), scrollDirection)
});

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    })
})
}