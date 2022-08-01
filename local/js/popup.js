$(".js-contact").on('click', function() {
    $("body").css("overflow-y","hidden")
    $(".js-callback").fadeIn()
    $(".js-callback-works").fadeIn()
})
$(".js-reserve").on('click', function() {
    $("body").css("overflow-y","hidden")
    $(".js-callback").fadeIn()
    $(".js-reserve-anime").fadeIn()
})
$(".js-btn-close").on('click', function() {
    $(".js-callback").fadeOut()
    $(".js-callback-works").fadeOut() 
    $(".js-callback-confirmation").removeClass('active')
    $(".js-reserve-anime").fadeOut()
    $("body").css("overflow-y","auto")
})
$(".js-send-reservation").on('click', function(e) {
    $(".js-reserve-anime").fadeOut()
    setTimeout($(".js-request").fadeIn(),4000)
})
$(".js-reserve-space-dtn").on('click', function() {
    $(".js-reserve-space-dtn").removeClass('active')
    $(this).addClass('active')
})
$(".js-reserve-need-dtn").on('click', function() {
    $(".js-reserve-need-dtn").removeClass('active')
    $(this).addClass('active')
})
$(".js-quantity").on('click', function() {
    if($(this).hasClass('active')){
        $(this).removeClass('active')
        $(this).next().slideUp()
    }
    else{
        $(this).addClass('active')
        $(this).next().slideDown()
    }
    
})
$(".popup_list").on('click', function() {
    let id = $(this).html()
    $(this).parent().prev().attr("data-id",id)
    $(this).parent().prev().children().first().html(id)
    console.log($(this).parent().parent())
    $(this).parent().parent().removeClass('active')
    $(this).parent().slideUp()
})