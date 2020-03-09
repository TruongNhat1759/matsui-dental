$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.smoothScroll();
            this.toTop();
            this.Gnavi();
            this.dropbox();
            this.slider_thumb();
        },

        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                var vW = $(window).width();
                $('.menu-icon').removeClass('active');
                if (vW <= 640) {
                    $('#gnavi').fadeOut('fast');
                    $('.over').removeClass('active');
                    $('.submenu').stop().slideUp();
                }
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 100
                        }, 600);
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 80
                        }, 600);
                    }
                }
                return false;
            });
            $(window).load(function () {
                var hash1 = location.hash;
                var $root = $('html, body');
                if (hash1 !== "") {
                    var top01 = $(hash1).offset().top;
                    if ($(window).width() > 640) {
                        $root.animate({
                            scrollTop: top01 - 100
                        }, 600);
                    } else {
                        $root.animate({
                            scrollTop: top01 - 80
                        }, 600);
                    }
                }
            });

        },

        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                var vW = $(window).width();
                if ($(this).scrollTop() > 100) {
                    $('#totop').fadeIn();
                    if (vW < 641) {
                        $('.f-call').addClass('show');
                    } else {
                        $('.f-call').removeClass('show');
                    }
                } else {
                    $('#totop').fadeOut();
                    $('.f-call').removeClass('show');
                }
            });
        },

        Gnavi: function () {
            $('.over').mouseenter(function () {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu').stop().slideDown();
                }
            });
            $('.over').mouseleave(function () {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu').stop().slideUp();
                }
            });
            $('.over').click(function () {
                if ($(this).hasClass('flag')) {
                    if ($(this).hasClass('active')) {
                        $('.submenu').stop().slideUp();
                        $(this).removeClass('active');
                    } else {
                        $('.over').removeClass('active');
                        $('.submenu').stop().slideUp();
                        $(this).addClass('active');
                        $(this).find('.submenu').stop().slideToggle();
                    }
                }
            });
            $('.menu-icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.over').removeClass('active');
                    $('.submenu').slideUp();
                }
                $(this).toggleClass('active');
                $('#gnavi').stop().fadeToggle('fast');
            });
            $('.close-menu').click(function () {
                $('.menu-icon, .over').removeClass('active');
                $('.submenu').removeAttr('style');
                $('#gnavi').fadeOut('fast');
            });
            $(window).bind("load resize scroll", function () {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').removeAttr('style');
                    $('.over').removeClass('flag active');
                } else {
                    $('.over').addClass('flag');
                    $('.submenu').removeAttr('style');
                }
                var Hgnav = $('body#index').length ? 745 : 450;
                var top = $(this).scrollTop();
                var widthWin = $(window).width();
                if (widthWin > 640) {
                    $('#gnavi').removeClass('fixed');
                    if (top > Hgnav) {
                        $('#gnavi').addClass('fixed');
                    } else {
                        $('#gnavi').removeClass('fixed');
                    }
                } else {
                    $('#gnavi').removeClass('fixed');
                }

            });

        },
        dropbox: function () {
            $('.drop_box > dt').click(function () {
                $(this).next('.drop_box dd').slideToggle();
            });
        },
        slider_thumb: function () {

            if ($('.event-slide').length) {
                $('.event-slide').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    asNavFor: '.event-nav',
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                            }
			}
	         ]
                });
                $('.event-nav').slick({
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    asNavFor: '.event-slide',
                    dots: false,
                    arrows: false,
                    centerMode: false,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 550,
                            settings: {
                                slidesToShow: 4,
                                infinite: true,

                                cssEase: 'linear'
                            }
			}
	  ]
                });
            }
        }

    };

    obj.init();

});
