(function () {
    'use strict'

    // Date issued 
    flatpickr("#invoice-date-issued", {
        disableMobile: true
    });

    // Due date 
    flatpickr("#invoice-date-due", {
        disableMobile: true
    });

    // for nummber of products selected 

    let value = 1;
    const minValue = 0;
    const maxValue = 30;

    const  productMinusBtn = document.querySelectorAll(".product-quantity-minus")
    const  productPlusBtn = document.querySelectorAll(".product-quantity-plus")
    
    productMinusBtn.forEach((element) => {
        element.onclick = () => {
            value = Number(element.parentElement.childNodes[3].value);
            if (value > minValue) {
                value--;
                element.parentElement.childNodes[3].value = value;
            }
        };
    });

    productPlusBtn.forEach((element) => {
        element.onclick = () => {
            value = Number(element.parentElement.childNodes[3].value);
            if (value < maxValue) {
                value++;
                element.parentElement.childNodes[3].value = value;
            }
        };
    });

    /* dropzone */
    let myDropzone = new Dropzone(".dropzone", {
        maxFiles: 1,  // Allow only 1 file to be uploaded
        addRemoveLinks: true,  // Adds a remove link to each file preview
        dictRemoveFile: 'Remove',  // Change the text on the remove button if needed
    });

})();