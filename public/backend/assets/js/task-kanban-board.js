(function () {
    "use strict"

    dragula([document.querySelector('#new-tasks-draggable'), document.querySelector('#todo-tasks-draggable'), document.querySelector('#inprogress-tasks-draggable'), document.querySelector('#inreview-tasks-draggable'), document.querySelector('#completed-tasks-draggable')]);

    document.querySelector('.task-null-background').setAttribute('draggable', 'false');

    const myElement1 = document.getElementById('new-tasks');
    if(myElement1) {
        new SimpleBar(myElement1, { autoHide: true });
    }

    const myElement2 = document.getElementById('todo-tasks');
    if(myElement2) {
        new SimpleBar(myElement2, { autoHide: true });
    }

    const myElement3 = document.getElementById('inprogress-tasks');
    if(myElement3) {
        new SimpleBar(myElement3, { autoHide: true });
    }

    const myElement4 = document.getElementById('inreview-tasks');
    if(myElement4) {
        new SimpleBar(myElement4, { autoHide: true });
    }

    const myElement5 = document.getElementById('completed-tasks');
    if(myElement5) {
        new SimpleBar(myElement5, { autoHide: true });
    }


    document.addEventListener("DOMContentLoaded", () => {
        // Function to handle task-null class and button visibility
        const handleTaskNull = (ele) => {
            if (ele) {
                const viewBtn = document.querySelector(`#${ele.getAttribute("data-view-btn")}`);
                if(viewBtn) {
                    const sibling = viewBtn ? viewBtn.nextElementSibling : null;
                }

                // Check if the only child is the task-null-background image (ignore it)
                const children = Array.from(ele.children).filter(child => !child.classList.contains('task-null-background'));

                if (children.length === 0) {
                    ele.classList.add("task-Null");
                    if (sibling) sibling.classList.add("d-none");
                } else {
                    ele.classList.remove("task-Null");
                    if (sibling) sibling.classList.remove("d-none");
                }
            }
        };

        // Array of task containers
        let taskContainers = [
            document.querySelector('#new-tasks-draggable'),
            document.querySelector('#todo-tasks-draggable'),
            document.querySelector('#inprogress-tasks-draggable'),
            document.querySelector('#inreview-tasks-draggable'),
            document.querySelector('#completed-tasks-draggable')
        ];

        // Apply the function to each task container
        taskContainers.forEach(handleTaskNull);

        // You can reduce the interval time, or trigger this manually in certain events
        setInterval(() => {
            taskContainers.forEach(handleTaskNull);
        }, 1000);  // 1000ms interval (1 second)

    });

    /* multi select with remove button */
    const multipleCancelButton = new Choices(
        '#choices-multiple-remove-button1',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );
    const multipleCancelButton1 = new Choices(
        '#choices-multiple-remove-button2',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );

    /* TargetDate Picker */
    flatpickr("#targetDate", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    });

    /* filepond */
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageExifOrientation,
        FilePondPluginFileValidateSize,
        FilePondPluginFileEncode,
        FilePondPluginImageEdit,
        FilePondPluginFileValidateType,
        FilePondPluginImageCrop,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    /* multiple upload */
    const MultipleElement = document.querySelector('.multiple-filepond');
    if (MultipleElement) FilePond.create(MultipleElement,);

})();