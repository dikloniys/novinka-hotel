$(function() {
    let header = $('.header');
    $(window).scroll(function() {
    if($(this).scrollTop() > 105) {
    header.addClass('fixed');
    } else {
    header.removeClass('fixed');
    }
    });
});
$(function(){
    let CurrentScroll = 0;
    $(window).scroll(function(){
        let NextScroll = $(this).scrollTop();
        let hidden = $('.header_nav');
        let button = $('.js-header_button');
        if (NextScroll > CurrentScroll){
            
            if($(this).scrollTop() > 105) {
                hidden.addClass('fixed_hidden');
                button.removeClass('button_transparent');
                button.addClass('button');

                } else {
                    hidden.removeClass('fixed_hidden');
                    button.addClass('button_transparent');
                    button.removeClass('button');
                }
        }
        else {
            hidden.removeClass('fixed_hidden');
            if($(this).scrollTop() > 105) {
                button.removeClass('button_transparent');
                button.addClass('button');

                }
                else {
            button.addClass('button_transparent');
            button.removeClass('button');
        }
        }

        CurrentScroll = NextScroll;
    });
});