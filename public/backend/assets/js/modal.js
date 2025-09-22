(function () {
    "use strict";

    const exampleModal = document.getElementById('formmodal');
    if(exampleModal) {
        exampleModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget
            const recipient = button.getAttribute('data-bs-whatever')
            const modalTitle = exampleModal.querySelector('.modal-title')
            const modalBodyInput = exampleModal.querySelector('.modal-body input')
            modalTitle.textContent = 'New message to ' + recipient
            modalBodyInput.value = recipient
        })
    }

    // Animated modals 
        /* showing modal effects */
        const modal8 =document.querySelector("#modaldemo8");
        document.querySelectorAll(".modal-effect").forEach(e => {
            e.addEventListener('click', function (e) {
                e.preventDefault();
                let effect = this.getAttribute('data-bs-effect');
                if (modal8) {
                    modal8.classList.add(effect);
                }
            });
        })
        /* hide modal effects */
        if(modal8) {
            modal8.addEventListener('hidden.bs.modal', function (e) {
                let removeClass = this.classList.value.match(/(^|\s)effect-\S+/g);
                removeClass = removeClass[0].trim();
                this.classList.remove(removeClass);
            });
        }
    // Animated modals 
    
})();