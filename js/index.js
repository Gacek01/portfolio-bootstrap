//Efekt Smooth Scroll
'use strict';
$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		$('body').animate({
			scrollTop: $(this.hash).offset().top - 71
		}, 500);
	});
	//Efekt Nav-Bar Transparency
	$(window).scroll(function () {
		if ($(window).scrollTop() > 71) {
			$('#main-nav').css({
				"opacity": "1"
				, "transition-duration": "2s"
			})
		}
		else {
			$('#main-nav').css({
				"opacity": "0.6"
				, "transition-duration": "2s"
			})
		}
	})
	window.sr = ScrollReveal().reveal("[class*=col-], .row, row>h2");
	sr.reveal('figure', {
		duration: 2000
	}, 300);
})