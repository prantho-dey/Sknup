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
		nav:true,
		navText: ['<i class="far fa-arrow-left"></i>','<i class="far fa-arrow-right"></i>'],
		dots:false,
		autoplay:true,
		autoplayTimeout:10000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			100: {
				items:1
			},
			200: {
				items:1
			},
			300:{
				items:1
			},
			400:{
				items:1
			},
			500:{
				items:1
			},
			600:{
				items:1
			},
			700:{
				items:1
			},
			800:{
				items:2
			},
			900:{
				items:2
			},
			1000:{
				items:2
			},
			1100:{
				items:2
			},
			1200:{
				items:3
			},
		}
	})

	// Scroll-top-button
	$('.scroll-top-button').click(function(){
		$('html').animate({'scrollTop':'0px'},2000) ;
	});

	$(window).scroll(function(){

		var scroll = jQuery(window).scrollTop();

		if (scroll > 300) {
			$('.scroll-top-button').show();
		}else{
			$('.scroll-top-button').hide();
		}
	});




})(jQuery);
