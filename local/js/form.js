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
	$(document).on('focusout' , 'input', function(e) { 
		var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
		if(this.value==""){	
			$(this).addClass('erorr')
			if(this.name=="name"){
				$(this).next().html('Введите ваше имя')
			}
			if(this.name=="phone"){
				$(this).next().html('Введите ваш телефон')
			}
			if(this.name=="email"){
				$(this).next().html('Введите ваш email')
			}
		}
		if(this.value!==""){
			if(this.name=="name"){
				$(this).next().html('')
			}
			if(this.name=="phone"){
				$(this).addClass('erorr')
				$(this).next().html("Введите ваш телефон до конца");
				if($(this).val().length == 18){
					$(this).removeClass('erorr')
					$(this).next().html('')
				}
			}
			if(this.name=="email"){
				$(this).addClass('erorr')
				$(this).next().html('Введите ваш email')
				if($(this).val().search(pattern) == 0){
					$(this).removeClass('erorr')
					$(this).next().html('')
				}
			}
		}
	});
	$(document).on('click' , 'input', function(e) { 
			$(this).removeClass('erorr')
	});
});
$('[name="phone"]').mask("+7 (000) 000-00-00");




