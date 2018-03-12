/* ----------------------------------------------------------------------------------------
* Author        : Ambidextrousbd
* Template Name : Abirvab | One Page Multipurpose Html Template
* File          : Abirvab main JS file
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */


/* INDEX
----------------------------------------------------------------------------------------
01. Preloader js
02. change Menu background on scroll js 
03. Navigation js
04. Smooth scroll to anchor
05. Portfolio js
06. Magnific Popup js
07. Testimonial js
08. client js
08. Skill  js
09. Google Map js
10. Ajax Contact Form js
10. fun-facts  js
10. WOW js  
10. carousel Slider js
11. Mailchimp js
-------------------------------------------------------------------------------------- */


(function ($) {
    'use strict';

    /*-------------------------------------------------------------------------*
     *                  01. Preloader js                                       *
     *-------------------------------------------------------------------------*/
    $(window).on('load', function () {
        
        $('#preloader').delay(300).fadeOut('slow', function () {
            $(this).remove();
        });

    }); // $(window).on end  
    
	/*-------------------------------------------------------------------------*
     *                  02. Back-to-top                                        *
     *-------------------------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    
    
    $('document').ready(function () {


        AOS.init();


        /*-------------------------------------------------------------------------*
         *             02. change Menu background on scroll js                     *
         *-------------------------------------------------------------------------*/
        $(window).on('scroll', function () {
            var menu_area = $('.menu-area');
            if ($(window).scrollTop() > 0) {
                menu_area.addClass('sticky-menu');
            } else {
                menu_area.removeClass('sticky-menu');
            }
        }); // $(window).on('scroll' end


        
        /*-------------------------------------------------------------------------*
         *                   03. Navigation js                                     *
         *-------------------------------------------------------------------------*/
        $('document').on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        $('body')
            .scrollspy({
                target: '.navbar-collapse',
                offset: 195
            }).on('click', '.navbar-collapse.in a', function() {
                $('.navbar-collapse.in').removeClass('in');
            });



        /*-------------------------------------------------------------------------*
         *                   04. Smooth scroll to anchor                           *
         *-------------------------------------------------------------------------*/
        $('a.smooth_scroll').on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
        });


    }); // $(document).ready end
  
  
})(jQuery);