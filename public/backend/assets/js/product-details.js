(function () {
    'use strict';

    const swiper = new Swiper(".swiper-view-details", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".swiper-preview-details", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        }
    });

})();