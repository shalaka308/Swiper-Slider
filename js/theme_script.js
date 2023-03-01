$(document).ready(function () {

    if ($(window).width() < 992) {
        $(".benefits-slider li").slice(2, 5).wrapAll("<div class='moreInfo'></div>");
        $(".view-more-section .view-more").click(function () {
            $(".moreInfo").slideDown();
            $(".view-more-section").fadeOut();
        });
    }
    else {
        $('ul.benefits-slider li').wrapAll('<span class="ticker-items">');
        $('ul.benefits-slider li').wrapAll('<span class="ticker-items">');
        var tickerWidth = $('ul.benefits-slider').width();
        var spanWidth = $('ul.benefits-slider span').width();
        $('ul.benefits-slider span').clone().appendTo('ul.benefits-slider');
        $('ul.benefits-slider span').wrapAll('<span class="ticker-wrapper">');

        gsap.set('.ticker-wrapper', { x: tickerWidth });

        var tl = gsap.timeline({ repeat: -1, duration: 3 });
        tl.fromTo('.ticker-wrapper', {
            x: -20,
        }, {
            x: -3320,
            duration: 100,
            ease: "sine.out",
            onComplete: function () {
                var style = window.getComputedStyle($('.ticker-wrapper')[0]);
                var matrix = new WebKitCSSMatrix(style.webkitTransform);
                if (matrix.m41 < 0 - spanWidth) {
                    gsap.set('.ticker-wrapper', { x: 0 });
                }
                this.invalidate();
            },
        }
        );

        $('ul.benefits-slider li').on('mouseenter', () => {
            tl.pause();
        });
        $('ul.benefits-slider li').on('mouseleave', () => {
            tl.play();
        });
    }

    // ----------------#card section script----------------
    // ----------------#card section script ends----------------



    $("#request_form").submit(function (e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
        var form = $(this);
        $.ajax({
            type: "POST",
            url: "./form-data.php",
            data: form.serialize(), // serializes the form's elements.
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
                $(".modal-body, .modal-footer").addClass("disabled");
            },
            success: function () {
                $(".disclaimer-txt").hide();
                $(".success-text").fadeIn();
            }
        });
    });

    $("#submit_request").click(function () {
        setInterval(function () {
            if ($(".modal-body, .modal-footer").hasClass("disabled")) {
                setTimeout(function () {
                    location.reload();
                }, 2000);
                clearInterval();
            }
        }, 100);
    });



    //cards

    $(".card-btns .cards-title").click(function () {
        $(".cards-title").removeClass("active");
        $(this).addClass("active");
        $(".ch-img,.button-holder").removeClass("active");
        var btn_position = $(this).attr("class").match(/\d+/)[0];
        // console.log(btn_position);
        $(".cards-stack .img-" + btn_position).prependTo(".cards-stack");
        if ($(this).hasClass("btn-1")) {
            $("#pros-img").addClass("active");
            $(".btn1").addClass("active");
        }
        else if ($(this).hasClass("btn-2")) {
            $("#prem-img").addClass("active");
            $(".btn2").addClass("active");
        }
        else {
            $("#fir-img").addClass("active");
            $(".btn3").addClass("active");
        }
        return false;

    });

    //Rewards Slider 
    swiperTabsNav = new Swiper('.swiper-tabs-nav', {
        spaceBetween: 50,
        slidesPerView: 1,
        loop: false,
        autoHeight: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            990: {
                spaceBetween: 1,
                slidesPerView: 5,
                navigation: {
                    enabled: true,
                },
                pagination: {
                    enabled: false,
                }
            },
            // 320: {
            //     navigation: {
            //         enabled: false,
            //     },
            //     pagination: {
            //         enabled: true,
            //     }
            // }
        },
    });

    // rewards Content
    swiperTabsContent = new Swiper('.swiper-tabs-content', {
        loop: true,
        slidesPerView: 1,
        autoHeight: false,
        centeredSlides: true,
        thumbs: {
            swiper: swiperTabsNav,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    });



    var swiper_choice = new Swiper(".choices-slider", {
        spaceBetween: 50,
        slidesPerView: 1,

        // autoplay: {
        //     delay: 3000,
        // },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            enabled: false,
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },

        breakpoints: {
            spaceBetween: 100,
            990: {

                navigation: {
                    enabled: true,
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev1',
                },
                slidesPerView: 3,
                pagination: {
                    enabled: false,
                }
            },

        },
    });



    $("ul.links-holder .links").click(function () {
        if ($(this).text() === "Variant & Pricing") {
            $("section.faq-section .variant-accordion").click();
        }
        else if ($(this).text() === "Eligibility") {
            $("section.faq-section .eligibility-accordion").click();
        }
        else {

        }
    });



    if (window.matchMedia("(max-width: 360px)").matches) {
        // Viewport is less or equal to 700 pixels wide
        jQuery(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');
        jQuery(".main-table2").clone(true).appendTo('#table-scroll2').addClass('clone');

    } else {
        // Viewport is greater than 700 pixels wide
    }


    $(".cards-title").click(function () {
        var test = $(this).attr("data-attr");
        $(".customize-dsa-area .target-btn").attr("href", test);
    });


});




