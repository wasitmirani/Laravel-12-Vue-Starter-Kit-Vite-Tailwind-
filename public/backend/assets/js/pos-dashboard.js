
/* stocks swiper */
const swiper = new Swiper(".pos-orders-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
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
        1600: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
/* stocks swiper */

/* For Card Active */
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.nft-tag');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            cards.forEach(function(c) {
                c.classList.remove('active');
            });
            card.classList.add('active');
        });
    });
});
/* For Card Active */

/* Isotope Layout Js */
// document.addEventListener("DOMContentLoaded", function (e) { 
    const listWrapper = document.querySelector(".list-wrapper");
    let isotope;
    if (listWrapper) {
        setTimeout(() => {
            isotope = new Isotope(listWrapper, {
                itemSelector: ".card-item",
                // layoutMode: 'fitRows',
            });
        }, 100);
    }
    const categoriesFilter = document.querySelectorAll(".pos-category");
    if (categoriesFilter.length > 0) {
        categoriesFilter.forEach(function (filter) {
            filter.addEventListener("click", function (event) {
                if (event.target.matches(".categories")) {
                    const filterValue = event.target.getAttribute("data-filter");
                    if (filterValue) {
                        isotope.arrange({ filter: filterValue });
                    }
                }
            });
        });
    }
// });
/* Isotope layout Js */


document.querySelectorAll("#switcher-boxed , #switcher-full-width ,#switcher-default-width, #reset-all").forEach((element)=>{
    element.addEventListener("click",()=>{
        setTimeout(() => {
            let listWrapper = document.querySelector(".list-wrapper");
            if (listWrapper) {
                new Isotope(listWrapper, {
                    itemSelector: ".card-item",
                });
            }
        }, 100);
    })
})
