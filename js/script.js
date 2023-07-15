$('.burger-menu').click(function (event) {
	$('.burger-menu, .menu__body').toggleClass('_active')
	$('body').toggleClass('_lock')
})
$('.news__filter span').click(function () {
	$('.news__filter span').removeClass('_active')
	$(this).addClass('_active')
	$('.news__item').removeClass('disabled')
	if ($(this).attr('data-filter') != 'all') {
		for (let i = 0; i < $('.news__item').length; i++) {
			if ($('.news__item').eq(i).attr('data-filter') != $(this).attr('data-filter')) {
				$('.news__item').eq(i).addClass('disabled')
			}
		}
	}
})
$(document).ready(function () {
	$(".menu__body").on("click", "a", function (event) {
		$('.menu__body').removeClass('_active')
		$('.menu__burger').removeClass('_active')
		$('body').removeClass('_lock')
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top - document.querySelector('.header').clientHeight }, 1500);
	});
});