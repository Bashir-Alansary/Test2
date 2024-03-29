/* global $, console, alert */

$(function () {
	'use strict';
	// adjust header height
	var myHeader = $('.header');
	myHeader.height($(window).height());
	$(window).resize(function () {
		myHeader.height($(window).height());
	});
	
	//links add active
	$('.navbar .links li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	// trigger the bx slider */
      $('.slider').bxSlider({
		  pager : false
	  });
	
	// smooth scroll to div
	$('.navbar li a').click(function () {
		$('html,body').animate({
			scrollTop : $('#' + $(this).data('scroll')).offset().top
		}, 1000);
	});
	
	// our auto slider code
    (function autoSlider() {
		$('.slider-testim .active').each(function () {
			if (!$(this).is(':last-child')) {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active').next().addClass('active').fadeIn();
					autoSlider();
				});
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active');
					$('.slider-testim div').eq(0).addClass('active').fadeIn();
					autoSlider();
			});
		}
		})
	}());
	
	// trigger mixitup 
	$('#container').mixItUp();
	
	// adjust shuffle links
	$('.shuffle li').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	// trigger nice scroll
	$('body').niceScroll({
		cursorcolor :'#19BC9D',
		cursorwidth : '10px',
		cursorborder : 'none',
		cursorborderradius :0,
	});
});