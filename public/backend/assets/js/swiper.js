(function () {
    'use strict';

    // deault swiper
    const swiper = new Swiper(".swiper-basic", {
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        }
    });

    // swiper with navigation
    const swiper1 = new Swiper(".swiper-navigation", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
    });

    // swiper with pagination
    const swiper2 = new Swiper(".pagination", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // dynamic pagination
    const swiper3 = new Swiper(".pagination-dynamic", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // pagination with progress
    const swiper4 = new Swiper(".pagination-progress", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // pagination fraction
    const swiper5 = new Swiper(".pagination-fraction", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // custom pagination
    const swiper6 = new Swiper(".custom-pagination", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // scrollbar swiper
    const swiper7 = new Swiper(".scrollbar-swiper", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // vertical swiper
    const swiper8 = new Swiper(".swiper-vertical", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // mouse wheel control
    const swiper9 = new Swiper(".vertical-mouse-control", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // keyboard control
    const swiper10 = new Swiper(".keyboard-control", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // nested swiper
    const swiper11 = new Swiper(".swiper-horizontal1", {
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    const swiper12 = new Swiper(".swiper-vertical1", {
        direction: "vertical",
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // effect cube
    const swiper13 = new Swiper(".swiper-effect-cube", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // swiper fade
    const swiper14 = new Swiper(".swiper-fade", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // swiper flip
    const swiper15 = new Swiper(".swiper-flip", {
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // swiper overflow
    const swiper16 = new Swiper(".swiper-overflow", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "4",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

    // thumbs gallery
    const swiper17 = new Swiper(".swiper-view", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper18 = new Swiper(".swiper-preview", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper17,
        },
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });

})();