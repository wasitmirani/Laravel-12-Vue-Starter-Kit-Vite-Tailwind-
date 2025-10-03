
<template >
    <div>
       <!-- Start::page-header -->
                <div class="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
                    <div>
                        <h1 class="page-title fw-medium fs-20 mb-0">Dashboard</h1>
                    </div>
                    <div class="d-flex align-items-center gap-2 flex-wrap">
                        <div class="form-group">
                            <input type="text" class="form-control breadcrumb-input" id="daterange" placeholder="Search By Date Range">
                        </div>
                        <div class="btn-list">
                            <button class="btn btn-icon btn-primary btn-wave">
                                <i class="ri-refresh-line"></i>
                            </button>
                            <button class="btn btn-icon btn-primary btn-wave me-0">
                                <i class="ri-filter-3-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- End::page-header -->

                <!-- Start:: row-1 -->
                <div class="row">
                    <div class="col-xxl-9">
                        <div class="row">
                            <div class="col-xl-3">
                                <div class="row">
                                    <div class="col-xl-12 col-md-6">
                                        <div class="card custom-card dashboard-main-card overflow-hidden primary">
                                            <div class="card-body">
                                                <div class="d-flex align-items-start gap-3">
                                                    <div class="flex-fill">
                                                        <span class="fs-13 fw-medium">Total Revenue</span>
                                                        <h4 class="fw-semibold my-2 lh-1">$46,658</h4>
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="fs-12 d-block text-muted"><span class="text-success me-1 d-inline-flex align-items-center fw-semibold"><i class="ti ti-trending-up me-1 fw-semibold align-middle"></i>0.45%</span>this month</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span class="avatar avatar-md bg-primary-transparent svg-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"/><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"/></g></svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-6">
                                        <div class="card custom-card dashboard-main-card overflow-hidden secondary">
                                            <div class="card-body">
                                                <div class="d-flex align-items-start gap-3">
                                                    <div class="flex-fill">
                                                        <span class="fs-13 fw-medium">Refund Requests</span>
                                                        <h4 class="fw-semibold my-2 lh-1">4,654</h4>
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="fs-12 d-block text-muted"><span class="text-success me-1 d-inline-flex align-items-center fw-medium"><i class="ti ti-trending-up me-1 fw-semibold align-middle"></i>4.43%</span>this month</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span class="avatar avatar-md bg-secondary-transparent svg-secondary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"/></svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-6">
                                        <div class="card custom-card dashboard-main-card overflow-hidden warning">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-start gap-3">
                                                    <div class="flex-fill">
                                                        <span class="fs-13 fw-medium">Total Orders</span>
                                                        <h4 class="fw-semibold my-2 lh-1">25,853</h4>
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="fs-12 d-block text-muted"><span class="text-success me-1 d-inline-flex align-items-center fw-medium"><i class="ti ti-trending-up me-1 fw-semibold align-middle"></i>1.25%</span>this month</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span class="avatar avatar-md bg-warning-transparent svg-warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-md-6">
                                        <div class="card custom-card dashboard-main-card overflow-hidden success">
                                            <div class="card-body p-4">
                                                <div class="d-flex align-items-start gap-3">
                                                    <div class="flex-fill">
                                                        <span class="fs-13 fw-medium">Total Visitors</span>
                                                        <h4 class="fw-semibold my-2 lh-1">63,744</h4>
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="fs-12 d-block text-muted"><span class="text-danger me-1 d-inline-flex align-items-center fw-medium"><i class="ti ti-trending-down me-1 fw-semibold align-middle"></i>2.97%</span>this month</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span class="avatar avatar-md bg-success-transparent svg-success">
                                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3 C23,14.82,19.43,13.53,16.67,13.13z" fill-rule="evenodd"/></g><g><circle cx="9" cy="8" fill-rule="evenodd" r="4"/></g><g><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24 C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76C14.09,11.9,14.53,12,15,12z" fill-rule="evenodd"/></g><g><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z" fill-rule="evenodd"/></g></g></g></svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div class="col-xl-9">
                                <div class="card custom-card">
                                    <div class="card-header justify-content-between">
                                        <div class="card-title">
                                            Sales Overview
                                        </div>
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example"> 
                                            <button type="button" class="btn btn-primary btn-wave waves-effect waves-light">Day</button> 
                                            <button type="button" class="btn btn-primary-light btn-wave waves-effect waves-light">Week</button> 
                                            <button type="button" class="btn btn-primary-light btn-wave waves-effect waves-light">Month</button> 
                                            <button type="button" class="btn btn-primary-light btn-wave waves-effect waves-light">Year</button> 
                                        </div>
                                    </div>
                                    <div class="card-body pb-0 pt-5">
                                        <div id="sales-overview"></div>
                                    </div>
                                    <div class="card-footer bg-light p-0">
                                        <div class="row g-0 w-100">
                                            <div class="col-sm-4 border-sm-end">
                                                <div class="p-3 text-center">
                                                    <span class="d-block text-muted mb-1">Total Orders</span>
                                                    <h6 class="fw-semibold mb-0">15,535</h6>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 border-sm-end">
                                                <div class="p-3 text-center">
                                                    <span class="d-block text-muted mb-1">Total Sales</span>
                                                    <h6 class="fw-semibold mb-0">21,754</h6>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="p-3 text-center">
                                                    <span class="d-block text-muted mb-1">Revenue Earned</span>
                                                    <h6 class="fw-semibold mb-0">$1.8M</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card custom-card shadow-none card-bg-primary overflow-hidden dashboard-banner-card">
                                    <div class="card-body">
                                        <div class="dashboard-banner-card-background">
                                            <img :src="`/backend/assets/images/media/backgrounds/8.png`" alt="">
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between gap-3">
                                            <div>
                                                <h5 class="fw-semibold mb-1 text-fixed-white">Hi, Tom Phillip &#128075;</h5>
                                                <span class="d-block fs-14 mb-3 pe-5 text-fixed-white">Check out the latest sales updates.</span>
                                                <a href="javascript:void(0)" class="btn btn-secondary btn-wave mt-1">Upgrade To Pro <i class="ti ti-arrow-narrow-right"></i></a>
                                            </div>
                                            <div class="dashboard-banner-image d-sm-block d-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="748.82965" height="557.20035" viewBox="0 0 748.82965 557.20035" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M276.60133,642.057c-3.59968,0-7.20676.1709-10.72934.51563l-.51267.0498c-23.36542,2.37793-40.45611,16.17286-39.75323,32.08985l.13588,2.87793c.08961,1.81933.18508,3.77539.26367,5.94531.04255,1.07031,1.31106,1.8916,2.88946,1.8916H803.62751c40.52148-.2832,80.89606-.63965,119.9956-1.05957a177.65216,177.65216,0,0,0,21.95374-1.30957c10.86591-1.48047,18.40759-4.415,23.05841-8.97168h.00147c5.78332-5.65039,5.96551-12.76562,5.6159-20.80469-.71246-16.23242-1.419-33.28515-2.12414-50.28613-.62281-14.9834-1.24274-29.92676-1.86261-44.2334-.38343-8.49023-1.23536-15.98437-7.80317-21.71191-7.11865-6.19434-20.10137-9.334-38.58831-9.334-.22333,0-.44507,0-.67133.001-57.9361.23731-115.34192,23.1709-142.8454,57.06732-3.16711,3.90332-6.11822,8.082-8.97247,12.124a158.91584,158.91584,0,0,1-13.7804,17.66406,66.94863,66.94863,0,0,1-9.10321,8.16894c-.22326.17774-.47888.36817-.7492.54883-.61847.46387-1.26477.91114-1.895,1.30957a62.04148,62.04148,0,0,1-11.60926,6.07617l-.40692.15723c-.30627.126-.6383.252-.97027.36719a68.20886,68.20886,0,0,1-7.17,2.20605c-10.484,2.66016-22.40545,3.29785-35.43151,1.89356a151.75182,151.75182,0,0,1-35.2295-8.26465c-12.06244-4.38867-23.3529-9.86035-34.27173-15.15137-4.79614-2.32519-9.75683-4.72851-14.711-7.00586-.93134-.42871-1.84723-.84765-2.7771-1.2666-6.05066-2.71484-11.5365-4.957-16.77045-6.85449a146.28118,146.28118,0,0,0-39.96478-8.52149c-14.40918-.9082-27.10688.80469-37.73191,5.07911a60.6496,60.6496,0,0,0-8.53469,4.23339c-12.58466,7.52344-20.343,18.627-27.845,29.36524-9.33233,13.35644-18.98275,27.16894-38.0382,34.3291-21.98825,8.26953-54.08371,4.834-76.791-1.14062-7.13919-1.87891-14.26956-4.04-21.16565-6.13086q-4.17768-1.26719-8.36136-2.51661c-5.48071-1.6289-9.96621-2.877-14.116-3.93066l-1.31253-.33594c-.73008-.18261-1.46088-.36523-2.20493-.53906-4.92911-1.19141-9.51892-2.12891-14.03891-2.86621l-1.06943-.17969c-2.144-.32519-4.14834-.5957-6.11526-.82324l-.78516-.08984A109.23844,109.23844,0,0,0,276.60133,642.057Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><path d="M343.64,685.3514a1.19069,1.19069,0,0,1,1.18683-1.19452h510.294a1.19069,1.19069,0,0,1,0,2.38135h-510.294A1.19066,1.19066,0,0,1,343.64,685.3514Z" transform="translate(-225.58517 -171.39982)" fill="#cacaca"/><path d="M746.00469,214.43986a42.86006,42.86006,0,0,1-11.46,29.24c-.56.61-1.15,1.2-1.75,1.77a650.40347,650.40347,0,0,0-69.84-46.89c.3-.76.62-1.51.97-2.25a43.04295,43.04295,0,0,1,82.08,18.13Z" transform="translate(-225.58517 -171.39982)" fill="rgb(var(--secondary-rgb))"/><path d="M780.91466,302.03984l-.04.45q-42.465-2.925-84.92-5.86c-20.45-1.41-41.61-3.01-59.68-12.69-6.86005-3.67-13.54-8.57-21.32-8.91-9.65-.43-18.07,6.32-24.69,13.36-39.13,41.68-50.46,105.41-94.36,142.02a1394.13755,1394.13755,0,0,1,98.86-197.31c7.04-11.65,15.39-24.09,28.46-27.89,12.47-3.63,25.23,1.67,36.71,8.47,2.46,1.46,4.86,2.99,7.18,4.51q26.535,17.36994,52.2,36.06995Q750.82971,277.19487,780.91466,302.03984Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><path d="M872.47466,390.43986a670.65125,670.65125,0,0,0-104.75-116.27q-16.965-14.91-34.93-28.72a650.40347,650.40347,0,0,0-69.84-46.89q-11.94-6.93-24.16-13.31c-6.33-3.29-13.07-6.3-20.37-5.83a27.10218,27.10218,0,0,0-14.07,5.41c-8.97,6.55-14.91,16.78-19.8,26.53-4.28,8.55-8.27,17.27-12.34,25.94-1.73,3.69-3.46,7.37-5.25,11.03q-9.36008,19.23-19.16,38.25-12.63,24.51-25.99,48.65-28.065,50.745-59.23,99.66-45.81006,71.895-98.02,139.43c-4.27,5.51-6.03,6.79-10.36,12.26-1,1.28-2.78-.52-1.79-1.79,36.11005-45.64,67.55005-88.76,99.25-137.58q35.85-55.215,67.76-112.88,10.245-18.49494,20.06-37.22,15.885-30.315,30.67-61.2,3.9-8.13,7.72-16.32c8.09-17.33,19.87-43.1,42.62-42.75,6.69.1,12.9,2.81,18.76,5.81,5.97,3.07,11.83,6.33,17.68,9.64q3.51,1.98,6.99,4.02,13.785,8.00994,27.16,16.69,22.32,14.47494,43.46,30.68,10.035,7.695,19.77,15.74a673.54712,673.54712,0,0,1,109.09,114.31q5.74493,7.635,11.25,15.44C875.59472,390.49986,873.40472,391.75981,872.47466,390.43986Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255,255,255, 0.3)"/><path d="M769.97685,261.4421c1.32186-1.47358,2.63549-2.94715,3.966-4.42072C784.43462,245.418,795.6924,233.94944,810.1,227.2973a52.4571,52.4571,0,0,1,21.97735-5.09434c7.86453.02529,15.55227,2.08825,22.819,4.97649,3.43559,1.37253,6.79554,2.93029,10.10449,4.58908,3.781,1.903,7.4945,3.93237,11.19076,5.97852q10.40791,5.75957,20.54571,12.02432,20.17137,12.46641,39.07925,26.83584,9.80167,7.45209,19.19878,15.39253,8.74029,7.37624,17.127,15.14831c1.19563,1.10307,2.98086-.68205,1.78523-1.78512-1.47357-1.37253-2.964-2.73664-4.45443-4.08388q-6.31532-5.70906-12.8329-11.19919-11.885-10.0287-24.38547-19.2827-19.43869-14.39893-40.21568-26.84427-10.38264-6.21425-21.051-11.90647c-2.14745-1.14516-4.32-2.26509-6.51759-3.32607a103.89918,103.89918,0,0,0-15.49347-6.30688,55.11725,55.11725,0,0,0-23.40035-2.29875,60.92335,60.92335,0,0,0-21.59005,7.46889c-14.14612,7.90678-25.11773,20.13318-35.795,32.06494C767.11358,260.86109,768.89058,262.65464,769.97685,261.4421Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255,255,255, 0.3)"/><path d="M480.12667,381.68342l-33.89782-12.39828-16.83038-6.15579c-5.48137-2.00484-10.94957-4.28719-16.616-5.72275a26.21362,26.21362,0,0,0-15.03952.19162,34.66256,34.66256,0,0,0-11.73046,7.27166,95.19524,95.19524,0,0,0-9.62144,10.275c-3.66428,4.40365-7.27444,8.85345-10.90079,13.28835q-22.45,27.45558-44.6064,55.14948-22.1559,27.69344-44.01554,55.62218-21.91307,27.997-43.52474,56.22818-2.64747,3.45842-5.2904,6.92031c-.97346,1.275-3.16844.018-2.18124-1.275q21.77112-28.515,43.84571-56.79666,22.1289-28.3492,44.56359-56.45793,22.43425-28.10817,45.17171-55.97256,5.66458-6.94185,11.34787-13.86842c3.196-3.89521,6.356-7.83243,9.86155-11.45793,6.43462-6.65486,14.47386-12.536,24.09692-12.69554,5.65786-.09382,11.13345,1.70155,16.3902,3.60326,5.667,2.05012,11.32041,4.1386,16.98015,6.20868l34.13486,12.485,8.53372,3.12124c1.51441.55391.8602,2.99613-.67154,2.43589Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255,255,255, 0.3)"/><path d="M814.56088,241.89784c17.22612-8.85335,39.28657-7.11936,55.11616,3.94157a786.11526,786.11526,0,0,0-89.43729,20.87423C792.44014,259.5639,801.98377,248.36189,814.56088,241.89784Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><path d="M869.84659,245.80893l3.31625,2.69552c-1.12172-.94344-2.28786-1.828-3.4858-2.665C869.73362,245.82965,869.79,245.8187,869.84659,245.80893Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><path d="M387.28886,381.80727c3.33682-4.06177,6.94448-8.31469,11.93551-9.96449l4.65975.18379A528.5525,528.5525,0,0,1,263.10428,532.971Q325.19657,457.38918,387.28886,381.80727Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><path d="M736.79357,610.34291l-28.21714-12.44874V587.19183l10.0561-.05651a7.46918,7.46918,0,0,0,7.044-5.10714l7.06437-21.193a7.46924,7.46924,0,0,0-7.08594-9.83122h-17.0785v-9.959h21.44024a7.46925,7.46925,0,0,0,7.27937-5.79584l4.865-21.16286a7.46923,7.46923,0,0,0-7.27937-9.14265H708.57643v-2.48975a4.97949,4.97949,0,0,0-9.959,0v2.48975H522.26028v-2.48975a4.9795,4.9795,0,0,0-9.959,0v2.48975h-20.9108a7.46923,7.46923,0,0,0-7.27937,9.14265l4.865,21.16286a7.46925,7.46925,0,0,0,7.27937,5.79584h16.04578v9.959H500.617a7.46923,7.46923,0,0,0-7.10927,9.76L500.7181,583.141a7.46925,7.46925,0,0,0,7.15123,5.17837l4.432-.0249v9.59968l-22.82269,12.44874a7.46922,7.46922,0,0,0-7.46924,7.46922v0a7.46925,7.46925,0,0,0,7.46924,7.46925h22.82269v54.77446a4.9795,4.9795,0,0,0,9.959,0V625.2814H698.61744v54.77446a4.9795,4.9795,0,0,0,9.959,0V625.2814h28.21714a7.46925,7.46925,0,0,0,7.46925-7.46925v0A7.46922,7.46922,0,0,0,736.79357,610.34291Zm-214.53329-69.298H698.61744v9.959H522.26028Zm0,56.84925v-9.65563l176.35716-.99076v10.64639Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.4)"/><path d="M315.95555,589.21408l7.98486-26.00457a87.77022,87.77022,0,0,0-35.0839-23.50552c13.12443,21.74329.40683,50.10772,5.70643,74.94591a52.79391,52.79391,0,0,0,28.27717,35.97783l12.11706,15.0135a88.46589,88.46589,0,0,0,6.50218-73.78667,85.453,85.453,0,0,0-9.89442-19.0176C324.36444,581.302,315.95555,589.21408,315.95555,589.21408Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><path d="M272.05023,592.53665l-4.45075-26.83629a87.7702,87.7702,0,0,0-41.8846-5.39169c21.444,13.60792,22.71121,44.6671,38.53194,64.53481a52.79391,52.79391,0,0,0,41.3547,19.59061l17.541,8.03374a88.466,88.466,0,0,0-27.08773-68.942,85.45248,85.45248,0,0,0-17.3374-12.60883C276.04789,581.70478,272.05023,592.53665,272.05023,592.53665Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><path d="M902.5106,479.11845,885.044,458.26383a87.77019,87.77019,0,0,1,23.18573-35.29606c-3.63882,25.13524,19.10562,46.32412,23.87929,71.26873a52.79386,52.79386,0,0,1-12.06557,44.141l-5.327,18.54322a88.4659,88.4659,0,0,1-34.67683-65.45432,85.45238,85.45238,0,0,1,1.72257-21.36823C891.68721,475.0979,902.5106,479.11845,902.5106,479.11845Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><path d="M944.2538,465.1105,937.92125,438.655a87.77005,87.77005,0,0,1,36.49358-21.25108c-14.46674,20.87426-3.55934,49.98279-10.41151,74.43825a52.79393,52.79393,0,0,1-30.48523,34.127l-13.03785,14.2212a88.46591,88.46591,0,0,1-1.84586-74.0496,85.45328,85.45328,0,0,1,11.0716-18.35724C936.35949,456.68492,944.2538,465.1105,944.2538,465.1105Z" transform="translate(-225.58517 -171.39982)" fill="rgba(255, 255, 255, 0.2)"/><polygon points="373.867 536.045 362.393 541.58 335.583 499.958 352.517 491.789 373.867 536.045" fill="#ffb6b6"/><path d="M600.74559,539.92239,590.54818,555.309s-60.63447,40.15326-58.10323,55.09015c.88547,5.22518,4.73286,16.21626,9.68184,28.46477,1.52072,3.76372,8.6663,11.24446,10.34108,15.11482,8.45541,19.54026,12.66545,35.17435,16.72606,37.26588,4.50965,2.33785,4.0477.48289,6.81076,4.74524l16-6s2.492-5.59411,3.72976-8.36482-.70312-4.14914-.70312-4.14914-2.34884,1.25171-1.9409-1.37838.26732-3.45993-.70312-4.14914-4.72555-7.73579-4.72555-7.73579a69.82223,69.82223,0,0,1-8.19389-16.23385c-.89266-2.521-.8037-8.56182-2-11-2.52046-5.13691-3.41208-8.92851-7.48445-11.59957,0,0,51.26687-24.90725,56.0774-36.82s-.13917-51.19588-.13917-51.19588Z" transform="translate(-225.58517 -171.39982)" fill="#2f2e41"/><path d="M605.53555,713.49,566.738,728.60018l-.19114-.49072A16.2068,16.2068,0,0,1,575.766,707.127l.001-.00038,4.99263-8.13674,15.31681.227,3.38679-1.319Z" transform="translate(-225.58517 -171.39982)" fill="#2f2e41"/><polygon points="470.462 475.448 489.209 474.029 486.873 523.483 474.17 524.444 470.462 475.448" fill="#ffb6b6"/><path d="M593.02692,553.52922c-4.3106-18.98155,7.83714,37.61669,20.4366,48.19854,4.95423,4.16091,25.69256-.14621,42.8621,1.16619a87.67112,87.67112,0,0,1,30.31954,8.23641c-2.73885,4.99134.12692,12.43982.6598,19.13657.97215,12.21694,1.951,23.45149,1.951,23.45149s-.00949,7.98466-.54308,9.04866-.26835,1.86279,1.326,3.99393-1.06716,2.12794-1.06716,2.12794-1.06715,2.128,1.326,3.99393,8.07377,7.30057,8.07377,7.30057l15.2371-1.353c.44-5.06062,1.75485-5.72611,4.64021-9.90671,2.74584-3.95613,2.11713-27.69491.18239-49.97665-.13112-1.5101,1.975-6.26147,1.83251-7.75157-1.42952-14.95072-5.64132-25.31417-7.49858-30.90816-1.28141-3.85954-7.43466-7.18789-15.75192-9.99213-1.26923-.42794-2.58886-.84367-3.94927-1.24722-22.9351-6.80347-57.45854-10.145-57.45854-10.145l-18.87706-16.79029Z" transform="translate(-225.58517 -171.39982)" fill="#2f2e41"/><path d="M698.047,693.13029l3.44938-1.14538,11.64877-9.948,9.036,3.07948.001-.00032a16.2068,16.2068,0,0,1,20.48676,10.27369l.16594.49981-39.51465,13.1209Z" transform="translate(-225.58517 -171.39982)" fill="#2f2e41"/><path d="M610.42386,444.23228l-11.34,8.635-13.676,4.20263s-5.65377,79.52833-10.74813,84.62269-.49987,5.23128-1.52352,11.84916-3.51168,20.18377-3.51168,20.18377c34.38707,18.20258,64.03233,18.69086,87.845-2.60926a5.93117,5.93117,0,0,0-3.23608-6.69462c-4.43194-2.35163,4.08556-13.32756.4636-15.16273s1.47241-17.755,1.47241-17.755l-3.34187-33.21557,2.64024-5.30957-6.44317-32.48858-11.18013-4.083-4.466-10.76026Z" transform="translate(-225.58517 -171.39982)" fill="rgb(255,255,255)"/><circle cx="396.44756" cy="245.59574" r="22.43078" fill="#ffb6b6"/><path d="M603.31993,585.581a9.8303,9.8303,0,0,0-11.20736-10.08022l-15.98166-31.06366L567.227,560.25692l16.54148,27.07327a9.88361,9.88361,0,0,0,19.55136-1.74918Z" transform="translate(-225.58517 -171.39982)" fill="#ffb6b6"/><path d="M576.40552,577.98205l-34.27838-53.12743.11315-.24444c.12942-.28007,7.89169-17.0446,15.413-32.39983,1.15826-2.36467,2.31081-4.69592,3.42889-6.9284q.72381-1.44525,1.42605-2.83006c3.159-6.22783,5.919-11.37528,7.56649-13.8204A29.01536,29.01536,0,0,1,585.45,456.96784l.15859-.04078.15141.06312a14.72433,14.72433,0,0,1,8.76284,16.19753,104.296,104.296,0,0,1-19.35291,43.755l-5.557,7.32473,19.31154,41.98522Z" transform="translate(-225.58517 -171.39982)" fill="rgb(255,255,255)"/><path d="M665.672,597.791v1.42726a3.15238,3.15238,0,0,1-3.1517,3.15168H557.69779a3.15237,3.15237,0,0,1-3.1517-3.15168V597.791a3.15235,3.15235,0,0,1,3.1517-3.15167H559.559a2.65083,2.65083,0,0,1-.10157-.70776V540.43129a2.645,2.645,0,0,1,2.64324-2.64334h96.01673a2.645,2.645,0,0,1,2.64325,2.64334v53.50028a2.49845,2.49845,0,0,1-.10158.70776h1.8612A3.15235,3.15235,0,0,1,665.672,597.791Z" transform="translate(-225.58517 -171.39982)" fill="#3f3d56"/><path d="M612.17439,568.01513a5.99072,5.99072,0,1,1,5.99071-5.99072A5.99747,5.99747,0,0,1,612.17439,568.01513Zm0-10.94882a4.95811,4.95811,0,1,0,4.9581,4.9581A4.96375,4.96375,0,0,0,612.17439,557.06631Z" transform="translate(-225.58517 -171.39982)" fill="#fff"/><circle cx="384.52404" cy="388.55935" r="5.47437" fill="#fff"/><path d="M694.27889,374.33627a9.83029,9.83029,0,0,0,2.35881,14.888l-7.14559,34.1951,16.87861-6.68267,4.19795-31.44773A9.88361,9.88361,0,0,0,694.279,374.33631Z" transform="translate(-225.58517 -171.39982)" fill="#ffb6b6"/><path d="M710.402,397.18741l-6.82552,62.85653-.24182.11865c-.19928.09793-8.84664,4.33935-19.46132,9.3906-1.79066.85213-1.534,4.54333-3.40547,5.42554-1.28914.60769-4.69342-1.5973-5.996-.98816-11.6023,5.42574-23.33421,10.70159-28.00981,12.13114a29.01531,29.01531,0,0,1-19.2887-.621l-.14887-.06818-.07788-.14438a14.72433,14.72433,0,0,1,3.39225-18.10082,104.29609,104.29609,0,0,1,42.58656-21.80405l8.92931-2.19087,11.43611-44.77622Z" transform="translate(-225.58517 -171.39982)" fill="rgb(255,255,255)"/><path d="M672.18567,373.68221l2.56841,23.30916A2.84507,2.84507,0,0,0,677.47344,399h11.83939a2.84516,2.84516,0,0,0,2.71966-2.00863l2.12733-17.86534A4.32088,4.32088,0,1,0,695.274,370.998a2.8198,2.8198,0,0,0-2.15867-.998h-18.21A2.84558,2.84558,0,0,0,672.18567,373.68221Zm22.34593,4.23569,1.303-4.23569a2.8158,2.8158,0,0,0,.04308-1.506c.05574-.003.10816-.01661.1645-.01661a3.08511,3.08511,0,0,1,0,6.17022A3.04612,3.04612,0,0,1,694.5316,377.9179Z" transform="translate(-225.58517 -171.39982)" fill="#3f3d56"/><path d="M640.30289,397.72555c-1.84465-5.36654-11.02746-9.08881-25.91418-9.60638s-18.66227,17.02576-18.66227,17.02576c-9.938,8.06174,10.61182,29.64505,11.606,28.86767l-.447-4.05508C606.1452,423.24079,603,418,607,411l3.841.0441q7.441,1.43086,14.882,2.8617l-5.87291-5.17092.1656-.25624a22.7265,22.7265,0,0,0,8.01667,2.43412c3.15652.18554,6.6074-1.0707,8.11933-3.84781a6.46562,6.46562,0,0,0,.72539-2.46008c4.25656,1.70064,6.203,6.94811,6.203,6.94811S642.14753,403.09209,640.30289,397.72555Z" transform="translate(-225.58517 -171.39982)" fill="#2f2e41"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="card custom-card">
                                    <div class="card-header justify-content-between">
                                        <div class="card-title">
                                            Visitors By Device
                                        </div>  
                                        <a href="javascript:void(0);" class="fs-12 text-muted text-decoration-underline">View Report <i class="ti ti-arrow-narrow-right"></i></a>
                                    </div>
                                    <div class="card-body px-0 py-4 my-2 pb-0">    
                                        <div id="visitors-report"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End:: row-1 -->

                <!-- Start:: row-2 -->
                <div class="row">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card custom-card overflow-hidden">
                            <div class="card-header justify-content-between">
                                <div class="card-title">
                                    Top Selling Products
                                </div>
                                <a href="javascript:void(0);" class="text-muted fs-12 text-decoration-underline">View All<i class="ti ti-arrow-narrow-right"></i></a>
                            </div>
                            <div class="card-body p-0">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-lg bg-light border border-dashed p-1">
                                                    <img :src="`/backend/assets/images/ecommerce/png/11.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="fw-semibold mb-1 d-block">TaoTronics Wall Clock</span>
                                                <div class="d-flex align-items-center gap-2 fw-medium">
                                                    <div class="fs-12 text-muted">$699</div>
                                                    <div class="vr"></div>
                                                    <span class="text-success fs-12"><i class="ri-circle-fill me-1 fs-7 align-middle"></i>In Stock</span>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <span class="d-block fw-semibold">1000</span>
                                                <span class="fs-12 d-block text-muted">Sales</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-lg bg-light border border-dashed p-1">
                                                    <img :src="`/backend/assets/images/ecommerce/png/12.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="fw-semibold mb-1 d-block">Club Fleece Hoodie</span>
                                                <div class="d-flex align-items-center gap-2 fw-medium">
                                                    <div class="fs-12 text-muted">$55</div>
                                                    <div class="vr"></div>
                                                    <span class="text-success fs-12"><i class="ri-circle-fill me-1 fs-7 align-middle"></i>In Stock</span>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <span class="d-block fw-semibold">3,100</span>
                                                <span class="fs-12 d-block text-muted">Sales</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-lg bg-light border border-dashed p-1">
                                                    <img :src="`/backend/assets/images/ecommerce/png/14.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="fw-semibold mb-1 d-block">SmartGizmo Pro Headset</span>
                                                <div class="d-flex align-items-center gap-2 fw-medium">
                                                    <div class="fs-12 text-muted">$199</div>
                                                    <div class="vr"></div>
                                                    <span class="text-success fs-12"><i class="ri-circle-fill me-1 fs-7 align-middle"></i>In Stock</span>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <span class="d-block fw-semibold">1,250</span>
                                                <span class="fs-12 d-block text-muted">Sales</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-lg bg-light border border-dashed p-1">
                                                    <img :src="`/backend/assets/images/ecommerce/png/16.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="fw-semibold mb-1 d-block">TaoTronics Cattle</span>
                                                <div class="d-flex align-items-center gap-2 fw-medium">
                                                    <div class="fs-12 text-muted">$699</div>
                                                    <div class="vr"></div>
                                                    <span class="text-danger fs-12"><i class="ri-circle-fill me-1 fs-7 align-middle"></i>Out Of Stock</span>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <span class="d-block fw-semibold">1000</span>
                                                <span class="fs-12 d-block text-muted">Sales</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="lh-1">
                                                <span class="avatar avatar-lg bg-light border border-dashed p-1">
                                                    <img :src="`/backend/assets/images/ecommerce/png/13.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="fw-semibold mb-1 d-block">UltraMaze Ladies Bag</span>
                                                <div class="d-flex align-items-center gap-2 fw-medium ">
                                                    <div class="fs-12 text-muted">$89</div>
                                                    <div class="vr"></div>
                                                    <span class="text-success fs-12"><i class="ri-circle-fill me-1 fs-7 align-middle"></i>In Stock</span>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <span class="d-block fw-semibold">2,150</span>
                                                <span class="fs-12 d-block text-muted">Sales</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card custom-card">
                            <div class="card-header justify-content-between">
                                <div class="card-title">
                                    Recent Activity
                                </div>
                                <a href="javascript:void(0);" class="text-muted fs-12 text-decoration-underline">View All<i class="ti ti-arrow-narrow-right"></i></a>
                            </div>
                            <div class="card-body px-sm-5">
                                <ul class="list-unstyled recent-activity-list">
                                    <li>
                                        <div class="recent-activity-time text-end">
                                            <span class="fw-semibold d-block">24,Nov</span>
                                            <span class="d-block text-muted fs-12">08:45 AM</span>
                                        </div>
                                        <div>
                                            <span class="d-block fs-13 mt-1">
                                                John Doe placed an order for <span class="fw-medium text-primary">5x Apple iPhone 14</span>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="recent-activity-time text-end">
                                            <span class="fw-semibold d-block">24,Nov</span>
                                            <span class="d-block text-muted fs-12">09:15 AM</span>
                                        </div>
                                        <div>
                                            <span class="d-block fs-13 mt-1">
                                                Payment of <span class="fw-medium text-default">$1,250.00</span> received from <span class="fw-medium text-default">Alice Smith</span> for <span class="fw-medium text-warning">Order #1020</span>.
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="recent-activity-time text-end">
                                            <span class="fw-semibold d-block">24,Nov</span>
                                            <span class="d-block text-muted fs-12">10:00 AM</span>
                                        </div>
                                        <div>
                                            <span class="d-block fs-13 mt-1">
                                                <span class="fw-medium text-default">David Brown</span> requested a refund for <span class="fw-medium text-info">1x Samsung Galaxy S22</span>.
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="recent-activity-time text-end">
                                            <span class="fw-semibold d-block">24,Nov</span>
                                            <span class="d-block text-muted fs-12">10:45 AM</span>
                                        </div>
                                        <div>
                                            <span class="d-block fs-13 mt-1">
                                                <span class="fw-medium text-success">Product ID: 5409</span> (Sony WH-1000XM5) stock dropped below threshold.
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="recent-activity-time text-end">
                                            <span class="fw-semibold d-block">24,Nov</span>
                                            <span class="d-block text-muted fs-12">11:30 AM</span>
                                        </div>
                                        <div>
                                            <span class="d-block fs-13 mt-1">
                                                <span class="fw-medium text-default">Emma Johnson</span> left a <span class="fw-medium text-default">5-star review</span> on <span class="fw-medium text-orange">Product ID: 7312</span> (Dell XPS 13).
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-6">
                        <div class="card custom-card">
                            <div class="card-header justify-content-between">
                                <div class="card-title">
                                    Top Customers
                                </div>
                                <a href="javascript:void(0);" class="text-muted fs-12 text-decoration-underline">View All<i class="ti ti-arrow-narrow-right"></i></a>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled top-customers-list">
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-primary-transparent">
                                                    JS
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">Jane Smith</span>
                                                <span class="fs-12 text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="076d666962746a6e736f35363247606a666e6b2964686a">[email&#160;protected]</a></span>
                                            </div>
                                            <div class="text-end">
                                                <div class="fw-semibold text-primary mb-0">$23,755</div>
                                                <span class="fs-12 text-muted">Spent</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-secondary-transparent">
                                                    JD
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">Jhon Doe</span>
                                                <span class="fs-12 text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="38525057565c575d0c0b09785f55595154165b5755">[email&#160;protected]</a></span>
                                            </div>
                                            <div class="text-end">
                                                <div class="fw-semibold text-secondary mb-0">$14,563</div>
                                                <span class="fs-12 text-muted">Spent</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-warning-transparent">
                                                    AK
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">Alicia Keys</span>
                                                <span class="fs-12 text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="81e0ede8e2e8e0eae4f8f2b8b9b7c1e6ece0e8edafe2eeec">[email&#160;protected]</a></span>
                                            </div>
                                            <div class="text-end">
                                                <div class="fw-semibold text-warning mb-0">$12,075</div>
                                                <span class="fs-12 text-muted">Spent</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-info-transparent">
                                                    LP
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">Leo Phillip</span>
                                                <span class="fs-12 text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b3dfd6dcc3dbdadfdfdac38484f3d4ded2dadf9dd0dcde">[email&#160;protected]</a></span>
                                            </div>
                                            <div class="text-end">
                                                <div class="fw-semibold text-info mb-0">$10,485</div>
                                                <span class="fs-12 text-muted">Spent</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-success-transparent">
                                                    BS
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">Brenda Simpson</span>
                                                <span class="fs-12 text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f89a8a9d969c998b9195888b9796c8cfcdb89f95999194d69b9795">[email&#160;protected]</a></span>
                                            </div>
                                            <div class="text-end">
                                                <div class="fw-semibold text-success mb-0">$8,533</div>
                                                <span class="fs-12 text-muted">Spent</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-6">
                        <div class="card custom-card overflow-hidden">
                            <div class="card-header justify-content-between">
                                <div class="card-title">
                                    Top User Channels
                                </div>
                                <div class="dropdown"> 
                                    <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fe fe-more-vertical"></i> 
                                    </a> 
                                    <ul class="dropdown-menu"> 
                                        <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li> 
                                        <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li> 
                                        <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li> 
                                    </ul> 
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled top-user-channels-list">
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-light">
                                                    <img :src="`/backend/assets/images/company-logos/1.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">CloudComm</span>
                                                <span class="text-muted fs-12">Digital Communication</span>
                                            </div>
                                            <div class="text-end">
                                                <div class="d-flex align-items-center gap-2 mb-2">
                                                    <span class="fs-12 text-success fw-medium"><i class="ti ti-arrow-narrow-up"></i>2.98%</span>
                                                    <div class="fw-semibold">3,765</div>
                                                </div>
                                                <div class="progress progress-xs progress-animate bg-primary-transparent" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar bg-primary" style="width: 75%">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-light">
                                                    <img :src="`/backend/assets/images/company-logos/2.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">BuzzWave</span>
                                                <span class="text-muted fs-12">Social Media</span>
                                            </div>
                                            <div class="text-end">
                                                <div class="d-flex align-items-center gap-2 mb-2">
                                                    <span class="fs-12 text-danger fw-medium"><i class="ti ti-arrow-narrow-down"></i>6.45%</span>
                                                    <div class="fw-semibold">2,855</div>
                                                </div>
                                                <div class="progress progress-xs progress-animate bg-secondary-transparent" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar bg-secondary" style="width: 45%">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-light">
                                                    <img :src="`/backend/assets/images/company-logos/3.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">NexusNet</span>
                                                <span class="text-muted fs-12">Networking</span>
                                            </div>
                                            <div class="text-end">
                                                <div class="d-flex align-items-center gap-2 mb-2">
                                                    <span class="fs-12 text-success fw-medium"><i class="ti ti-arrow-narrow-up"></i>1.95%</span>
                                                    <div class="fw-semibold">2,384</div>
                                                </div>
                                                <div class="progress progress-xs progress-animate bg-warning-transparent" role="progressbar" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar bg-warning" style="width: 81%">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-light">
                                                    <img :src="`/backend/assets/images/company-logos/4.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">FlashConnect</span>
                                                <span class="text-muted fs-12">Direct Marketing</span>
                                            </div>
                                            <div class="text-end">
                                                <div class="d-flex align-items-center gap-2 mb-2">
                                                    <span class="fs-12 text-danger fw-medium"><i class="ti ti-arrow-narrow-down"></i>5.91%</span>
                                                    <div class="fw-semibold">1,755</div>
                                                </div>
                                                <div class="progress progress-xs progress-animate bg-info-transparent" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar bg-info" style="width: 60%">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-light">
                                                    <img :src="`/backend/assets/images/company-logos/5.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">EchoLink</span>
                                                <span class="text-muted fs-12">Feedback & Surveys</span>
                                            </div>
                                            <div class="text-end">
                                                <div class="d-flex align-items-center gap-2 mb-2">
                                                    <span class="fs-12 text-success fw-medium"><i class="ti ti-arrow-narrow-up"></i>3.75%</span>
                                                    <div class="fw-semibold">1,525</div>
                                                </div>
                                                <div class="progress progress-xs progress-animate bg-success-transparent" role="progressbar" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar bg-success" style="width: 53%">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center gap-3 flex-wrap">
                                            <div class="lh-1">
                                                <span class="avatar avatar-md bg-light">
                                                    <img :src="`/backend/assets/images/company-logos/6.png`" alt="">
                                                </span>
                                            </div>
                                            <div class="flex-fill">
                                                <span class="d-block fw-semibold">VibeStream</span>
                                                <span class="text-muted fs-12">Content Distribution</span>
                                            </div>
                                            <div class="text-end">
                                                <div class="d-flex align-items-center gap-2 mb-2">
                                                    <span class="fs-12 text-success fw-medium"><i class="ti ti-arrow-narrow-up"></i>0.95%</span>
                                                    <div class="fw-semibold">1,345</div>
                                                </div>
                                                <div class="progress progress-xs progress-animate bg-danger-transparent" role="progressbar" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar bg-danger" style="width: 37%">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End:: row-2 -->    

                <!-- Start:: row-3 -->
                <div class="row">
                    <div class="col-xl-8"> 
                        <div class="card custom-card overflow-hidden">
                            <div class="card-header justify-content-between">
                                <div class="card-title">
                                    Recent Invoices
                                </div>
                                <div class="d-flex flex-wrap gap-2"> 
                                    <div class="dropdown custom-invoice"> 
                                        <a href="javascript:void(0);" class="btn btn-outline-light btn-wave waves-effect waves-light" data-bs-toggle="dropdown" aria-expanded="false">Filters<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </a> 
                                        <ul class="dropdown-menu" role="menu"> 
                                            <li><a class="dropdown-item" href="javascript:void(0);">New</a></li> 
                                            <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li> 
                                            <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li> 
                                        </ul> 
                                    </div> 
                                    <div> 
                                        <input class="form-control" type="text" placeholder="Search Here" aria-label=".form-control-sm example"> 
                                    </div> 
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table text-nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th><input class="form-check-input" type="checkbox" id="checkboxAll" value="" aria-label="..."></th>
                                                <th>ID</th>
                                                <th>Customer</th>
                                                <th>Ordered Date</th>
                                                <th>Items</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input class="form-check-input" type="checkbox" id="checkbox1" value="" aria-label="..." checked>
                                                </td>
                                                <td>#SPK231</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div class="lh-1">
                                                            <span class="avatar avatar-sm avatar-rounded bg-primary">
                                                                JS
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="d-block fw-semibold">Jane Smith</span>
                                                            <span class="fs-12 d-block text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="89e3e8e7ecfae4e0fde1bbb8bac9eee4e8e0e5a7eae6e4">[email&#160;protected]</a></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        27,Aug 2024 
                                                    </div>
                                                    <div class="text-muted fs-12">
                                                        12:45PM
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/3.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/4.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/5.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    $1,249
                                                </td>
                                                <td>
                                                    <span class="badge bg-success-transparent">Paid</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown custom-invoice"> 
                                                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light border" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fe fe-more-vertical"></i> </a> 
                                                        <ul class="dropdown-menu"> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-eye-line me-2"></i>View</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-pencil-line me-2"></i>Edit</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2"></i>Delete</a></li> 
                                                        </ul> 
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input class="form-check-input" type="checkbox" id="checkbox2" value="" aria-label="..." checked>
                                                </td>
                                                <td>#SPK421</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div class="lh-1">
                                                            <span class="avatar avatar-sm avatar-rounded bg-secondary">
                                                               JD
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="d-block fw-semibold">Jhon Doe</span>
                                                            <span class="fs-12 d-block text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7a101215141e151f424c4f3a1d171b131654191517">[email&#160;protected]</a></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>16,Sep 2024</div>
                                                    <div class="fs-12 text-muted">
                                                        11:15AM
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/1.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/2.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    $3,299
                                                </td>
                                                <td>
                                                    <span class="badge bg-warning-transparent">Pending</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown custom-invoice"> 
                                                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light border" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fe fe-more-vertical"></i> </a> 
                                                        <ul class="dropdown-menu"> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-eye-line me-2"></i>View</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-pencil-line me-2"></i>Edit</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2"></i>Delete</a></li> 
                                                        </ul> 
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input class="form-check-input" type="checkbox" id="checkbox3" value="" aria-label="...">
                                                </td>
                                                <td>#SPK175</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div class="lh-1">
                                                            <span class="avatar avatar-sm avatar-rounded bg-warning">
                                                                ED
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="d-block fw-semibold">Emiley Davis</span>
                                                            <span class="fs-12 d-block text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b0d5ddd9dcd5c9d4d1c6d9c3828384f0d7ddd1d9dc9ed3dfdd">[email&#160;protected]</a></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        15,Sep 2024
                                                    </div>
                                                    <div class="fs-12 text-muted">
                                                        04:45PM
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/5.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/6.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    $4,799
                                                </td>
                                                <td>
                                                    <span class="badge bg-danger-transparent">Overdue</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown custom-invoice"> 
                                                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light border" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fe fe-more-vertical"></i> </a> 
                                                        <ul class="dropdown-menu"> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-eye-line me-2"></i>View</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-pencil-line me-2"></i>Edit</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2"></i>Delete</a></li> 
                                                        </ul> 
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input class="form-check-input" type="checkbox" id="checkbox13" value="" aria-label="..." checked>
                                                </td>
                                                <td>#SPK145</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div class="lh-1">
                                                            <span class="avatar avatar-sm avatar-rounded bg-info">
                                                                LP
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="d-block fw-semibold">Leo Phillip</span>
                                                            <span class="fs-12 d-block text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ddb1b8b2adb5b4b1b1b4ade9efee9dbab0bcb4b1f3beb2b0">[email&#160;protected]</a></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        21,Sep 2024 
                                                    </div>
                                                    <div class="fs-12 text-muted">
                                                        02:18PM
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/3.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    $2,499
                                                </td>
                                                <td>
                                                    <span class="badge bg-success-transparent">Paid</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown custom-invoice"> 
                                                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light border" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fe fe-more-vertical"></i> </a> 
                                                        <ul class="dropdown-menu"> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-eye-line me-2"></i>View</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-pencil-line me-2"></i>Edit</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2"></i>Delete</a></li> 
                                                        </ul> 
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border-bottom-0">
                                                    <input class="form-check-input" type="checkbox" id="checkbox4" value="" aria-label="...">
                                                </td>
                                                <td class="border-bottom-0">#SPK426</td>
                                                <td class="border-bottom-0">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <div class="lh-1">
                                                            <span class="avatar avatar-sm avatar-rounded bg-success">
                                                                SL
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span class="d-block fw-semibold">Sara Lee</span>
                                                            <span class="fs-12 d-block text-muted"><a href="https://sprukomarket.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="cdbeacbfaca1a8a8fafbf88daaa0aca4a1e3aea2a0">[email&#160;protected]</a></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="border-bottom-0">
                                                    <div>19,Oct 2024</div>
                                                    <div class="fs-12 text-muted">03:52PM</div>
                                                </td>
                                                <td class="border-bottom-0">
                                                    <div class="avatar-list-stacked">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/4.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/1.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                                <td class="border-bottom-0">
                                                    $3,999
                                                </td>
                                                <td class="border-bottom-0">
                                                    <span class="badge bg-success-transparent">Paid</span>
                                                </td>
                                                <td class="border-bottom-0">
                                                    <div class="dropdown custom-invoice"> 
                                                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light border" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fe fe-more-vertical"></i> </a> 
                                                        <ul class="dropdown-menu"> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-eye-line me-2"></i>View</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-pencil-line me-2"></i>Edit</a></li> 
                                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-line me-2"></i>Delete</a></li> 
                                                        </ul> 
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="card-footer"> 
                                <div class="d-flex align-items-center flex-wrap"> 
                                    <div> Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold custom-arrow"></i> </div> 
                                    <div class="ms-auto"> 
                                        <nav aria-label="Page navigation" class="pagination-style-2">
                                            <ul class="pagination mb-0 flex-wrap">
                                                <li class="page-item disabled">
                                                    <a class="page-link" href="javascript:void(0);">
                                                        Prev
                                                    </a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                                                <li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="javascript:void(0);">
                                                        <i class="bi bi-three-dots"></i>
                                                    </a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                                                <li class="page-item">
                                                    <a class="page-link text-primary" href="javascript:void(0);">
                                                        next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card custom-card overflow-hidden">
                            <div class="card-header justify-content-between">
                                <div class="card-title">
                                    Recent Transactions
                                </div>
                                <div class="dropdown"> 
                                    <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-light border" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fe fe-more-vertical"></i> </a> 
                                    <ul class="dropdown-menu"> 
                                        <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li> 
                                        <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li> 
                                        <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li> 
                                    </ul> 
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Order
                                                </th>
                                                <th>
                                                    Price
                                                </th>
                                                <th class="text-end">
                                                    Products
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="flex-fill">
                                                        <div><span class="fw-semibold">Order Id</span> - #SPK1234</div>
                                                        <div class="d-flex align-items-center gap-2 fw-medium">
                                                            <div class="fs-12 text-muted">4 Items</div>
                                                            <div class="vr"></div>
                                                            <span class="badge bg-success-transparent"><i class="ri-check-line me-1 align-middle"></i>Paid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span class="d-block fw-semibold">$150.00</span>
                                                        <span class="d-block fs-12 text-muted">2024-08-27</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked text-end">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/1.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/2.jpg`" alt="img">
                                                        </span>
                                                        <a class="avatar bg-primary avatar-rounded avatar-sm text-fixed-white" href="javascript:void(0);">
                                                            +2
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="flex-fill">
                                                        <div><span class="fw-semibold">Order Id</span> - #SPK7432</div>
                                                        <div class="d-flex align-items-center gap-2 fw-medium">
                                                            <div class="fs-12 text-muted">3 Items</div>
                                                            <div class="vr"></div>
                                                            <span class="badge bg-warning-transparent"><i class="ri-time-line me-1 align-middle"></i>Pending</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span class="d-block fw-semibold">$75.00</span>
                                                        <span class="d-block fs-12 text-muted">2024-08-26</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked text-end">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/3.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/4.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/5.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="flex-fill">
                                                        <div><span class="fw-semibold">Order Id</span> - #SPK3422</div>
                                                        <div class="d-flex align-items-center gap-2 fw-medium">
                                                            <div class="fs-12 text-muted">2 Items</div>
                                                            <div class="vr"></div>
                                                            <span class="badge bg-success-transparent"><i class="ri-check-line me-1 align-middle"></i>Paid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span class="d-block fw-semibold">$200.00</span>
                                                        <span class="d-block fs-12 text-muted">2024-08-25</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked text-end">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/6.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/2.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="flex-fill">
                                                        <div><span class="fw-semibold">Order Id</span> - #SPK1578</div>
                                                        <div class="d-flex align-items-center gap-2 fw-medium">
                                                            <div class="fs-12 text-muted">1 Items</div>
                                                            <div class="vr"></div>
                                                            <span class="badge bg-success-transparent"><i class="ri-check-line me-1 align-middle"></i>Paid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span class="d-block fw-semibold">$120.00</span>
                                                        <span class="d-block fs-12 text-muted">2024-08-24</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked text-end">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/5.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="flex-fill">
                                                        <div><span class="fw-semibold">Order Id</span> - #SPK2355</div>
                                                        <div class="d-flex align-items-center gap-2 fw-medium">
                                                            <div class="fs-12 text-muted">5 Items</div>
                                                            <div class="vr"></div>
                                                            <span class="badge bg-danger-transparent"><i class="ri-close-line me-1 align-middle"></i>Failed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span class="d-block fw-semibold">$90.00</span>
                                                        <span class="d-block fs-12 text-muted">2024-08-23</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="avatar-list-stacked text-end">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/1.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/4.jpg`" alt="img">
                                                        </span>
                                                        <a class="avatar bg-primary avatar-rounded avatar-sm text-fixed-white" href="javascript:void(0);">
                                                            +3
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border-bottom-0">
                                                    <div class="flex-fill">
                                                        <div><span class="fw-semibold">Order Id</span> - #SPK1643</div>
                                                        <div class="d-flex align-items-center gap-2 fw-medium">
                                                            <div class="fs-12 text-muted">1 Items</div>
                                                            <div class="vr"></div>
                                                            <span class="badge bg-success-transparent"><i class="ri-check-line me-1 align-middle"></i>Paid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="border-bottom-0">
                                                    <div>
                                                        <span class="d-block fw-semibold">$249.00</span>
                                                        <span class="d-block fs-12 text-muted">2024-08-16</span>
                                                    </div>
                                                </td>
                                                <td class="border-bottom-0">
                                                    <div class="avatar-list-stacked text-end">
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/6.jpg`" alt="img">
                                                        </span>
                                                        <span class="avatar avatar-rounded avatar-sm bg-light">
                                                            <img :src="`/backend/assets/images/ecommerce/jpg/2.jpg`" alt="img">
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End:: row-3 -->
    </div>
</template>

