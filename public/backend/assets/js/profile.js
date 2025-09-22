(function () {
    "use strict"

    /* dropzone */
    let myDropzone = new Dropzone(".dropzone", {
        maxFiles: 1,  // Allow only 1 file to be uploaded
        addRemoveLinks: true,  // Adds a remove link to each file preview
        dictRemoveFile: 'Remove',  // Change the text on the remove button if needed
    });

    const lightboxVideo = GLightbox({
        selector: '.glightbox'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {

        const { slideIndex, slideNode, slideConfig, player } = current;
    });

})();