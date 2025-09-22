/* Image upload */
let loadFile = function (event) {
  const reader = new FileReader();
  
  reader.onload = function () {
    const output = document.getElementById("profile-img");
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].type.match("image.*")) {
        if(output) {
          output.src = reader.result;
        }
      } else {
        event.target.value = "";
        alert("Please select a valid image file.");
      }
    } else {
      // Handle case where no file is selected (user clicked cancel)
      event.target.value = "";
    }
  };
  
  if (event.target.files && event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
  }
};

// Select the input element and attach the event listener
let ProfileChange = document.querySelector("#profile-change");
if(ProfileChange) ProfileChange.addEventListener("change", loadFile);
  
  /* For Delete Contact */
  let invoicebtn = document.querySelectorAll(".contact-delete");
  invoicebtn.forEach((eleBtn) => {
    eleBtn.onclick = () => {
      let invoice = eleBtn.closest(".crm-contact");
      invoice.remove();
    };
  });
  