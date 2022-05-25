$('.js-header-burgher-menu').on('click' , function(e) {
    if($('.js-header-burgher-menu').hasClass('js-burgher-open') === false){
        $('.js-header-burgher-menu').addClass('active js-burgher-open')
        $('.js-header-burgher-list').addClass('active js-burgher-open')
        $('.js-header-nav').fadeIn()
        $(".js-scroll-check").addClass("fixed");
        $(".js-scroll-check").addClass("active");
        $(".js-header_button").addClass("active");
    }else{
        if($(window).scrollTop() < $(".js-first-block").height()){
            $(".js-scroll-check").removeClass("fixed");
            
        }
        headerScrollCheck()
        $(".js-header-nav").hide(200)
        $('.js-header-burgher-menu').removeClass('active js-burgher-open')
        $('.js-header-burgher-list').removeClass('active js-burgher-open')
        $('.js-header-nav').fadeOut()
        $(".js-scroll-check").removeClass("active");
    }
}) 
$('.js-fadeOut').on('click' , function(e) {
        $('.js-header-burgher-menu').fadeIn()
        
}) 
$('.js-dropdown').on('click' , function(e) {
    if($('.js-dropdown-submenu').hasClass('js-open') === false){
        $('.js-dropdown-submenu').show(200)
        $('.js-dropdown-submenu').addClass('js-open')
        $('.js-dropdown-accordion-title').addClass('active')
    }else{
        $('.js-dropdown-accordion-title').removeClass('active')
        $('.js-dropdown-submenu').hide(200)
        $('.js-dropdown-submenu').removeClass('js-open')
        setTimeout($('.js-dropdown-submenu').removeClass('js-closed'),4000)
    }
}) 
