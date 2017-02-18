//Efekt Smooth Scroll
'use strict';
$('a[href*="#"]:not([href="#"])').click(function () {
	$('body').animate({
		scrollTop: $(this.hash).offset().top - 71
	}, 500);
})