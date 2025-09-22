(function () {
    "use strict";

    // comments scroll
    const blogDetailsComments = document.getElementById("blog-details-comment-list");
    if(blogDetailsComments) {
        new SimpleBar(blogDetailsComments, { autoHide: true });
    }
    // comments scroll

})()