
$(".js-slide").hover(function() {
    $(this).siblings().removeClass("active");
    console.log((this).find())
    console.log((this).siblings().removeClass("active"))
    $(this).find(".js-slide").addClass("active");
    $(this).siblings().addClass("active");
});