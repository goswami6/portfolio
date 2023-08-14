/*global jQuery */
(function ($) {
    "use strict";
    // All Document Ready Function
    jQuery(document).ready(function ($) {
        /*---------------------
         Preloader
        --------------------- */
        $('body').addClass('preloader-active');

        /*---------------------------------
         All Window Scroll Function Start
        --------------------------------- */
        $(window).scroll(function () {
            // Scroll up
            if ($(window).scrollTop() >= 400) {
                $('div#scroll').slideDown(600);
            } else {
                $('div#scroll').slideUp(600);
            }

            // Header Fix Js Here
            if ($(window).scrollTop() >= 220) {
                $('#header-area').addClass('fixtopmenu');
            } else {
                $('#header-area').removeClass('fixtopmenu');
            }
        });

        /*--------------------------------
         All Window Scroll Function End
        ---------------------------------*/

        /*---------------------
         Smooth Scroll
        --------------------- */
        $('.main-menu ul li a[href*="#"]:not([href="#"])').on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1500);
                    return false;
                }
            }
        });

        /*---------------
        Back to Top
        -----------------*/
        $('div#scroll a').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);

            return false;
        });

        /*------------------
        Tooltip JS Hare
        --------------------*/
        $('[data-toggle="tooltip"]').tooltip();

        /*----------------
        Menu Js Here
        -----------------*/
        $(".open-btn").on("click", function () {
            $(".off-canvas-menu").addClass("active");
        });

        $(".menu-close-btn, .main-menu ul li a").on("click", function () {
            $(".off-canvas-menu").removeClass("active");
        });

        /*---------------------
         WOW js Active
        --------------------- */
        /*global WOW*/
        new WOW().init({
            mobile: false
        });

        /*---------------------
         Skillbar js
        --------------------- */
        $('.skillbar').each(function () {
            $(this).appear(function () {
                $(this).find('.count-bar').animate({
                    width: $(this).attr('data-percent')
                }, 1200);
                var percent = $(this).attr('data-percent');
                $(this).find('.count').html('<span>' + percent + '</span>');
            });
        });

        /*--------------------
         MagnificPopup
        ---------------------*/
        $(".image-link").magnificPopup({
            type: 'image',
            alignTop: false
        });

        /*--------------------
         Testimonial Active
        ---------------------*/
        $('.testimonail-content').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            animateIn: 'zoomIn',
            animateOut: 'zoomOut'

        });

        /*---------------------
         Single Portfolio
        --------------------- */
        $('.portfolios-thumbnail').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: false,
            autoplay: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

        });


        // Contact Form JS

        // Name Input
        $('.name-input .form-group input').focus(function () {
            $(this).parent().addClass('name_small');
        }).blur(function () {
            if ($('#name').val().length > 0) {

            } else {
                $(this).parent().removeClass('name_small');
            }
        });

        // Email Input
        $('.email-input .form-group input').focus(function () {
            $(this).parent().addClass('email_small');
        }).blur(function () {
            if ($('#email').val().length > 0) {

            } else {
                $(this).parent().removeClass('email_small');
            }
        });

        // Textarea Input
        $('.textarea-input .form-group textarea').focus(function () {
            $(this).parent().addClass('textarea_small');
        }).blur(function () {
            if ($('#message').val().length > 0) {

            } else {
                $(this).parent().removeClass('textarea_small');
            }
        });

        // Menu Js Here
        $(".open-btn").on("click", function () {
            $(".off-canvas-menu").addClass("active");
        });

        $(".menu-close-btn, .main-menu ul li a").on("click", function () {
            $(".off-canvas-menu").removeClass("active");
        });

        /*--------------------
         Portfolio Isotope
        ---------------------*/
        $(".portfolio-gird").isotope();

        $(".portfolio-menu ul li span").on('click', function () {

            $(".portfolio-menu ul li span").removeClass('active');
            $(this).addClass('active');

            var filterValue = $(this).attr('data-filter');
            $(".portfolio-gird").isotope({
                filter: filterValue
            });
        });
    }); //Ready Function

    // All Window Load Function
    jQuery(window).load(function () {
        jQuery('.preloader').fadeOut();
        jQuery('.preloader-spinner').delay(350).fadeOut('slow');
        jQuery('body').removeClass('preloader-active');
    });

}(jQuery));
