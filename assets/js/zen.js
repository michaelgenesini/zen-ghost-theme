(function() {


	var nav = $('nav.navbar');
	var origOffsetY = nav.offset().top;

	function scroll() {
		if ($(window).scrollTop() >= (origOffsetY)) {
			$('main').addClass('top');
			nav.addClass('navbar-fixed-top');
			$('.back-to-top').fadeIn(500);
			$('#navbar-logo > a').css({'visibility' : 'visible',opacity: 1});
		} else {
			$('main').removeClass('top');
			nav.removeClass('navbar-fixed-top');
			$('.back-to-top').fadeOut(500);
			$('#navbar-logo > a').css({'visibility' : 'hidden',opacity: 0});
		}
	}

	//smooth scroll to top
	$('.back-to-top').click(function () {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, 500
		);
	});

	function showImages () {
		$('section img').css({opacity: 1});
	}

	document.onscroll = scroll;
	window.onload = showImages();

	$('#search-field').keypress(function (e) {
		if (e.which == 13) {
			$('#search-field').fadeIn(500);
		}
	});

	$('.hamburger').click(function () {
		$('.menu').css({'right' : '0'});
		$('header').click(function () {
			$('.menu').css({'right' : '-100%'});
		});
		$('main').click(function () {
			$('.menu').css({'right' : '-100%'});
		});
	});

	$('.hamburger-close').click(function () {
		$('.menu').css({'right' : '-100%'});
	});

}).call(this);