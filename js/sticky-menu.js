jQuery(document).ready(function ($) {

    "use strict";

    // $(document).ready(function () {
    //     $(".card-title").click(function () {
    //         var btn_position = $(this).attr("class").match(/\d+/)[0];
    //         // console.log(btn_position);
    //         $(".cards-stack .img-" + btn_position).prependTo(".cards-stack");

    //         var li_class = $(this).attr('class');
    //         //console.log(li_class);
    //         $(".card-title").removeClass('active');
    //         var cardsec = $(this).attr("id");
    //         $(this).addClass("active");

    //         return false;
    //     });
    // });
    /**
       * Easy selector helper function
       */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }



    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('.links-holder a', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 300
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)



    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.scrollto[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 70)
                    }, 100, "easeInOutExpo");
                    return false;
                }
            }
        });
    });

    $(".modal-body li .links").click(function () {
        var set_name = $(this).text();
        $(".links-name.number").text(set_name);
        $("button.close").click();
    });

    let scroll_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#benefits",
            start: "top 90%",
            start: "top bottom",
            id: "menuSticky",
            // scrub: true,
            // markers: true,
            pin: false,
            toggleActions: "play none  reverse none ",

        }
    });

    scroll_tl.to(".target-sections", {
        // x: -(scrollVal),
        duration: 0,
        delay: 0,
        display: "block",

    });


    $("#ham-icon").click(function () {
        $('#exampleModal').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#exampleModal').modal('show');

        if ($('body').hasClass('modal-open')) {
            $('html').css('overflow', 'hidden');
        }
    });

    $("button.close").click(function () {
        if ($('body').hasClass('modal-open')) {
            $('html').css('overflow', 'auto');
        }
    });

    /* when modal is opened */


    setInterval(function () {
        $("#exampleModal ul.links-holder li").each(function () {
            if ($(this).children().hasClass("active")) {
                $(".links-name.number").text($(this).children().text());
            }
        });
    }, 100);



});

