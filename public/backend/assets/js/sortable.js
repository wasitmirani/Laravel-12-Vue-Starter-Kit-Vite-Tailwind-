(function () {
    "use strict";

    /* simple sortable */
    const simple = document.getElementById('simple-list');
    if (simple) {
        new Sortable(simple, {
            animation: 150,
        });
    }
    /* simple sortable */

    /* shared sortable */
    const sharedLeft = document.getElementById('shared-left');
    if(sharedLeft) {
        new Sortable(sharedLeft, {
            group: 'shared',
            animation: 150
        });
    }
    const sharedRight = document.getElementById('shared-right');
    if (sharedRight) {
        new Sortable(sharedRight, {
            group: 'shared',
            animation: 150
        });
    }
    /* shared sortable */

    /* cloning */
    const cloningLeft = document.getElementById('cloning-left');
    if(cloningLeft) {
        new Sortable(cloningLeft, {
            group: {
                name: 'shared',
                pull: 'clone' // To clone: set pull to 'clone'
            },
            animation: 150
        });
    }
    const cloningRight = document.getElementById('cloning-right');
    if(cloningRight) {
        new Sortable(cloningRight, {
            group: {
                name: 'shared',
                pull: 'clone'
            },
            animation: 150
        });
    }
    /* cloning */

    /* disabling sorting */
    const disablingSortingLeft = document.getElementById('disabling-sorting-left');
    if(disablingSortingLeft) {
        new Sortable(disablingSortingLeft, {
            group: {
                name: 'shared',
                pull: 'clone',
                put: false // Do not allow items to be put into this list
            },
            animation: 150,
            sort: false // To disable sorting: set sort to false
        });
    }

    const disablingSortingRight = document.getElementById('disabling-sorting-right');
    if(disablingSortingRight) {
        new Sortable(disablingSortingRight, {
            group: 'shared',
            animation: 150
        });
    }
    /* disabling sorting */

    /* sorting with handle */
    const sortingWithHandle = document.getElementById('sorting-with-handle');
    if(sortingWithHandle) {
        new Sortable(sortingWithHandle, {
            handle: '.handle', // handle's class
            animation: 150
        });
    }
    /* sorting with handle */

    /* sorting with filter */
    const sortingWithFilter = document.getElementById('sorting-with-filter');
    if(sortingWithFilter) {
        new Sortable(sortingWithFilter, {
            filter: '.filtered', // 'filtered' class is not draggable
            animation: 150
        });
    }
    /* sorting with filter */

    /* sortable grid */
    const grid = document.getElementById('sortable-grid');
    if(grid) {
        new Sortable(grid, {
            animation: 150,
        });
    }
    /* sortable grid */

    /* nested sortable */
    const nestedSortables = [].slice.call(document.querySelectorAll('.nested-sortable'));
    if(nestedSortables) {
        for (let i = 0; i < nestedSortables.length; i++) {
            new Sortable(nestedSortables[i], {
                group: 'nested',
                animation: 150,
                fallbackOnBody: true,
                swapThreshold: 0.65
            });
        }
    }
    /* nested sortable */

    /* multi drag */
    const multiDragDemo = document.getElementById('multiple-drag');
    if(multiDragDemo) {
        new Sortable(multiDragDemo, {
            multiDrag: true, // Enable multi-drag
            selectedClass: 'selected', // The class applied to the selected items
            fallbackTolerance: 3, // So that we can select items on mobile
            animation: 150
        });
    }
    /* multi drag */

    /* swap */
    const swapDemo = document.getElementById('sortable-swap');
    if(swapDemo) {
        new Sortable(swapDemo, {
            swap: true, // Enable swap plugin
            swapClass: 'highlight', // The class applied to the hovered swap item
            animation: 150
        });
    }
    /* swap */

})();