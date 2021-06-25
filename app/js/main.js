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

	(function () {
		var s = document['createElement']('script');
		s.type = 'text/javascript';
		s.async = true;
		s.charset = 'utf-8';
		s.src = '//cleversite.ru/cleversite/widget_new.php?supercode=1&referer_main=' + encodeURIComponent(document.referrer) + '&clid=104206yQbai&siteNew=134551';
		var ss = document['getElementsByTagName']('script')[0];
		if (ss) {
			ss.parentNode.insertBefore(s, ss);
		} else {
			document.documentElement.firstChild.appendChild(s);
		};
	})();

});



