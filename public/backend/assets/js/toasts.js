
// Helper function to show Bootstrap Toast
function showBootstrapToast(toastElement) {
	const toast = new bootstrap.Toast(toastElement);
	toast.show();
}

// Function to add event listener to a button for Bootstrap Toasts
function addToastEventListener(buttonId, toastId) {
	const button = document.getElementById(buttonId);
	const toastElement = document.getElementById(toastId);
	if (button && toastElement) {
		button.addEventListener('click', () => showBootstrapToast(toastElement));
	}
}
(function () {
	'use strict';
	
    // Add event listeners for all toast buttons
    const toastConfigurations = [
        { buttonId: 'liveToastBtn', toastId: 'liveToast' },
        { buttonId: 'primaryToastBtn', toastId: 'primaryToast' },
        { buttonId: 'secondaryToastBtn', toastId: 'secondaryToast' },
        { buttonId: 'infoToastBtn', toastId: 'infoToast' },
        { buttonId: 'warningToastBtn', toastId: 'warningToast' },
        { buttonId: 'successToastBtn', toastId: 'successToast' },
        { buttonId: 'dangerToastBtn', toastId: 'dangerToast' },
        { buttonId: 'solidprimaryToastBtn', toastId: 'solid-primaryToast' },
        { buttonId: 'solidsecondaryToastBtn', toastId: 'solid-secondaryToast' },
        { buttonId: 'solidinfoToastBtn', toastId: 'solid-infoToast' },
        { buttonId: 'solidwarningToastBtn', toastId: 'solid-warningToast' },
        { buttonId: 'solidsuccessToastBtn', toastId: 'solid-successToast' },
        { buttonId: 'soliddangerToastBtn', toastId: 'solid-dangerToast' },
        { buttonId: 'topleftToastBtn', toastId: 'topleft-Toast' },
        { buttonId: 'topcenterToastBtn', toastId: 'topcenter-Toast' },
        { buttonId: 'toprightToastBtn', toastId: 'topright-Toast' },
        { buttonId: 'middleleftToastBtn', toastId: 'middleleft-Toast' },
        { buttonId: 'middlecenterToastBtn', toastId: 'middlecenter-Toast' },
        { buttonId: 'middlerightToastBtn', toastId: 'middleright-Toast' },
        { buttonId: 'bottomleftToastBtn', toastId: 'bottomleft-Toast' },
        { buttonId: 'bottomcenterToastBtn', toastId: 'bottomcenter-Toast' },
        { buttonId: 'bottomrightToastBtn', toastId: 'bottomright-Toast' },
    ];

    // Add listeners for each toast button in the configuration
    toastConfigurations.forEach(config => {
        addToastEventListener(config.buttonId, config.toastId);
    });

    /* Toastify js */
    document.getElementById("toast-button").addEventListener("click", function () {
        Toastify({
            text: "I'm a toast Message",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            positionRight: true, // `true` or `false`
            backgroundColor: "linear-gradient(to right, var(--primary-color), rgb(215, 124, 247))"
        }).showToast();
    });

})();
