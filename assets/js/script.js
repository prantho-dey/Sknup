(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/


	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	/*------------------------------------
        scrollUp
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

	// Main Slider 
	if (jQuery(".slider").length > 0) {

		let carousel_slider = $(".slider");
		carousel_slider.owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			autoplayTimeout: 5000,
		});
	
		carousel_slider.on('translate.owl.carousel', function () {
			let slideLayer = $("[data-animation]");
			slideLayer.each(function () {
				let anim_name = $(this).data('animation');
				$(this).removeClass('animated ' + anim_name).css('opacity', '0');
			});
		});
	
		carousel_slider.on('translated.owl.carousel', function () {
			let slideLayer = carousel_slider.find('.owl-item.active').find("[data-animation]");
			slideLayer.each(function () {
				let anim_name = $(this).data('animation');
				$(this).addClass('animated ' + anim_name).css('opacity', '1');
			});
		});
	
		$("[data-delay]").each(function () {
			let anim_del = $(this).data('delay');
			$(this).css('animation-delay', anim_del);
		});
	
		$("[data-duration]").each(function () {
			let anim_dur = $(this).data('duration');
			$(this).css('animation-duration', anim_dur);
		});
	};

	// Sknp Slider
	$('.skin-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	})




})(jQuery);
