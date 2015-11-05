'use strict';

var pages = {
	homeInit: function() {
		$('#send-message').click(function() {
			$('#contact-form').addClass('flipInX').removeClass('flipOutX').css('display', 'block');
			$(this).css('display', 'none');
		});

		$('#send-message').mouseenter(function() {
			$(this).addClass('pulse');
		});

		$('#send-message').mouseleave(function() {
			$(this).removeClass('pulse');
		});

		$('#main-logo').mouseenter(function() {
			console.log('enter')
			$(this).addClass('pulse');
		});

		$('#main-logo').mouseleave(function() {
			$(this).removeClass('pulse');
		});

		$('#cancel-contact').click(function() {
			$('#contact-form').addClass('flipOutX');
			$('#send-message').css('display', 'block');
		});
	}
};