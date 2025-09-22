(function () {
    'use strict';

    let loadFile = function (event) {
        const reader = new FileReader();
        reader.onload = function () {
            const output = document.getElementById('profile-img');
            if (event.target.files[0].type.match('image.*')) {
                if(output) {
                    output.src = reader.result;
                }
            } else {
                event.target.value = '';
                alert('please select a valid image');
            }
        };
        if(event.target.files[0]){
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    // for personal information language
    const multipleCancelButton = new Choices(
        '#language',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );

    // for mail language
    const multipleCancelButton1 = new Choices(
        '#mail-language',
        {
            allowHTML: true,
            removeItemButton: true,
        }
    );

    // for profile photo update
    let ProfileChange = document.querySelector('#profile-change');
    if(ProfileChange) ProfileChange.addEventListener('change', loadFile);

})();