<script lang="ts" setup>
import { Helpers } from "../../Utils/Helper";
import SidebarMenu from "../../Utils/Sidebar";

const menuList: any = Helpers.useDynamicRef([]);

Helpers.useDynamicOnMounted(() => {
    let sidebar = new SidebarMenu();
    const fetchedMenuList = sidebar.getMenuList();
    menuList.value = fetchedMenuList;
});
function isActive(link: string) {
    return Helpers.route().path === link ? 'active' : '';

}
function isAllowed(value: string): boolean {
      console.log("isAllowed", value);
    return true;
    // if (permissions.includes(value)) {
    //     return true;
    // } else {
    //     return false;
    // }
}
const getMenuClass = (type: string) => {
    switch (type) {
        case "heading":
            return "menu-header fw-medium mt-4";
            break;
        default:
            return "menu-item";
            break;
    }
}
</script>

<template>
    <div>
        <!-- Start::app-sidebar -->
<aside class="app-sidebar sticky" id="sidebar">

    <!-- Start::main-sidebar-header -->
    <div class="main-sidebar-header">
        <a href="/" class="header-logo">
            <img :src="`assets/images/brand-logos/desktop-logo.png`" alt="logo" class="desktop-logo">
            <img :src="`assets/images/brand-logos/toggle-dark.png`" alt="logo" class="toggle-dark">
            <img :src="`assets/images/brand-logos/desktop-dark.png`" alt="logo" class="desktop-dark">
            <img :src="`assets/images/brand-logos/toggle-logo.png`" alt="logo" class="toggle-logo">
        </a>
    </div>
    <!-- End::main-sidebar-header -->

    <!-- Start::main-sidebar -->
    <div class="main-sidebar" id="sidebar-scroll">

        <!-- Start::nav -->
        <nav class="main-menu-container nav nav-pills flex-column sub-open">
            <div class="slide-left" id="slide-left">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
            </div>
            <ul class="main-menu">
                <!-- Start::slide__category -->
                <li class="slide__category"><span class="category-name">Main</span></li>
                <!-- End::slide__category -->

                <!-- Start::slide -->
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M133.66,34.34a8,8,0,0,0-11.32,0L40,116.69V216h64V152h48v64h64V116.69Z" opacity="0.2"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 216 152 152 104 152 104 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="116.69" x2="40" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="216" y1="216" x2="216" y2="116.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,132.69l98.34-98.35a8,8,0,0,1,11.32,0L232,132.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                        <span class="side-menu__label">Dashboards</span>
                        <i class="ri-arrow-right-s-line side-menu__angle"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide side-menu__label1">
                            <a href="javascript:void(0)">Dashboards</a>
                        </li>
                        <li class="slide">
                            <a href="index.html" class="side-menu__item"> 
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z" opacity="0.2"/><path d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="96" cy="96" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="160" cy="160" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="168" x2="168" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Sales</a>
                        </li>
                        <li class="slide">
                            <a href="index-1.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M33.6,145.5A96,96,0,0,1,96,37.5v72Z" opacity="0.2"/><path d="M33.6,145.5A96,96,0,0,1,96,37.5v72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,128.42V32A96,96,0,1,1,45.22,176.64Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Analytics</a>
                        </li>
                        <li class="slide has-sub">
                            <a href="javascript:void(0);" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" width="32" height="32" viewBox="0 0 256 256"><path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path></svg>
                                Ecommerce<span class="badge bg-primary-transparent ms-2">9</span>
                                <i class="ri-arrow-right-s-line side-menu__angle"></i>
                            </a>
                            <ul class="slide-menu child2">
                                <li class="slide">
                                    <a href="index-2.html" class="side-menu__item">Dashboard</a>
                                </li>
                                <li class="slide">
                                    <a href="products.html" class="side-menu__item">Products</a>
                                </li>
                                <li class="slide">
                                    <a href="product-details.html" class="side-menu__item">Product Details</a>
                                </li>
                                <li class="slide">
                                    <a href="cart.html" class="side-menu__item">Cart</a>
                                </li>
                                <li class="slide">
                                    <a href="checkout.html" class="side-menu__item">Checkout</a>
                                </li>
                                <li class="slide">
                                    <a href="customers-list.html" class="side-menu__item">Customers</a>
                                </li>
                                <li class="slide">
                                    <a href="orders.html" class="side-menu__item">Orders</a>
                                </li>
                                <li class="slide">
                                    <a href="orders-details.html" class="side-menu__item">Order Details</a>
                                </li>
                                <li class="slide">
                                    <a href="add-product.html" class="side-menu__item">Add Product</a>
                                </li>
                            </ul>    
                        </li>
                        <li class="slide has-sub">
                            <a href="javascript:void(0);" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="40 128 128 240 216 128 128 168 40 128" opacity="0.2"/><line x1="128" y1="16" x2="128" y2="240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="216 128 128 168 40 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="128 16 216 128 128 240 40 128 128 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Crypto<span class="badge bg-success-transparent ms-2">6</span>
                                <i class="ri-arrow-right-s-line side-menu__angle"></i>
                            </a>
                            <ul class="slide-menu child2">
                                <li class="slide">
                                    <a href="index-4.html" class="side-menu__item">Dashboard</a>
                                </li>
                                <li class="slide">
                                    <a href="crypto-transactions.html" class="side-menu__item">Transactions</a>
                                </li>
                                <li class="slide">
                                    <a href="crypto-currency-exchange.html" class="side-menu__item">Exchange</a>
                                </li>
                                <li class="slide">
                                    <a href="crypto-buy_sell.html" class="side-menu__item">Buy & Sell</a>
                                </li>
                                <li class="slide">
                                    <a href="crypto-marketcap.html" class="side-menu__item">Marketcap</a>
                                </li>
                                <li class="slide">
                                    <a href="crypto-wallet.html" class="side-menu__item">Wallet</a>
                                </li>
                            </ul>    
                        </li>
                        <li class="slide has-sub">
                            <a href="javascript:void(0);" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,32A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,128,32Z" opacity="0.2"/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                CRM<span class="badge bg-warning-transparent ms-2">5</span>
                                <i class="ri-arrow-right-s-line side-menu__angle"></i>
                            </a>
                            <ul class="slide-menu child2">
                                <li class="slide">
                                    <a href="index-3.html" class="side-menu__item">Dashboard</a>
                                </li>
                                <li class="slide">
                                    <a href="crm-contacts.html" class="side-menu__item">Contacts</a>
                                </li>
                                <li class="slide">
                                    <a href="crm-companies.html" class="side-menu__item">Companies</a>
                                </li>
                                <li class="slide">
                                    <a href="crm-deals.html" class="side-menu__item">Deals</a>
                                </li>
                                <li class="slide">
                                    <a href="crm-leads.html" class="side-menu__item">Leads</a>
                                </li>
                            </ul>    
                        </li>
                        <li class="slide has-sub">
                            <a href="javascript:void(0);" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z" opacity="0.2"/><path d="M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Projects<span class="badge bg-info-transparent ms-2">4</span>
                                <i class="ri-arrow-right-s-line side-menu__angle"></i>
                            </a>
                            <ul class="slide-menu child2">
                                <li class="slide">
                                    <a href="index-6.html" class="side-menu__item">Dashboard</a>
                                </li>
                                <li class="slide">
                                    <a href="projects-list.html" class="side-menu__item">Projects List</a>
                                </li>
                                <li class="slide">
                                    <a href="projects-overview.html" class="side-menu__item">Project Overview</a>
                                </li>
                                <li class="slide">
                                    <a href="projects-create.html" class="side-menu__item">Create Project</a>
                                </li>
                            </ul>    
                        </li>
                        <li class="slide">
                            <a href="index-8.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z" opacity="0.2"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M57.78,216a72,72,0,0,1,140.44,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                HRM</a>
                        </li>
                        <li class="slide">
                            <a href="index-9.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" opacity="0.2"/><path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="48 216 48 224 192 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Courses</a>
                        </li>
                        <li class="slide">
                            <a href="index-10.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,48H208a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H32a0,0,0,0,1,0,0V48A0,0,0,0,1,32,48Z" opacity="0.2"/><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="224 96 160 152 96 104 32 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Stocks</a>
                        </li>
                        <li class="slide has-sub">
                            <a href="javascript:void(0);" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M236.53,198.59A8,8,0,0,0,240,192V64A8,8,0,0,0,230,56.27C212.65,60.89,174.56,72,128,72S43.35,60.89,26.05,56.27A8,8,0,0,0,16,64v96.68l54.34-54.35a8,8,0,0,1,11.32,0L131.31,156,157,130.34a8,8,0,0,1,11.31,0Z" opacity="0.2"/><path d="M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="204" cy="108" r="12"/><path d="M16,160.69l54.34-54.35a8,8,0,0,1,11.32,0l79.46,79.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M131.31,156,157,130.34a8,8,0,0,1,11.31,0l68.25,68.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                NFT<span class="badge bg-danger-transparent ms-2">6</span>
                                <i class="ri-arrow-right-s-line side-menu__angle"></i>
                            </a>
                            <ul class="slide-menu child2">
                                <li class="slide">
                                    <a href="index-5.html" class="side-menu__item">Dashboard</a>
                                </li>
                                <li class="slide">
                                    <a href="nft-marketplace.html" class="side-menu__item">Market Place</a>
                                </li>
                                <li class="slide">
                                    <a href="nft-details.html" class="side-menu__item">NFT Details</a>
                                </li>
                                <li class="slide">
                                    <a href="nft-create.html" class="side-menu__item">Create NFT</a>
                                </li>
                                <li class="slide">
                                    <a href="nft-wallet-integration.html" class="side-menu__item">Wallet Integration</a>
                                </li>
                                <li class="slide">
                                    <a href="nft-live-auction.html" class="side-menu__item">Live Auction</a>
                                </li>
                            </ul>    
                        </li>
                        <li class="slide has-sub">
                            <a href="javascript:void(0);" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,144a191.14,191.14,0,0,1-96-25.68h0V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V118.31A191.08,191.08,0,0,1,128,144Z" opacity="0.2"/><line x1="112" y1="112" x2="144" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Jobs<span class="badge bg-success-transparent ms-2">8</span>
                                <i class="ri-arrow-right-s-line side-menu__angle"></i>
                            </a>
                            <ul class="slide-menu child2">
                                <li class="slide">
                                    <a href="index-7.html" class="side-menu__item">Dashboard</a>
                                </li>
                                <li class="slide">
                                    <a href="job-details.html" class="side-menu__item">Job Details</a>
                                </li>
                                <li class="slide">
                                    <a href="job-company-search.html" class="side-menu__item">Search Company</a>
                                </li>
                                <li class="slide">
                                    <a href="job-search.html" class="side-menu__item">Search Jobs</a>
                                </li>
                                <li class="slide">
                                    <a href="job-post.html" class="side-menu__item">Job Post</a>
                                </li>
                                <li class="slide">
                                    <a href="jobs-list.html" class="side-menu__item">Jobs List</a>
                                </li>
                                <li class="slide">
                                    <a href="job-candidate-search.html" class="side-menu__item">Search Candidate</a>
                                </li>
                                <li class="slide">
                                    <a href="job-candidate-details.html" class="side-menu__item">Candidate Details</a>
                                </li>
                            </ul>    
                        </li>
                        <li class="slide">
                            <a href="index-13.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="88" y="24" width="80" height="144" rx="40" opacity="0.2"/><rect x="88" y="24" width="80" height="144" rx="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="200" x2="128" y2="240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,128a72,72,0,0,1-144,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Podcast</a>
                        </li>
                        <li class="slide">
                            <a href="index-15.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M163.94,80.11h0A71.83,71.83,0,0,1,168,104h0a72,72,0,0,1-72,72H92.1A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152A72,72,0,0,0,163.94,80.11Z" opacity="0.2"/><path d="M96,176H32a8,8,0,0,1-8-8V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.1,176A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152a72,72,0,0,0-68.06-71.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Social Media</a>
                        </li>
                        <li class="slide">
                            <a href="index-14.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="120 168 192 168 192 80 64 80 64 200 120 200 120 168" opacity="0.2"/><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="200" x2="240" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="120 200 120 168 192 168 192 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="64 200 64 80 192 80 192 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                School</a>
                        </li>
                        <li class="slide">
                            <a href="index-11.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="56 128 96 40 160 208 200 128 56 128" opacity="0.2"/><polyline points="24 128 56 128 96 40 160 208 200 128 232 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                Medical</a>
                        </li>
                        <li class="slide">
                            <a href="index-12.html" class="side-menu__item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M24,88H232L216.93,201.06A8,8,0,0,1,209,208H47a8,8,0,0,1-7.93-6.94Z" opacity="0.2"/><line x1="128" y1="120" x2="128" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="184 88 128 24 72 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="180.8" y1="120" x2="175.2" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="75.2" y1="120" x2="80.8" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,88H232L216.93,201.06A8,8,0,0,1,209,208H47a8,8,0,0,1-7.93-6.94Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                POS System</a>
                        </li>
                    </ul>
                </li>
                <!-- End::slide -->
                
                    <template v-if="menuList?.length > 0">
                        <template v-for="(item, index) in menuList" :key="index">
                            <li v-if="item.type === 'heading'" class="slide__category">
                                <span class="category-name">{{ item.title }}</span>
                            </li>

                            <li v-else-if="item.type === 'single'" class="slide">
                                <RouterLink :to="item.link" class="side-menu__item">
                                    <i :class="`${item.icon}`"></i>
                                    <span class="side-menu__label">{{ item.title }}</span>
                                </RouterLink>
                            </li>

                            <li v-else-if="item.type === 'multi'" class="slide has-sub">
                                <a to="javascript:void(0)" class="side-menu__item">
                                    <i class="ri-arrow-right-s-line side-menu__angle"></i>
                                    <i :class="`${item.icon}`"></i>
                                    <span class="side-menu__label">{{ item.title }}</span>
                                </a>
                               
                                <ul class="slide-menu child1">
                                    <!-- <li class="slide side-menu__label1">
                                        <a href="javascript:void(0)">Maps</a>
                                    </li> -->
                                <li class="slide side-menu__label1">
                                    <a href="javascript:void(0)">{{ item.title }}</a>
                                </li>
                                    <li v-for="(subItem, subIndex) in item.sub_menu" :key="subIndex" class="slide  open">
                                        <!-- <a href="index.html" class="side-menu__item"> 
                                <svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z" opacity="0.2"/><path d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="96" cy="96" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="160" cy="160" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="168" x2="168" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                                  {{ subItem.title }}</a> -->
                               
                                        <RouterLink :to="subItem.link" class="side-menu__item">
                                                <!-- <i  :class="`${subItem.icon}`" ></i> -->
                                            {{ subItem.title }}
                                        </RouterLink>
                                    </li>
                                </ul>
                            </li>
                        </template>
                    </template>

            </ul>
            <ul class="doublemenu_bottom-menu main-menu mb-0 border-top">
                <!-- Start::slide -->
                <li class="slide">
                    <a href="javascript:void(0);" class="side-menu__item layout-setting-doublemenu">
                        <span class="light-layout">
                            <!-- Start::header-link-icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" opacity="0.2"/><path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                            <!-- End::header-link-icon -->
                        </span>
                        <span class="dark-layout">
                            <!-- Start::header-link-icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="56" opacity="0.2"/><line x1="128" y1="40" x2="128" y2="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="64" x2="56" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="192" x2="56" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="192" y1="64" x2="200" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="192" y1="192" x2="200" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="128" x2="32" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="216" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="216" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                            <!-- End::header-link-icon -->
                        </span>
                        <span class="side-menu__label">Theme Settings</span>
                    </a>
                </li>
                <!-- End::slide -->
                <!-- Start::slide -->
                <li class="slide">
                    <a href="sign-in-cover.html" class="side-menu__item">
                        <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,40H208a16,16,0,0,1,16,16V200a16,16,0,0,1-16,16H48a0,0,0,0,1,0,0V40A0,0,0,0,1,48,40Z" opacity="0.2"/><polyline points="112 40 48 40 48 216 112 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="184 88 224 128 184 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                        <span class="side-menu__label">Logout</span>
                    </a>
                </li>
                <!-- End::slide -->
                <!-- Start::slide -->
                <li class="slide">
                    <a href="profile-settings.html" class="side-menu__item">
                        <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M205.31,71.08a16,16,0,0,1-20.39-20.39A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,205.31,71.08Z" opacity="0.2"/><line x1="200" y1="40" x2="200" y2="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="200" cy="56" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="186.14" y1="48" x2="175.75" y2="42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="186.14" y1="64" x2="175.75" y2="70" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="72" x2="200" y2="84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="213.86" y1="64" x2="224.25" y2="70" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="213.86" y1="48" x2="224.25" y2="42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                        <span class="side-menu__label">Profile Settings</span>
                    </a>
                </li>
                <!-- End::slide -->
                <!-- Start::slide -->
                <li class="slide">
                    <a href="profile.html" class="side-menu__item p-1 rounded-circle mb-0">
                        <span class="avatar avatar-md avatar-rounded">
                            <img src="../assets/images/faces/10.jpg" alt="">
                        </span>
                    </a>
                </li>
                <!-- End::slide -->
            </ul>
            <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
        </nav>
        <!-- End::nav -->

    </div>
    <!-- End::main-sidebar -->

</aside>
<!-- End::app-sidebar -->
    </div>
</template>

<style scoped>

.menu-icon {
  font-size: 22px;
  width:30px;
  color: var(--primary-rgb) !important;
  /* height: 25px; */

  /* color: #666; */
  margin-right: 5px;
}
.sub-menu-icon {
  font-size: 18px !important;
    width:30px;
  color: var(--primary-rgb) !important;
  /* color: #666; */
  margin-right: 10px;
}

.badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: auto;
}

</style>
