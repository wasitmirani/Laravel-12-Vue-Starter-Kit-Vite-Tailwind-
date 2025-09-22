"use strict";

// Global initialization functions
const navbar = document.getElementById("sidebar");
const navbar1 = document.getElementById("header");

const sticky = navbar.offsetTop;
const sticky1 = navbar1.offsetTop;

function stickyFn() {
  // Logic to make elements sticky
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky-pin");
  } else {
    navbar.classList.remove("sticky-pin");
  }

  if (window.scrollY >= sticky1) {
    navbar1.classList.add("sticky-pin");
  } else {
    navbar1.classList.remove("sticky-pin");
  }
}

// IIFE for specific event binding and initialization
(() => {
  window.addEventListener('scroll', stickyFn);
  window.addEventListener('DOMContentLoaded', stickyFn);
})();
