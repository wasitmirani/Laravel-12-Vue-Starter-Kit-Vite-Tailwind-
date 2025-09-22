(function () {
    "use strict";

    /* testimonialSwiper start */
    const swiper = new Swiper(".testimonialSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
    });
    /* testimonialSwiper end */

    /* testimonialSwiper1 start */
    const swiper1 = new Swiper(".testimonialSwiper1", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
          },
    });
    /* testimonialSwiper1 end */

    /* testimonialSwiper3 Start */
    const swiper4 = new Swiper(".testimonialSwiper3", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            enabled: true,
            delay: 2000,
            disableOnInteraction: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1112: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    });
    /* testimonialSwiper3 End */

    /* testimonial swiper service start */
    const swiper2 = new Swiper(".testimonialSwiperService", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
            delay: 3000,  
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1112: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });
    /* testimonial swiper service start */
    
    /* testimonial swiper service1 start */
    const swiper3 = new Swiper(".testimonialSwiperService1", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        watchSlidesProgress: true,
        loopFillGroupWithBlank: true,
        freeMode: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1112: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });
    /* testimonial swiper service1 start */

})();