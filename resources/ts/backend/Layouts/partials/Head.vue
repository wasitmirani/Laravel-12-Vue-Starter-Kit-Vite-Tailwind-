<script setup lang="ts">
let auth_user = window.user;

function logOut(event:any) {
    event.preventDefault();
    window.location.href = window.location.origin + '/logout';

    }
</script>
<template >
<div>
    <!-- app-header -->
 <header class="app-header sticky" id="header">

    <!-- Start::main-header-container -->
    <div class="main-header-container container-fluid">

        <!-- Start::header-content-left -->
        <div class="header-content-left">

            <!-- Start::header-element -->
            <div class="header-element">
                <div class="horizontal-logo">
                    <a href="index.html" class="header-logo">
                        <img :src="`/backend/assets/images/brand-logos/desktop-logo.png`" alt="logo" class="desktop-logo">
                        <img :src="`/backend/assets/images/brand-logos/toggle-logo.png`" alt="logo" class="toggle-logo">
                        <img :src="`/backend/assets/images/brand-logos/desktop-dark.png`" alt="logo" class="desktop-dark">
                        <img :src="`/backend/assets/images/brand-logos/toggle-dark.png`" alt="logo" class="toggle-dark">
                    </a>
                </div>
            </div>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <div class="header-element mx-lg-0 mx-2">
                <a aria-label="Hide Sidebar" class="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="javascript:void(0);"><span></span></a>
            </div>
            <!-- End::header-element -->

            <div class="header-element  header-search header-search-content d-md-block d-none">
                <!-- Start::header-link -->
                <input type="text" class="header-search-bar form-control bg-white" id="header-search" placeholder="Search" spellcheck=false autocomplete="off" autocapitalize="off">
                <a href="javascript:void(0);" class="header-search-icon border-0">
                    <i class="bi bi-search fs-12 mb-1"></i>
                </a>
                <!-- End::header-link -->
            </div>

        </div>
        <!-- End::header-content-left -->

        <!-- Start::header-content-right -->
        <ul class="header-content-right">

            <!-- Start::header-element -->
            <li class="header-element d-md-none d-block">
                <a href="javascript:void(0);" class="header-link" data-bs-toggle="modal" data-bs-target="#header-responsive-search">
                    <!-- Start::header-link-icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="112" cy="112" r="80" opacity="0.2"/><circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                    <!-- End::header-link-icon -->
                </a>  
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element country-selector dropdown d-sm-block d-none">
                <!-- Start::header-link|dropdown-toggle -->
                <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M215,168.71a96.42,96.42,0,0,1-30.54,37l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.85-6.22l30.45-12.66a8,8,0,0,1,8.47,1.49Z" opacity="0.2"/><path d="M184,74a8,8,0,0,1-1.94,5.22L159.89,105a8,8,0,0,1-5,2.71l-31.46,4.26a8.06,8.06,0,0,1-5.77-1.45l-19.81-13a8,8,0,0,0-11.34,2l-20.94,31.3a8.06,8.06,0,0,0-1.35,4.41L64,171.49a8,8,0,0,1-3.61,6.64l-9.92,6.52A96,96,0,0,1,184,50Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184.42,205.68l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.85-6.22l30.45-12.66a8,8,0,0,1,8.47,1.49L215,168.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M50.49,184.65l9.92-6.52A8,8,0,0,0,64,171.49l.21-36.23a8.06,8.06,0,0,1,1.35-4.41l20.94-31.3a8,8,0,0,1,11.34-2l19.81,13a8.06,8.06,0,0,0,5.77,1.45l31.46-4.26a8,8,0,0,0,5-2.71L182.06,79.2A8,8,0,0,0,184,74V50" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </a>
                <!-- End::header-link|dropdown-toggle -->
                <ul class="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                                <img :src="`/backend/assets/images/flags/us_flag.jpg`" alt="img">
                            </span>
                            English
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                                <img :src="`/backend/assets/images/flags/spain_flag.jpg`" alt="img" >
                            </span>
                            español
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                                <img :src="`/backend/assets/images/flags/french_flag.jpg`" alt="img" >
                            </span>
                            français
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                                <img :src="`/backend/assets/images/flags/uae_flag.jpg`" alt="img" >
                            </span>
                            عربي
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                                <img :src="`/backend/assets/images/flags/germany_flag.jpg`" alt="img" >
                            </span>
                            Deutsch
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                                <img :src="`/backend/assets/images/flags/china_flag.jpg`" alt="img" >
                            </span>
                            中国人
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                                <img :src="`/backend/assets/images/flags/italy_flag.jpg`" alt="img" >
                            </span>
                            Italiano
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                            <span class="avatar avatar-rounded avatar-xs lh-1 me-2">
                                <img :src="`/backend/assets/images/flags/russia_flag.jpg`" alt="img" >
                            </span>
                            Русский
                        </a>
                    </li>
                </ul>
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element header-theme-mode">
                <!-- Start::header-link|layout-setting -->
                <a href="javascript:void(0);" class="header-link layout-setting">
                    <span class="light-layout">
                        <!-- Start::header-link-icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" opacity="0.2"/><path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                        <!-- End::header-link-icon -->
                    </span>
                    <span class="dark-layout">
                        <!-- Start::header-link-icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="56" opacity="0.2"/><line x1="128" y1="40" x2="128" y2="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="64" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="192" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="192" y1="64" x2="200" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="192" y1="192" x2="200" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="128" x2="32" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="216" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="216" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                        <!-- End::header-link-icon -->
                    </span>
                </a>
                <!-- End::header-link|layout-setting -->
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element cart-dropdown dropdown">
                <!-- Start::header-link|dropdown-toggle -->
                <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56Z" opacity="0.2"/><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="92" cy="204" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="188" cy="204" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                    <span class="badge bg-primary rounded-pill header-icon-badge" id="cart-icon-badge">5</span>
                </a>
                <!-- End::header-link|dropdown-toggle -->
                <!-- Start::main-header-dropdown -->
                <div class="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                    <div class="p-3 bg-primary text-fixed-white">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0 fs-16">Cart Items<span class="badge bg-warning ms-1 fs-12 rounded-circle" id="cart-data">5</span></p>
                            <a href="products.html" class="text-fixed-white text-decoration-underline fs-12">Continue Shopping <i class="ti ti-arrow-narrow-right"></i></a>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <ul class="list-unstyled mb-0" id="header-cart-items-scroll">
                        <li class="dropdown-item">
                            <div class="d-flex align-items-start cart-dropdown-item gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-xl bg-gray-300">
                                        <img :src="`/backend/assets/images/ecommerce/png/13.png`" alt="img">
                                    </span>
                                </div>
                                <div class="flex-fill w-75">
                                    <div class="d-flex align-items-start justify-content-between mb-3">
                                        <div class="fs-14 fw-medium w-75">
                                            <div class="text-truncate">
                                                <a href="cart.html">Urban Chic Satchel</a>
                                            </div>
                                            <div class="fs-11 text-muted text-truncate">
                                                <span>Sleek, stylish, and perfect for daily use</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <a href="javascript:void(0);" class="header-cart-remove dropdown-item-close"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="flex-fill">
                                            <div class="lh-1 fs-12 mb-1">
                                                <span class="text-muted fw-normal d-inline-block text-decoration-line-through">$120</span><span class="text-success ms-1">25% off</span>
                                            </div>
                                            <h6 class="fw-medium mb-0">$90</h6>
                                        </div>
                                        <div class="d-flex rounded align-items-center flex-nowrap order-qnt gap-2"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-minus">
                                                <i class="ri-subtract-line"></i> 
                                            </a> 
                                            <input type="text" class="form-control form-control-cart border-0 text-center w-100" aria-label="quantity" id="product-qty-1" value="1"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-plus">
                                                <i class="ri-add-line"></i> 
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown-item">
                            <div class="d-flex align-items-start cart-dropdown-item gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-xl bg-gray-300">
                                        <img :src="`/backend/assets/images/ecommerce/png/15.png`" alt="img">
                                    </span>
                                </div>
                                <div class="flex-fill w-75">
                                    <div class="d-flex align-items-start justify-content-between mb-3">
                                        <div class="fs-14 fw-medium w-75">
                                            <div class="text-truncate">
                                                <a href="cart.html">TrailBlaze Runners</a>
                                            </div>
                                            <div class="fs-11 text-muted text-truncate">
                                                <span>Lightweight and built for comfort</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <a href="javascript:void(0);" class="header-cart-remove dropdown-item-close"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="flex-fill">
                                            <div class="lh-1 fs-12 mb-1">
                                                <span class="text-muted fw-normal d-inline-block text-decoration-line-through">$80</span><span class="text-success ms-1">25% off</span>
                                            </div>
                                            <h6 class="fw-medium mb-0">$60</h6>
                                        </div>
                                        <div class="d-flex rounded align-items-center flex-nowrap order-qnt gap-2"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-minus">
                                                <i class="ri-subtract-line"></i> 
                                            </a> 
                                            <input type="text" class="form-control form-control-cart border-0 text-center w-100" aria-label="quantity" id="product-qty-2" value="1"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-plus">
                                                <i class="ri-add-line"></i> 
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown-item">
                            <div class="d-flex align-items-start cart-dropdown-item gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-xl bg-gray-300">
                                        <img :src="`/backend/assets/images/ecommerce/png/19.png`" alt="img">
                                    </span>
                                </div>
                                <div class="flex-fill w-75">
                                    <div class="d-flex align-items-start justify-content-between mb-3">
                                        <div class="fs-14 fw-medium w-75">
                                            <div class="text-truncate">
                                                <a href="cart.html">VisionTech SLR</a>
                                            </div>
                                            <div class="fs-11 text-muted text-truncate">
                                                <span>High-quality shots with every click</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <a href="javascript:void(0);" class="header-cart-remove dropdown-item-close"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="flex-fill">
                                            <div class="lh-1 fs-12 mb-1">
                                                <span class="text-muted fw-normal d-inline-block text-decoration-line-through">$500</span><span class="text-success ms-1">25% off</span>
                                            </div>
                                            <h6 class="fw-medium mb-0">$375</h6>
                                        </div>
                                        <div class="d-flex rounded align-items-center flex-nowrap order-qnt gap-2"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-minus">
                                                <i class="ri-subtract-line"></i> 
                                            </a> 
                                            <input type="text" class="form-control form-control-cart border-0 text-center w-100" aria-label="quantity" id="product-qty-3" value="1"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-plus">
                                                <i class="ri-add-line"></i> 
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown-item">
                            <div class="d-flex align-items-start cart-dropdown-item gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-xl bg-gray-300">
                                        <img :src="`/backend/assets/images/ecommerce/png/6.png`" alt="img">
                                    </span>
                                </div>
                                <div class="flex-fill w-75">
                                    <div class="d-flex align-items-start justify-content-between mb-3">
                                        <div class="fs-14 fw-medium w-75">
                                            <div class="text-truncate">
                                                <a href="cart.html">FlexiSeat Office Chair</a>
                                            </div>
                                            <div class="fs-11 text-muted text-truncate">
                                                <span>Comfortable support for long hours</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <a href="javascript:void(0);" class="header-cart-remove dropdown-item-close"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="flex-fill">
                                            <div class="lh-1 fs-12 mb-1">
                                                <span class="text-muted fw-normal d-inline-block text-decoration-line-through">$200</span><span class="text-success ms-1">25% off</span>
                                            </div>
                                            <h6 class="fw-medium mb-0">$150</h6>
                                        </div>
                                        <div class="d-flex rounded align-items-center flex-nowrap order-qnt gap-2"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-minus">
                                                <i class="ri-subtract-line"></i> 
                                            </a> 
                                            <input type="text" class="form-control form-control-cart border-0 text-center w-100" aria-label="quantity" id="product-qty-4" value="5"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-plus">
                                                <i class="ri-add-line"></i> 
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown-item">
                            <div class="d-flex align-items-start cart-dropdown-item gap-3">
                                <div class="lh-1">
                                    <span class="avatar avatar-xl bg-gray-300">
                                        <img :src="`/backend/assets/images/ecommerce/png/11.png`" alt="img">
                                    </span>
                                </div>
                                <div class="flex-fill w-75">
                                    <div class="d-flex align-items-start justify-content-between mb-3">
                                        <div class="fs-14 fw-medium w-75">
                                            <div class="text-truncate">
                                                <a href="cart.html">DecoDial Classic</a>
                                            </div>
                                            <div class="fs-11 text-muted text-truncate">
                                                <span>A bold, colorful timepiece for any room</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <a href="javascript:void(0);" class="header-cart-remove dropdown-item-close"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="flex-fill">
                                            <div class="lh-1 fs-12 mb-1">
                                                <span class="text-muted fw-normal d-inline-block text-decoration-line-through">$50</span><span class="text-success ms-1">30% off</span>
                                            </div>
                                            <h6 class="fw-medium mb-0">$35</h6>
                                        </div>
                                        <div class="d-flex rounded align-items-center flex-nowrap order-qnt gap-2"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-minus">
                                                <i class="ri-subtract-line"></i> 
                                            </a> 
                                            <input type="text" class="form-control form-control-cart border-0 text-center w-100" aria-label="quantity" id="product-qty-5" value="2"> 
                                            <a href="javascript:void(0);" class="badge bg-white p-1 border text-muted fs-13 product-quantity-plus">
                                                <i class="ri-add-line"></i> 
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="p-3 empty-header-item border-top">
                        <div class="text-center d-grid">
                            <a href="checkout.html" class="btn btn-primary btn-wave">Proceed to checkout</a>
                        </div>
                    </div>
                    <div class="p-5 empty-item d-none">
                        <div class="text-center">
                            <span class="avatar avatar-xl avatar-rounded bg-success-transparent">
                                <i class="ti ti-shopping-cart fs-2"></i>
                            </span>
                            <h6 class="fw-medium mb-1 mt-3">No items in your cart yet</h6>
                            <span class="mb-3 fw-normal fs-13 d-block">Add some to enjoy a seamless checkout experience! :)</span>
                        </div>
                    </div>
                </div>
                <!-- End::main-header-dropdown -->
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element notifications-dropdown d-xl-block d-none dropdown">
                <!-- Start::header-link|dropdown-toggle -->
                <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" opacity="0.2"/><path d="M96,192a32,32,0,0,0,64,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                    <span class="header-icon-pulse bg-secondary rounded pulse pulse-secondary"></span>
                </a>
                <!-- End::header-link|dropdown-toggle -->
                <!-- Start::main-header-dropdown -->
                <div class="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                    <div class="p-3 bg-primary text-fixed-white">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0 fs-16">Notifications</p>
                            <a href="javascript:void(0);" class="badge bg-light text-default border">Clear All</a>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <ul class="list-unstyled mb-0" id="header-notification-scroll">
                        <li class="dropdown-item position-relative">
                            <a href="chat.html" class="stretched-link"></a>
                            <div class="d-flex align-items-start gap-3">
                                 <div class="lh-1">
                                     <span class="avatar avatar-sm avatar-rounded bg-primary-transparent">
                                        <img :src="`/backend/assets/images/faces/1.jpg`" alt="">
                                     </span>
                                 </div>
                                 <div class="flex-fill">
                                    <span class="d-block fw-semibold">New Message</span>
                                    <span class="d-block text-muted fs-12">You have received a new message from John Doe</span>
                                 </div>
                                 <div class="text-end">
                                    <span class="d-block mb-1 fs-12 text-muted">11:45am</span>
                                    <span class="d-block text-primary d-none"><i class="ri-circle-fill fs-9"></i></span>
                                 </div>
                            </div>
                        </li>
                        <li class="dropdown-item position-relative">
                            <a href="chat.html" class="stretched-link"></a>
                            <div class="d-flex align-items-start gap-3">
                                 <div class="lh-1">
                                     <span class="avatar avatar-sm avatar-rounded bg-primary-transparent">
                                        <i class="ri-notification-line fs-16"></i>
                                     </span>
                                 </div>
                                 <div class="flex-fill">
                                    <span class="d-block fw-semibold">Task Reminder</span>
                                    <span class="d-block text-muted fs-12">Don't forget to submit your report by 3 PM today</span>
                                 </div>
                                 <div class="text-end">
                                    <span class="d-block mb-1 fs-12 text-muted">02:16pm</span>
                                    <span class="d-block text-primary d-none"><i class="ri-circle-fill fs-9"></i></span>
                                 </div>
                            </div>
                        </li>
                        <li class="dropdown-item position-relative">
                            <a href="chat.html" class="stretched-link"></a>
                            <div class="d-flex align-items-start gap-3">
                                 <div class="lh-1">
                                     <span class="avatar avatar-sm avatar-rounded bg-primary-transparent fs-5">
                                        <img :src="`/backend/assets/images/faces/12.jpg`" alt="">
                                     </span>
                                 </div>
                                 <div class="flex-fill">
                                    <span class="d-block fw-semibold">Friend Request</span>
                                    <span class="d-block text-muted fs-12">Jane Smith sent you a friend request</span>
                                 </div>
                                 <div class="text-end">
                                    <span class="d-block mb-1 fs-12 text-muted">10:04am</span>
                                    <span class="d-block text-primary"><i class="ri-circle-fill fs-9"></i></span>
                                 </div>
                            </div>
                        </li>
                        <li class="dropdown-item position-relative">
                            <a href="chat.html" class="stretched-link"></a>
                            <div class="d-flex align-items-start gap-3">
                                 <div class="lh-1">
                                     <span class="avatar avatar-sm avatar-rounded bg-primary-transparent fs-5">
                                        <i class="ri-notification-line fs-16"></i>
                                     </span>
                                 </div>
                                 <div class="flex-fill">
                                    <span class="d-block fw-semibold">Event Reminder</span>
                                    <span class="d-block text-muted fs-12">You have an upcoming event: Team Meeting on October 25 at 10 AM.</span>
                                 </div>
                                 <div class="text-end">
                                    <span class="d-block mb-1 fs-12 text-muted">12:58pm</span>
                                    <span class="d-block text-primary"><i class="ri-circle-fill fs-9"></i></span>
                                 </div>
                            </div>
                        </li>
                        <li class="dropdown-item position-relative">
                            <a href="chat.html" class="stretched-link"></a>
                            <div class="d-flex align-items-start gap-3">
                                 <div class="lh-1">
                                     <span class="avatar avatar-sm avatar-rounded bg-primary-transparent fs-5">
                                        <i class="ri-notification-line fs-16"></i>
                                     </span>
                                 </div>
                                 <div class="flex-fill">
                                    <span class="d-block fw-semibold">File Uploaded</span>
                                    <span class="d-block text-muted fs-12">The file "Project_Proposal.pdf" has been uploaded successfully</span>
                                 </div>
                                 <div class="text-end">
                                    <span class="d-block mb-1 fs-12 text-muted">05:13pm</span>
                                    <span class="d-block text-primary"><i class="ri-circle-fill fs-9"></i></span>
                                 </div>
                            </div>
                        </li>
                    </ul>
                    <div class="p-5 empty-item1 d-none">
                        <div class="text-center">
                            <span class="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                <i class="ri-notification-off-line fs-2"></i>
                            </span>
                            <h6 class="fw-medium mt-3">No New Notifications</h6>
                        </div>
                    </div>
                </div>
                <!-- End::main-header-dropdown -->
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element header-fullscreen">
                <!-- Start::header-link -->
                <a onclick="openFullscreen();" href="javascript:void(0);" class="header-link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="full-screen-open header-link-icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="48" width="160" height="160" opacity="0.2"/><polyline points="168 48 208 48 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="88 208 48 208 48 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="208 168 208 208 168 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="48 88 48 48 88 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="full-screen-close header-link-icon d-none" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="32" width="192" height="192" rx="16" opacity="0.2"/><polyline points="160 48 208 48 208 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="144" y1="112" x2="208" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="96 208 48 208 48 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="144" x2="48" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </a>
                <!-- End::header-link -->
            </li>
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element dropdown">
                <!-- Start::header-link|dropdown-toggle -->
                <a href="javascript:void(0);" class="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <div>
                        <img :src="`/backend/assets/images/faces/12.jpg`" alt="img" class="header-link-icon">
                    </div>
                </a>
                <!-- End::header-link|dropdown-toggle -->
                <div class="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                    <div class="p-3 bg-primary text-fixed-white">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="mb-0 fs-16">Profile</p>
                            <a href="javascript:void(0);" class="text-fixed-white"><i class="ti ti-settings-cog"></i></a>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class="p-3">
                        <div class="d-flex align-items-start gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-sm bg-primary-transparent avatar-rounded">
                                    <img :src="`/backend/assets/images/faces/12.jpg`" alt="">
                                </span>
                            </div>
                            <div>
                                <span class="d-block fw-semibold lh-1">Tom Phillip</span>
                                <span class="text-muted fs-12"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="0a7e65677a62636666637a39384a6d676b636624696567">[email&#160;protected]</a></span>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <ul class="list-unstyled mb-0 sub-list">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="profile.html"><i class="ti ti-user-circle me-2 fs-18"></i>View Profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="mail-settings.html"><i class="ti ti-settings-cog me-2 fs-18"></i>Account Settings</a>
                                </li>
                            </ul>        
                        </li>
                        <li>
                            <ul class="list-unstyled mb-0 sub-list">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);"><i class="ti ti-lifebuoy me-2 fs-18"></i>Support</a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);"><i class="ti ti-bolt me-2 fs-18"></i>Activity Log</a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);"><i class="ti ti-calendar me-2 fs-18"></i>Events</a>
                                </li>
                            </ul>        
                        </li>
                        <li><a class="dropdown-item d-flex align-items-center" href="sign-in-cover.html"><i class="ti ti-logout me-2 fs-18"></i>Log Out</a></li>
                    </ul>
                </div>
            </li>  
            <!-- End::header-element -->

            <!-- Start::header-element -->
            <li class="header-element">
                <!-- Start::header-link|switcher-icon -->
                <a href="javascript:void(0);" class="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                    <svg xmlns="http://www.w3.org/2000/svg" class="header-link-icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </a>
                <!-- End::header-link|switcher-icon -->
            </li>
            <!-- End::header-element -->

        </ul>
        <!-- End::header-content-right -->

    </div>
    <!-- End::main-header-container -->

</header>
<!-- /app-header -->
</div>
</template>

<style lang="">

</style>
