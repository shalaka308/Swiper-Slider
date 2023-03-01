$(document).ready(function () {



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




