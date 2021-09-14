console.log('js-slide')
$(".js-slide").hover(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(this).siblings().addClass("active");
});