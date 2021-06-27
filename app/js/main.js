$(function () {

	$('.header__btn').on('click', function () {
		$('.header__btn').toggleClass('header__btn--active');
		$('.header__link').toggleClass('header__link--active');
	});

	$(".header__link").on("click", function (event) {
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
		$('.central__link-icon').toggleClass('central__link-icon--active', $(this).scrollTop() > 0);
	});

	$('.central__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 500,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	var mixer = mixitup('.portfolio__items', {
		animation: {
			duration: 500,
			nudge: false,
			reverseOut: false,
			effects: "fade"
		}
	});

});



