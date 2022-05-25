$(".js-contact").on('click', function() {
    $("body").css("overflow-y","hidden");
    $(".js-callback").fadeIn();
    $(".js-callback-works").fadeIn();
})
$(".js-reserve").on('click', function() {
    $("body").css("overflow-y","hidden");
    $(".js-callback").fadeIn();
    $(".js-reserve-anime").fadeIn();
})
$(".js-btn-close").on('click', function() {
    $(".js-callback").fadeOut();
    $(".js-callback-works").fadeOut();
    $(".js-callback-confirmation").removeClass('active');
    $(".js-reserve-anime").fadeOut();
    $("body").css("overflow-y","auto");
})
$(".js-send-reservation").on('click', function(e) {
    $(".js-reserve-anime").fadeOut();
    $(".js-request").fadeIn();
})
$(".js-reserve-space-dtn").on('click', function() {
    $(".js-reserve-space-dtn").removeClass('active');
    $(this).addClass('active')
})
$(".js-reserve-need-dtn").on('click', function() {
    $(".js-reserve-need-dtn").removeClass('active');
    $(this).addClass('active')
})
window.onload = function() {
    $('.js-adult-dropdown').addClass('active')
    $('.js-children-dropdown').addClass('active')
    $('.js-adult-dropdown').hide(200)
    $('.js-children-dropdown').hide(200)
 };
$(".js-adult").on('click', function() {
    if($(".js-adult-dropdown").hasClass('active')){
        $('.js-adult-dropdown').removeClass('active')
        $('.js-adult-dropdown').show(200)  
    }
    else{
        $('.js-adult-dropdown').addClass('active')
        $('.js-adult-dropdown').hide(200)
    }
    
})
$(".js-children").on('click', function() {
    if($(".js-children-dropdown").hasClass('active')){
        $('.js-children-dropdown').removeClass('active')
        $('.js-children-dropdown').show(200)  
    }
    else{
        $('.js-children-dropdown').addClass('active')
        $('.js-children-dropdown').hide(200)
    }
    
})