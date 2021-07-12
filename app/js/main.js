$(function () {

	// HEADER //
	$('.header__btn').on('click', function () {
		$('.header__toggle-wrapper').toggleClass('header__toggle-wrapper--active');
	});

	$(".header__link, .info__list-link").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	window.addEventListener('scroll', function () {
		let header = document.querySelector('header');
		let windowPosition = window.scrollY > 0;
		header.classList.toggle('scrolling-active', windowPosition);
	})

	$(window).scroll(function () {
		$('.header__link-viber').toggleClass('header__link-viber--active', $(this).scrollTop() > 0);
	});

	$('.header__toggle-link').on('click', function () {
		$('.header__toggle-wrapper').removeClass('header__toggle-wrapper--active');
	});

	// SLIDER //
	$('.central__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 500,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					arrows: false,
				}
			}
		]
	});

	$('.reviews__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	$('.create__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		speed: 800,
		infinite: true,
		responsive: [
			{
				breakpoint: 781,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// MIXITUP
	var mixer = mixitup('.portfolio__items', {
		animation: {
			duration: 500,
		}
	});

});