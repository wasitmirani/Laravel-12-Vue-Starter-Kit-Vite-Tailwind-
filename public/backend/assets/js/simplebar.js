(function () {
    "use strict";
    
    const myElement = document.getElementById('sidebar-scroll');
    if(myElement) {
        new SimpleBar(myElement, { autoHide: true });
    }
    
})();