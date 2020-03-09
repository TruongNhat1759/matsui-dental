// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.slider();
			this.Customscroll();
			this.tab();
		},
		
		slider : function(){
			$('.idx-slide').slick({
				dots: true,
				autoplay: true,
				arrows: false,
				slidesToShow: 1,
        slidesToScroll: 1,
				pauseOnHover: false,
				autoplaySpeed: 5000,
				infinite: true,
				speed: 800,
				fade: true,
				touchMove: true
			});
		},

		Customscroll : function(){
			$('.b04-box').mCustomScrollbar({
				theme:"dark"
			});
		},

		tab : function(){
			$('ul.tabs li').click(function(){
				var tab_id = $(this).attr('data-tab');

				$('ul.tabs li').removeClass('current');
				$('.tab-content').removeClass('current');

				$(this).addClass('current');
				$("#"+tab_id).addClass('current');
			})
		},
		
	};
	
	obj.init();
	
});