(function () {
    "use strict";

    const lightboxVideo1 = GLightbox({
        selector: '.glightbox'
    });

    lightboxVideo1.on('slide_changed', ({ prev, current }) => {
        const { slideIndex, slideNode, slideConfig, player } = current;
        // You can use these variables if needed
    });

    const lightboxDescription = GLightbox({
        selector: '.glightbox2'
    });

    const lightboxVideo2 = GLightbox({
        selector: '.glightbox3'
    });

    const lightboxInlineIframe = GLightbox({
        selector: '.glightbox4'
    });

})();
