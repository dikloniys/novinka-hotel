$('.js-header-burgher-menu').on('click' , function(e) {
    if($('.js-header-burgher-menu').hasClass('js-burgher-open') === false){
        $('.js-header-burgher-menu').addClass('color active js-burgher-open')
        $('.js-header-burgher-list').addClass('active js-burgher-open')
        $('.js-header-nav').fadeIn()
        $(".js-scroll-check").addClass("fixed")
        $(".js-header_button").addClass("active")
    }else{
        if($(window).scrollTop() < $(".js-first-block").height()){
            $('.js-header-burgher-menu').removeClass('active js-burgher-open')
            $('.js-header-burgher-list').removeClass('active js-burgher-open')
            $('.js-header-nav').fadeOut()
            setTimeout(function(){$(".js-scroll-check").removeClass("fixed");$('.js-header-burgher-menu').removeClass('color')},400);
            
        }
        headerScrollCheck()
        $('.js-header-burgher-menu').removeClass('active js-burgher-open')
        $('.js-header-burgher-list').removeClass('active js-burgher-open')
        $('.js-header-nav').fadeOut()
    }
}) 
$('.js-fadeOut').on('click' , function(e) {
        $('.js-header-burgher-menu').fadeIn()
        
}) 

$('.js-dropdown').on('click' , function(e) {
    if($(window).width() <= 1100){
        if($(this).hasClass('js-dropdown js-open')){
            $(this).children('.js-dropdown-accordion-title').removeClass('active')
            $(this).children('.js-border').removeClass('active')
            $(this).children('.js-dropdown-submenu').hide(200)
            $('.js-dropdown').removeClass('js-open')
            setTimeout($(this).children('.js-dropdown-submenu').removeClass('js-closed'),4000)
            return true
        }
         if(!($(this).hasClass('js-dropdown js-open'))){
            $('.js-dropdown').removeClass('js-open')
            $('.js-dropdown-accordion-title').removeClass('active')
            $('.js-border').removeClass('active')
            $('.js-dropdown-submenu').hide(200)
            setTimeout($('.js-dropdown-submenu').removeClass('js-closed'),4000)
            $(this).children('.js-dropdown-submenu').show(200)
            $(this).addClass('js-open')
            $(this).children('.js-dropdown-accordion-title').addClass('active')
            $(this).children('.js-border').addClass('active')
            return true
        }
    }
})