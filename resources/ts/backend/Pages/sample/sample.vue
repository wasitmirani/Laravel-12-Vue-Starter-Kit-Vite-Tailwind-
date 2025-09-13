<script setup>

</script>

<template>
    <div>
        <div class="row g-6 mb-6">
            <h4 class="mb-1">Users List</h4>
            <p class="mb-6">A role provided access to predefined menus and features so that depending on assigned role
                an administrator can have access to what user needs.</p>
        </div>

        <!-- Users List Table -->
        <div class="row mt-4">
            <div class="card">
                <div class="card-header border-bottom">
                    <div class="row">

                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <SearchInput label="Search Users" api_url="/user" />
                            <!--
                            <SearchInput label="Search Users" v-on:loading="loadingStart($event)"
                                v-on:reload="getUsers()" v-on:filterData="filterData($event)" api_url="/category" /> -->
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-6 ">
                            <div  style="float:right">
                                <!-- <router-link :to="{ name: 'create-user' }"
                                    class="btn btn-primary waves-effect waves-light">Add User</router-link> -->

                                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"
                                    class="btn ml-2 mr-2 btn-icon btn-label-primary waves-effect">
                                    <span class="tf-icons ri-filter-2-line"></span>

                                </button>
                                <button type="button"
                                    class="btn btn-icon btn-label-primary waves-effect">
                                    <span class="tf-icons ri-refresh-line"></span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <div class="row">
                        <!-- Users Table -->

                    </div>
                </div>
            </div>
        </div>


        <!-- Offcanvas to add new user -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Filters</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body mx-0 flex-grow-0 h-100">

            </div>
        </div>
</div>

</template>
