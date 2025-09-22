(function () {
    "use strict";
    const todoDrag = document.getElementById('todo-drag')

    if(todoDrag) {
        /* draggable js */
        dragula([todoDrag], {
            moves: function (el, container, handle) {
                return handle.classList.contains('todo-handle');
            }
        });
    }

})();