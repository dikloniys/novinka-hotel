
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

// $(function(){

//     let CurrentScroll = 0;
//     $(window).scroll(function(){
//         let NextScroll = $(this).scrollTop();
//         let hidden = $(".header_nav");
//         let button = $(".js-header_button");
//         if (NextScroll > CurrentScroll){
            
//             if($(this).scrollTop() > 105) {
//                 hidden.addClass("fixed_hidden");
//                 button.removeClass("button_transparent");
//                 button.addClass("button");

//                 } else {
//                     hidden.removeClass("fixed_hidden");
//                     button.addClass("button_transparent");
//                     button.removeClass("button");
//                 }
//         }
//         else {
//             hidden.removeClass("fixed_hidden");
//             if($(this).scrollTop() > 105) {
//                 button.removeClass("button_transparent");
//                 button.addClass("button");

//                 }
//                 else {
//             button.addClass("button_transparent");
//             button.removeClass("button");
//         }
//         }

//         CurrentScroll = NextScroll;
//     });
// });