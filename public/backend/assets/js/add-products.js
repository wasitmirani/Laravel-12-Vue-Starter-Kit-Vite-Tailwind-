(function () {
    "use strict"

    // for color selection
    const multipleCancelButton = new Choices('#product-color-add',{
        allowHTML: true,
        removeItemButton: true,
    });

    // for product tags
    const  textUniqueVals = new Choices('#choices-text-preset-values', {
        allowHTML: true,
        paste: false,
        duplicateItemsAllowed: false,
        editItems: true,
    });

    // for product features
    const toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
        ['clean']                                         // remove formatting button
    ];
    const quill = new Quill('#product-features', {
        modules: {toolbar: toolbarOptions},
        theme: 'snow'
    });

    // for publish date picker
    flatpickr("#publish-date", {});

    // for publish time
    flatpickr("#publish-time", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
    });

    // for product images upload
    const MultipleElement1 = document.querySelector('.product-Images');
    if(MultipleElement1)  FilePond.create(MultipleElement1,);

    // for documents upload
    const MultipleElement = document.querySelector('.product-documents');
    if(MultipleElement) FilePond.create(MultipleElement,);

})();