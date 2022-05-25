$(document).ready(function() {
	$(document).on('submit' , '.popup_form', function(e) { 
		e.preventDefault()
		$('.js-erorr-name').text("")
		$('.js-erorr-phone').text("");
		$(this.name).removeClass('erorr')
		$(this.phone).removeClass('erorr')
		if(this.name.value == ''){
			$('.js-erorr-name').text("Введите ваше имя");
			$(this.name).addClass('erorr')
		}
		if(this.phone.value == ''){
			$('.js-erorr-phone').text("Введите ваш телефон");
			$(this.phone).addClass('erorr')
		}
		else if(this.phone.value.length != 18){
			$('.js-erorr-phone').text("Введите ваш телефон до конца");
			$(this.phone).addClass('erorr')
		}
		if($('.js-erorr-name').text() == '' && $('.js-erorr-phone').text() == '' && $('.js-erorr-checkbox').text() == ''){
			$("body").css("overflow-y","hidden");
			$(".js-callback").addClass('active');
			$(".js-callback-confirmation").addClass('active');
			$(document).ready(function()
			{
				var _Seconds = 20;
				$('.js-popup_timer').text(_Seconds)
				
				setInterval(function()
				{
					if(seconds !== 0){
						seconds = seconds - 1
						$('.js-popup_timer').text(seconds);
					} else{
						return
					}
				}, 1000);
			});
			setTimeout(function(){
				$(".js-callback").removeClass('active');
				$(".js-callback-works").removeClass('active');
				$(".js-callback-confirmation").removeClass('active');
				$("body").css("overflow-y","auto");
			}, 20000);
		$('.popup_form')[0].reset();
		}
	});
});
$('[name="phone"]').mask("+7 (000) 000-00-00");

