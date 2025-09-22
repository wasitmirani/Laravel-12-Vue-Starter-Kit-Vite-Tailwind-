(function () {
    "use strict";

    const lightboxVideo = GLightbox({
        selector: '.glightbox'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {

        const { slideIndex, slideNode, slideConfig, player } = current;
    });

})();