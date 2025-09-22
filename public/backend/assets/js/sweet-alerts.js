(function () {
    'use strict';

    /* for basic sweet alert */
    const basicAlertBtn = document.getElementById('basic-alert');
    if (basicAlertBtn) {
        basicAlertBtn.onclick = function () {
            Swal.fire('Hello, this is a basic alert message!');
        };
    }
    const alertTextBtn = document.getElementById('alert-text');
    if (alertTextBtn) {
        alertTextBtn.onclick = function () {
            Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
            );
        };
    }
    const alertFooterBtn = document.getElementById('alert-footer');
    if (alertFooterBtn) {
        alertFooterBtn.onclick = function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="javascript:void(0);">Why do I have this issue?</a>'
            });
        };
    }
    const longWindowBtn = document.getElementById('long-window');
    if (longWindowBtn) {
        longWindowBtn.onclick = function () {
            Swal.fire({
                title: 'Scrollable Image Alert',
                text: 'This alert contains a tall image for testing scroll behavior.',
                imageUrl: 'https://placeholder.pics/svg/300x1500',
                imageHeight: 1500,
                imageAlt: 'A tall image'
            });
        };
    }
    
    const alertDescriptionBtn = document.getElementById('alert-description');
    if (alertDescriptionBtn) {
        alertDescriptionBtn.onclick = function () {
            Swal.fire({
                title: '<strong>HTML <u>example</u></strong>',
                icon: 'info',
                html: `
                    You can use <b>bold text</b>, 
                    <a href="https://sweetalert2.github.io/" target="_blank">links</a>, 
                    and other HTML tags.
                `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fe fe-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText: '<i class="fe fe-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
            });
        };
    }

    const threeButtonsBtn = document.getElementById('three-buttons');
    if (threeButtonsBtn) {
        threeButtonsBtn.onclick = function () {
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success');
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info');
                }
                // No action for cancel
            });
        };
    }

    const alertDialogBtn = document.getElementById('alert-dialog');
    if (alertDialogBtn) {
        alertDialogBtn.onclick = function () {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        };
    }

    const alertConfirmBtn = document.getElementById('alert-confirm');
    if (alertConfirmBtn) {
        alertConfirmBtn.onclick = function () {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    );
                }
            });
        };
    }

    const alertParameterBtn = document.getElementById('alert-parameter');
    if (alertParameterBtn) {
        alertParameterBtn.onclick = function () {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success ms-2',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            });
    
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    );
                }
            });
        };
    }
    
    const alertImageBtn = document.getElementById('alert-image');
    if (alertImageBtn) {
        alertImageBtn.onclick = function () {
            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: '../assets/images/media/media-59.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image'
            });
        };
    }

    const alertCustomBgBtn = document.getElementById('alert-custom-bg');
    if (alertCustomBgBtn) {
        alertCustomBgBtn.onclick = function () {
            Swal.fire({
                title: 'Custom width, padding, color, background.',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: 'url(../assets/images/media/media-19.jpg)',
                backdrop: `
                    rgba(0,0,0,0.3)
                    url(../assets/images/gif%27s/1.gif)
                    left top
                    no-repeat
                `
            });
        };
    }

    const alertAutoCloseBtn = document.getElementById('alert-auto-close');
    if (alertAutoCloseBtn) {
        alertAutoCloseBtn.onclick = function () {
            let timerInterval;

            Swal.fire({
                title: 'Auto close alert!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector('b');
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('Alert closed automatically by timer');
                }
            });
        };
    }

    const alertAjaxBtn = document.getElementById('alert-ajax');
    if (alertAjaxBtn) {
        alertAjaxBtn.onclick = function () {
            Swal.fire({
                title: 'Submit your Github username',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Look up',
                showLoaderOnConfirm: true,
                preConfirm: (login) => {
                    return fetch(`https://api.github.com/users/${login}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`User not found`);
                            }
                            return response.json();
                        })
                        .catch(error => {
                            Swal.showValidationMessage(`Request failed: ${error}`);
                        });
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed && result.value) {
                    Swal.fire({
                        title: `${result.value.login}'s Avatar`,
                        imageUrl: result.value.avatar_url,
                        imageAlt: 'User avatar'
                    });
                }
            });
        };
    }

})();