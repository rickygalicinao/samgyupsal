
// PRELOADER
$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(10).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(10).css({
		'display': 'visible'
	});
})


// SCROLL TO TOP
var btn = $('#button-to-top');
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, '300');
});