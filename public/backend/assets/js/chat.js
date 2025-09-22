(function () {
    "use strict";

    const myElement1 = document.getElementById('chat-msg-scroll');
    if(myElement1) {
        new SimpleBar(myElement1, { autoHide: true });
    }

    const myElement2 = document.getElementById('groups-tab-pane');
    if(myElement2) {
        new SimpleBar(myElement2, { autoHide: true });
    }

    const myElement3 = document.getElementById('contacts-tab-pane');
    if(myElement3) {
        new SimpleBar(myElement3, { autoHide: true });
    }

    const myElement4 = document.getElementById('main-chat-content');
    if(myElement4) {
        new SimpleBar(myElement4, { autoHide: true });
    }
    
    const responsiveChatClose = document.querySelector(".responsive-chat-close");
    const mainChartWrapper = document.querySelector(".main-chart-wrapper");
    if(responsiveChatClose) {
        responsiveChatClose.addEventListener("click", () => {
            if(mainChartWrapper) {
                mainChartWrapper.classList.remove("responsive-chat-open")
            }
        })
    }

    const lightboxVideo = GLightbox({
        selector: '.glightbox'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
        const { slideIndex, slideNode, slideConfig, player } = current;
    });

})();

const updateElements = (selector, action) => {
   let eleRef = document.querySelectorAll(selector);
   if (eleRef) eleRef.forEach(action);
};

function changeTheInfo(element, name, img, status) {
    const image = `../assets/images/faces/${img}.jpg`;

    updateElements(".checkforactive", (el) => el.classList.remove("active"));
    element.closest("li").classList.add("active");

    updateElements(".chatnameperson", (el) => el.innerText = name);
    updateElements(".chatimageperson", (el) => el.src = image);

    updateElements(".chatstatusperson", (el) => {
        el.classList.remove("online");
        el.classList.remove("offline");
        el.classList.add(status);
    });

    document.querySelector(".chatpersonstatus").innerText = status;
    document.querySelector(".main-chart-wrapper").classList.add("responsive-chat-open");
}
new FgEmojiPicker({
    trigger: [".emoji-picker"],
    insertInto: document.querySelector(".chat-message-space"),
    closeButton: true,
    position: ['top', 'right'],
    preFetch: true,
    dir:"../assets/libs/fg-emoji-picker/"
});

