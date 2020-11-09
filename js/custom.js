/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]

Project: Casino - Responsive HTML Template
Version: 1.0.0
Assigned to: TemplateBundle
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var casino = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Casino Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Search();
			this.Service_slider();
			this.Date_timepicker();
            this.Menu();
            this.Togglemenu();
            this.Slider();
            this.Wow();
			this.Partical();

        },
        /*-------------- Casino Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Search
        Search: function() {
            $(".bs_top_search i").on('click', function() {
                $(".bs_search_overlay").addClass('search_open');
            });
            $(".srch_close i").on('click', function() {
                $(".bs_search_overlay").removeClass('search_open');
            });

        },
		// Wow 
		Wow:function(){
		
			new WOW().init();
						
		},
		Service_slider: function() {
            if ($('.tc_service_slider').length > 0) {
                $('.slider-for1').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav1'
                });
                $('.slider-nav1').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for1',
                    dots: false,
                    autoplay: false,
                    arrows: false,
                    focusOnSelect: true
                });

                $('a[data-slide]').on('click', function(e) {
                    e.preventDefault();
                    var slideno = $(this).data('slide');
                    $('#color_car .slider-nav1').slick('slickGoTo', slideno - 1);
                });
            }

        },
		// Date & Time Picker
		Date_timepicker: function() {
			
			$('#datepicker').datepicker();
			
			  $('#timepicker').timepicker();
		},
		
		// Time 

        // Menu		
        Menu: function() {
            $('.sub-menu').parent().hover(function() {
                var menu = $(this).find("ul");
                var menupos = $(menu).offset();

                if (menupos.left + menu.width() > $(window).width()) {
                    var newpos = -$(menu).width();
                    menu.css({
                        left: newpos
                    });
                }
            });
        },
        // Toggle Menu
        Togglemenu: function() {
            $(".menu_btn").on('click', function() {
                $(".tc_menu").addClass('open_menu');
            });
            $(".tc_menu_close").on('click', function() {
                $(".tc_menu").removeClass('open_menu');
            });
        },

        // Main Slider
        Slider: function() {
            if ($('.tc_banner_slider').length > 0) {
                $(".tc_banner_slider").slick({
                    autoplay: true,
                    autoplaySpeed: 6000,
                    speed: 600,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    dots: false,
                    arrows: false,
                    fade:true,
                    draggable: true,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false
                        }
                    }, ]
                });
            }
        },
		
		// Partical Effects
		Partical: function(){
			if ($('#js-particles').length > 0) {
					particlesJS(
				  'js-particles', {
					'particles': {
					  'number': {
						'value': 38
					  },
					  'color': {
						'value': ['#ff223e', '#5d1eb2', '#ff7300']
					  },
					  'shape': {
						'type': 'circle'
					  },
					  'opacity': {
						'value': 1,
						'random': false,
						'anim': {
						  'enable': false
						}
					  },
					  'size': {
						'value': 3,
						'random': true,
						'anim': {
						  'enable': false,
						}
					  },
					  'line_linked': {
						'enable': false
					  },
					  'move': {
						'enable': true,
						'speed': 2,
						'direction': 'none',
						'random': true,
						'straight': false,
						'out_mode': 'out'
					  }
					},
					'interactivity': {
					  'detect_on': 'canvas',
					  'events': {
						'onhover': {
						  'enable': false
						},
						'onclick': {
						  'enable': false
						},
						'resize': true
					  }
					},
					'retina_detect': true
				});
			}
			
		}

		

    };
    $(document).ready(function() {

        casino.init();

    });
    // Preloader Js
    jQuery(window).on('load', function() {
        setTimeout(function() {
            $('body').addClass('loaded');

        }, 500);
    });

    // Window Scroll
    $(window).scroll(function() {
        var wh = window.innerWidth;
        //Go to top
        if ($(this).scrollTop() > 100) {
            $('.tc_so_icons').addClass('showicons');
        } else {
            $('.tc_so_icons').removeClass('showicons');
        }
		
		//
		if (wh > 767) {
            var h = window.innerHeight;
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 100) {
                $('.tc_menu_wrapper').addClass('tc_fixed');
            } else {
                $('.tc_menu_wrapper').removeClass('tc_fixed');
            }
        }
		
		

    });




})(jQuery);