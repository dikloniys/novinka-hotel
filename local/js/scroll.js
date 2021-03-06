
const headerScrollCheck = () => {
    let header = $(".js-scroll-check");
    let firstBlockHeight = $(".js-first-block").height();
    if ($(this).scrollTop() > firstBlockHeight) {
        header.addClass("fixed");
        return true
    } else {
        header.removeClass("fixed");
        return false
    }
}

const headerNavVisibilityCheck = (fixed, direction) => {
    let headerNav = $(".js-header-nav");
    if (fixed && direction === "down") {
        headerNav.hide()
    }
    else {
        headerNav.show()
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
