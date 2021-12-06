$(".js-btn-callback").on('click', function(e) {
    $("body").css("overflow-y","hidden");
    $(".js-callback").addClass('active');
    $(".js-callback-works").addClass('active');
})
$(".js-btn-close").on('click', function(e) {
    $(".js-callback").removeClass('active');
    $(".js-callback-works").removeClass('active');
    $(".js-callback-confirmation").removeClass('active');
    $("body").css("overflow-y","auto");
})
$(".js-send").on('click', function(e) {
    $(".js-callback-works").removeClass('active');
    $(".js-callback-confirmation").addClass('active');
})