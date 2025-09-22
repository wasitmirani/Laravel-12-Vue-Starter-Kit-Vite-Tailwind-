(function () {
  "use strict";

  dragula([
    document.querySelector("#leads-discovered"),
    document.querySelector("#leads-qualified"),
    document.querySelector("#contact-initiated"),
    document.querySelector("#needs-identified"),
    document.querySelector("#negotiation"),
    document.querySelector("#deal-finalized"),
  ]);

      /* To choose date and time */
    flatpickr("#datetime", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        disableMobile: true
    });
    
  /* TargetDate Picker */
  flatpickr("#targetDate", {
    enableTime: true,
    minTime: "16:00",
    maxTime: "22:00",
    disableMobile: true
  });

  /* Image upload */
  let loadFile = function (event) {
    const reader = new FileReader();
    reader.onload = function () {
      const output = document.getElementById("profile-img");
      if (event.target.files[0].type.match("image.*")) {
        if(output) {
          output.src = reader.result;
        }
      } else {
        event.target.value = "";
        alert("please select a valid image");
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  // for profile photo update
  let ProfileChange = document.querySelector("#profile-change");
  if(ProfileChange) ProfileChange.addEventListener("change", loadFile);
  
})();
